import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  schemaData?: object;
}

export const SEO = ({ 
  title = "THEVØIDN13 — Memorial Artístico e Práxis Híbrida",
  description = "Memorial artístico digital explorando arte, código e consciência através de co-criação humano-máquina por Castro Pizzano (цастро™)",
  image = "https://storage.googleapis.com/gpt-engineer-file-uploads/dpNDyX5RGxTrFXnXvKMoxZ7zPGQ2/social-images/social-1761609148119-THEVOIDN13_Concept_Art_Web.png",
  type = "website",
  schemaData
}: SEOProps) => {
  const location = useLocation();
  const url = `https://thevoidn13.com${location.pathname}`;

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const metaTags = [
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:url', content: url },
      { property: 'og:type', content: type },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
    ];

    metaTags.forEach(({ name, property, content }) => {
      const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`;
      let meta = document.querySelector(selector);
      
      if (!meta) {
        meta = document.createElement('meta');
        if (name) meta.setAttribute('name', name);
        if (property) meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    });

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

    // Add structured data if provided
    if (schemaData) {
      let script = document.getElementById('structured-data') as HTMLScriptElement;
      if (!script) {
        script = document.createElement('script');
        script.id = 'structured-data';
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schemaData);
    }

    // No tracking - static site
  }, [title, description, image, url, type, schemaData, location.pathname]);

  return null;
};

// Structured Data Schemas

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Castro Pizzano",
  "alternateName": ["цастро™", "PUNK"],
  "jobTitle": "Visual Artist, Designer, Experimental Filmmaker",
  "description": "Multidisciplinary creative professional working between visual arts, design and audiovisual production",
  "affiliation": [
    {
      "@type": "Organization",
      "name": "UNESPAR",
      "department": "PPG-CINEAV"
    },
    {
      "@type": "Organization",
      "name": "CasaTrezeStudio®"
    },
    {
      "@type": "Organization",
      "name": "LowPressure™"
    }
  ],
  "alumniOf": [
    {
      "@type": "EducationalOrganization",
      "name": "Universidade Tuiuti do Paraná",
      "degree": "Bachelor's in Advertising and Propaganda"
    },
    {
      "@type": "EducationalOrganization",
      "name": "Unicuritiba",
      "degree": "Postgraduate in Art Direction and Creative Strategies"
    }
  ],
  "knowsAbout": [
    "Cinema Experimental",
    "Videoarte",
    "Design Gráfico",
    "Skate Culture",
    "Processos Criativos Colaborativos"
  ],
  "url": "https://thevoidn13.com/autor",
  "sameAs": [
    "https://www.instagram.com/thevoidn13/",
    "https://castropizzano.com",
    "https://behance.net/castropizzano",
    "https://vimeo.com/castropizzano",
    "http://lattes.cnpq.br/5523516994010198"
  ]
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "CasaTrezeStudio®",
  "alternateName": "Casa Treze Studio",
  "description": "Coletivo criativo fundado em 2008. Laboratório de criação autoral, cultural e comercial",
  "foundingDate": "2008",
  "founder": personSchema,
  "url": "https://thevoidn13.com",
  "sameAs": [
    "https://www.instagram.com/thevoidn13/",
    "https://casatrezestudio.com",
    "https://behance.net/castropizzano"
  ],
  "knowsAbout": [
    "Design Gráfico",
    "Produção Audiovisual",
    "Direção de Arte",
    "Cinema Experimental"
  ]
};

export const creativeWorkSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "THEVØIDN13",
  "alternateName": "The Void Number Thirteen",
  "description": "Memorial artístico e acadêmico de práxis híbrida. Projeto transmídia que integra cinema experimental, videoarte, design e processos criativos colaborativos",
  "creator": personSchema,
  "dateCreated": "2024",
  "datePublished": "2025-01-28",
  "inLanguage": ["pt-BR", "en-US"],
  "keywords": "cinema experimental, videoarte, skate culture, arte contemporânea, processos criativos, práxis híbrida, co-criação IA",
  "genre": ["Experimental Cinema", "Video Art", "Contemporary Art"],
  "license": "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  "url": "https://thevoidn13.com",
  "isPartOf": {
    "@type": "Thesis",
    "name": "LowMovie™ e o Labirinto Criativo",
    "author": {
      "@type": "Person",
      "name": "Castro Pizzano"
    },
    "educationalLevel": "Master's Degree",
    "inSupportOf": "Cinema e Artes do Vídeo"
  }
};

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const videoObjectSchema = (video: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration: string;
  contentUrl: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": video.name,
  "description": video.description,
  "thumbnailUrl": video.thumbnailUrl,
  "uploadDate": video.uploadDate,
  "duration": video.duration,
  "contentUrl": video.contentUrl,
  "embedUrl": video.contentUrl,
  "publisher": {
    "@type": "Person",
    "name": "Castro Pizzano"
  }
});
