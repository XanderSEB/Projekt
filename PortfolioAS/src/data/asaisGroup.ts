export interface Service {
  title: string;
  description: string;
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  imageUrl?: string;
  technologies: string[];
  benefits: string[];
  link?: string;
  featured?: boolean;
}

export interface ASAISGroupInfo {
  name: string;
  hero: {
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  description: string;
  services: Service[];
  projects?: Project[];
  contact: {
    email: string;
    phone?: string;
  };
  website?: string;
}

export const asaisGroupInfo: ASAISGroupInfo = {
  name: 'ASAIS Group',
  hero: {
    headline: 'Minimale digitale Lösungen, maximale Wirkung',
    subheadline: 'Web-, Mobile- und 3D-Erlebnisse für Unternehmen',
    ctaPrimary: 'Demo anfordern',
    ctaSecondary: 'Services ansehen',
  },
  description: 'Spezialisten für Web- und App-Entwicklung, IT-Support und interaktive 3D-Lösungen. Minimalistisches Design, robuste Performance. Starten Sie Ihr Projekt mit einem bewährten Technologiepartner.',
  services: [
    {
      title: 'Webapp Entwicklung',
      description: 'Personalisierte Software für vielseitige Geschäftsbereiche. Skalierbare, sichere Web-Apps mit hoher Performance, modernen Frameworks und nahtloser API-Integration.',
    },
    {
      title: 'Individuelle Web-Plattformen',
      description: 'Skalierbare, sichere Web-Apps mit hoher Performance, modernen Frameworks und nahtloser API-Integration. Maßgeschneidert auf Ihre Geschäftsanforderungen.',
    },
    {
      title: 'Mobile Apps',
      description: 'Plattformübergreifende Mobile-Lösungen für iOS und Android. Schnell, intuitiv und für jedes Gerät optimiert.',
    },
    {
      title: 'Websites',
      description: 'Minimale, responsive Websites mit schnellen Ladezeiten, interaktiven 3D-Elementen und starker Barrierefreiheit sowie SEO.',
    },
    {
      title: 'IT-Support & Consulting',
      description: 'Proaktives Monitoring, Fehlerbehebung und Support für Ihre digitale Infrastruktur. Zuverlässig und sicher.',
    },
    {
      title: '3D & Interaktive Medien',
      description: 'Begeistern Sie Nutzer mit interaktiven 3D-Modellen und Animationen. Wir integrieren moderne Medien, um Produkte zu präsentieren und Storytelling zu verbessern.',
    },
  ],
  projects: [],
  contact: {
    email: 'contact@asaisgroup.com',
    phone: '+1 (555) 000-0000',
  },
  website: 'https://asais-group.webflow.io',
};





