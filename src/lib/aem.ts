// AEM Content Fragment Integration Layer
// This file handles all communication with the AEM GraphQL API

const AEM_ENDPOINT = process.env.AEM_ENDPOINT_URL || 'http://localhost:4502/graphql';
const AEM_AUTH_TOKEN = process.env.AEM_AUTH_TOKEN || '';

export interface ContentFragment {
  heroImageRef: string;
  heroImageAlt: string;
  pageTitle: string;
  pageSubtitle: string;
  ctaLabel: string;
  ctaUrl: string;
  introductionText: string;
  tourHighlights: Array<{ title: string; description: string }>;
  ticketSectionTitle: string;
  tickets: Array<{
    ticketName: string;
    ticketPrice: string;
    ticketDescription: string;
    ticketImageRef: string;
  }>;
  galleryImages: Array<{ src: string; alt: string; caption?: string }>;
  visitInfoTitle: string;
  openingHours: string;
  address: string;
  accessibilityInfo: string;
  metaTitle: string;
  metaDescription: string;
}

/**
 * Fetch content fragment from AEM
 * Will use live AEM GraphQL API once endpoint is provided by Alex
 * For now, returns mock data matching the agreed CF schema
 */
export async function getContentFragment(): Promise<ContentFragment> {
  try {
    // TODO: Replace this with actual AEM GraphQL query once endpoint is live
    if (process.env.NODE_ENV === 'production' && AEM_ENDPOINT && AEM_AUTH_TOKEN) {
      return fetchFromAEM();
    }
    return getMockData();
  } catch (error) {
    console.error('Error fetching content fragment:', error);
    return getMockData();
  }
}

/**
 * Fetch from live AEM Content Fragment API
 */
async function fetchFromAEM(): Promise<ContentFragment> {
  const graphqlQuery = `
    query {
      tourBernabeuFragment {
        _path
        title
        subtitle
        heroImage {
          _path
        }
        introText
        highlights {
          title
          description
        }
        tickets {
          name
          price
          description
          image {
            _path
          }
        }
        gallery {
          image {
            _path
          }
          caption
        }
        visitInfo {
          openingHours
          address
          accessibility
        }
        metaTitle
        metaDescription
      }
    }
  `;

  const response = await fetch(AEM_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${AEM_AUTH_TOKEN}`,
    },
    body: JSON.stringify({ query: graphqlQuery }),
    // Cache for 1 hour (3600 seconds) in ISR
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`AEM API error: ${response.statusText}`);
  }

  const data = await response.json();
  return transformAEMResponse(data);
}

/**
 * Transform AEM GraphQL response to our ContentFragment interface
 */
function transformAEMResponse(aemData: any): ContentFragment {
  const fragment = aemData.data.tourBernabeuFragment;
  return {
    heroImageRef: fragment.heroImage._path,
    heroImageAlt: fragment.title,
    pageTitle: fragment.title,
    pageSubtitle: fragment.subtitle,
    ctaLabel: 'Reservar Ahora',
    ctaUrl: '/tickets',
    introductionText: fragment.introText,
    tourHighlights: fragment.highlights.map((h: any) => ({
      title: h.title,
      description: h.description,
    })),
    ticketSectionTitle: 'Entradas Disponibles',
    tickets: fragment.tickets.map((t: any) => ({
      ticketName: t.name,
      ticketPrice: `€${t.price}`,
      ticketDescription: t.description,
      ticketImageRef: t.image._path,
    })),
    galleryImages: fragment.gallery.map((g: any) => ({
      src: g.image._path,
      alt: g.caption || 'Galería Bernabéu',
      caption: g.caption,
    })),
    visitInfoTitle: 'Información de Visita',
    openingHours: fragment.visitInfo.openingHours,
    address: fragment.visitInfo.address,
    accessibilityInfo: fragment.visitInfo.accessibility,
    metaTitle: fragment.metaTitle,
    metaDescription: fragment.metaDescription,
  };
}

/**
 * Mock data matching the CF schema exactly
 * Used in development and as fallback
 */
function getMockData(): ContentFragment {
  return {
    heroImageRef: 'https://via.placeholder.com/1920x600?text=Bernab%C3%A9u+Stadium',
    heroImageAlt: 'Estadio Bernabéu - Vista General',
    pageTitle: 'Tour Virtual Bernabéu',
    pageSubtitle: 'Explora el icónico estadio del Real Madrid',
    ctaLabel: 'Reservar Entrada',
    ctaUrl: '/tickets',
    introductionText:
      'Bienvenido al Estadio Bernabéu, hogar del Real Madrid desde 1947. Descubre la historia, arquitectura y emoción de uno de los estadios más emblemáticos del fútbol mundial.',
    tourHighlights: [
      {
        title: 'Capacidad',
        description: '81,044 espectadores',
      },
      {
        title: 'Fundación',
        description: 'Inaugurado en 1947',
      },
      {
        title: 'Localización',
        description: 'Madrid, España',
      },
      {
        title: 'Museo',
        description: 'Explora la historia del Club',
      },
    ],
    ticketSectionTitle: 'Elige tu Entrada',
    tickets: [
      {
        ticketName: 'Entrada General',
        ticketPrice: '€25',
        ticketDescription: 'Acceso general a todas las áreas del estadio',
        ticketImageRef: 'https://via.placeholder.com/300x200?text=General',
      },
      {
        ticketName: 'Entrada Premium',
        ticketPrice: '€45',
        ticketDescription: 'Acceso premium con lugares privilegiados',
        ticketImageRef: 'https://via.placeholder.com/300x200?text=Premium',
      },
      {
        ticketName: 'Visita Guiada',
        ticketPrice: '€35',
        ticketDescription: 'Tour completo con guía profesional',
        ticketImageRef: 'https://via.placeholder.com/300x200?text=Guided+Tour',
      },
    ],
    galleryImages: [
      {
        src: 'https://via.placeholder.com/300x300?text=Exterior',
        alt: 'Exterior del Bernabéu',
        caption: 'Fachada principal',
      },
      {
        src: 'https://via.placeholder.com/300x300?text=Interior',
        alt: 'Interior del estadio',
        caption: 'Vista del campo',
      },
      {
        src: 'https://via.placeholder.com/300x300?text=Museo',
        alt: 'Museo del Real Madrid',
        caption: 'Exposición del museo',
      },
      {
        src: 'https://via.placeholder.com/300x300?text=VIP+Lounge',
        alt: 'Zona VIP',
        caption: 'Áreas VIP',
      },
    ],
    visitInfoTitle: 'Información de Visita',
    openingHours:
      'Lunes a Viernes: 10:00 - 18:00\nSábados: 10:00 - 19:00\nDomingos y festivos: 10:00 - 18:30\nCerrado durante eventos deportivos',
    address: 'Avenida Concha Espina, 1, 28036 Madrid, España',
    accessibilityInfo:
      'El estadio cuenta con acceso completo para personas con discapacidad. Se dispone de ascensores, baños adaptados y estacionamiento reservado.',
    metaTitle: 'Tour Virtual Bernabéu - Estadio Real Madrid',
    metaDescription:
      'Explora el icónico Estadio Bernabéu del Real Madrid con nuestro tour virtual interactivo. Descubre la historia y arquitectura del mayor templo del fútbol.',
  };
}
