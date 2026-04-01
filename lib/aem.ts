import axios, { AxiosInstance } from 'axios';
import { TourBernabeuContent, AEMContentFragmentResponse, ApiResponse } from './types';

class AEMClient {
  private client: AxiosInstance;
  private publishUrl: string;
  private fragmentPath: string;
  private graphqlEndpoint: string;

  constructor() {
    this.publishUrl = process.env.NEXT_PUBLIC_AEM_PUBLISH_URL || '';
    this.fragmentPath = process.env.NEXT_PUBLIC_CF_FRAGMENT_PATH || '';
    this.graphqlEndpoint = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT || '';

    this.client = axios.create({
      baseURL: this.publishUrl,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  /**
   * Fetch Tour Bernabéu content via GraphQL API
   */
  async fetchTourContent(): Promise<ApiResponse<TourBernabeuContent>> {
    try {
      if (!this.graphqlEndpoint) {
        throw new Error('GraphQL endpoint not configured');
      }

      const query = `
        query {
          contentFragmentByPath(path: "${this.fragmentPath}") {
            pageTitle
            heroSubtitle
            heroImageUrl
            introductionText
            tourHighlights
            openingHours
            ticketPriceAdult
            ticketPriceChild
            ticketCtaLabel
            ticketCtaUrl
            galleryImages
            metaDescription
            metaTitle
          }
        }
      `;

      const response = await this.client.post(this.graphqlEndpoint, { query });

      if (response.data.errors) {
        throw new Error(`GraphQL Error: ${response.data.errors[0]?.message}`);
      }

      return {
        success: true,
        data: response.data.data.contentFragmentByPath,
      };
    } catch (error: any) {
      console.error('Error fetching tour content from AEM:', error.message);
      return {
        success: false,
        error: error.message,
      };
    }
  }

  /**
   * Fetch via REST API (alternative to GraphQL)
   */
  async fetchTourContentRest(): Promise<ApiResponse<TourBernabeuContent>> {
    try {
      const url = `${this.publishUrl}${this.fragmentPath}.json`;
      const response = await this.client.get(url);

      return {
        success: true,
        data: response.data,
      };
    } catch (error: any) {
      console.error('Error fetching tour content via REST:', error.message);
      return {
        success: false,
        error: error.message,
      };
    }
  }
}

export const aemClient = new AEMClient();
export default AEMClient;
