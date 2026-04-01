import { TourBernabeuContent } from '@/types/TourBernabeuContent';

interface AEMResponse {
  data?: {
    contentFragmentByPath?: TourBernabeuContent;
  };
  errors?: Array<{ message: string }>;
}

export class AEMClient {
  private endpoint: string;
  private apiKey: string;

  constructor(endpoint?: string, apiKey?: string) {
    this.endpoint = endpoint || process.env.AEM_CF_ENDPOINT || '';
    this.apiKey = apiKey || process.env.AEM_CF_API_KEY || '';
  }

  async fetchTourContent(): Promise<TourBernabeuContent | null> {
    if (!this.endpoint) {
      console.warn('AEM_CF_ENDPOINT not configured. Using mock data.');
      return null;
    }

    try {
      const headers: HeadersInit = {
        'Content-Type': 'application/json',
      };

      if (this.apiKey) {
        headers['Authorization'] = `Bearer ${this.apiKey}`;
      }

      const response = await fetch(this.endpoint, {
        method: 'GET',
        headers,
        cache: 'no-store',
      });

      if (!response.ok) {
        console.error(`AEM fetch failed: ${response.status} ${response.statusText}`);
        return null;
      }

      const data: AEMResponse = await response.json();

      if (data.errors && data.errors.length > 0) {
        console.error('AEM GraphQL errors:', data.errors);
        return null;
      }

      return data.data?.contentFragmentByPath || null;
    } catch (error) {
      console.error('Error fetching from AEM:', error);
      return null;
    }
  }
}