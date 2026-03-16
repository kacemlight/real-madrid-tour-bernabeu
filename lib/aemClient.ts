// AEM Content Fragment client
// Supports both REST and GraphQL endpoints

interface AEMClientConfig {
  baseUrl: string;
  graphqlEndpoint: string;
  timeout?: number;
}

const config: AEMClientConfig = {
  baseUrl: process.env.NEXT_PUBLIC_AEM_BASE_URL || '',
  graphqlEndpoint: process.env.AEM_GRAPHQL_ENDPOINT || '',
  timeout: parseInt(process.env.AEM_API_TIMEOUT || '5000', 10)
};

export async function fetchContentFragment<T>(
  fragmentPath: string
): Promise<T | null> {
  if (!config.baseUrl) {
    console.warn('AEM_BASE_URL not configured, using mock data');
    return null;
  }

  try {
    const url = new URL(fragmentPath, config.baseUrl);
    url.searchParams.append('depth', '1');
    url.searchParams.append('limit', '100');

    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.AEM_SERVICE_TOKEN || ''}`,
      },
      signal: AbortSignal.timeout(config.timeout)
    });

    if (!response.ok) {
      throw new Error(`AEM API error: ${response.status}`);
    }

    const data: T = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching from AEM:', error);
    return null;
  }
}

export async function fetchGraphQL<T>(query: string): Promise<T | null> {
  if (!config.baseUrl || !config.graphqlEndpoint) {
    console.warn('AEM GraphQL endpoint not configured, using mock data');
    return null;
  }

  try {
    const url = new URL(config.graphqlEndpoint, config.baseUrl);
    const response = await fetch(url.toString(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.AEM_SERVICE_TOKEN || ''}`,
      },
      body: JSON.stringify({ query }),
      signal: AbortSignal.timeout(config.timeout)
    });

    if (!response.ok) {
      throw new Error(`AEM GraphQL error: ${response.status}`);
    }

    const data: T = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching from AEM GraphQL:', error);
    return null;
  }
}
