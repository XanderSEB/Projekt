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
  projects: [
    {
      id: 'restaurant-1992',
      title: 'Restaurant 1992 - Moderne Restaurant-Website',
      description: 'Eine vollständige Restaurant-Website mit Online-Speisekarte, Event-Buchungssystem und Reservierungsfunktion. Entwickelt für ein traditionelles Restaurant in Zweiflingen mit Fokus auf kulinarische Exzellenz und Kundenerlebnis.',
      longDescription: 'Die Website für Restaurant 1992 bietet Gästen eine umfassende digitale Präsenz mit wöchentlich wechselnder Speisekarte, Event-Buchungsmöglichkeiten und detaillierten Informationen über Öffnungszeiten und Angebote. Die intuitive Navigation ermöglicht es Besuchern, schnell Reservierungen vorzunehmen und Events anzufragen. Besonders hervorzuheben ist die Integration des ARIES BBQ Konzepts und die Präsentation der kulinarischen Philosophie von Chefkoch Kenny.',
      technologies: ['Webflow', 'Responsive Design', 'CMS', 'Event Management', 'Online Reservierung'],
      benefits: [
        'Steigerung der Online-Sichtbarkeit und Kundenakquise',
        'Einfache Verwaltung von Speisekarten und Events',
        'Nahtlose Reservierungs- und Event-Buchungsfunktion',
        'Professionelle Präsentation der kulinarischen Angebote',
        'Mobile-optimiert für Zugriff von unterwegs',
      ],
      link: 'https://restaurant1992.de',
      featured: true,
    },
    {
      id: 'viktoria-schwab-nails',
      title: 'Viktoria Schwab Nails - Nagelstudio Website',
      description: 'Eine elegante und moderne Website für ein Nagelstudio mit Galerie, Service-Präsentation und direkter WhatsApp-Terminbuchung. Fokus auf visuelle Präsentation der Nagelkunst und einfache Kundenkommunikation.',
      longDescription: 'Die Website für Viktoria Schwab Nails präsentiert die Dienstleistungen des Nagelstudios in einer ansprechenden, benutzerfreundlichen Form. Mit einer umfangreichen Bildergalerie, detaillierten Service-Beschreibungen und direkter WhatsApp-Integration für Terminbuchungen bietet die Website eine nahtlose Customer Journey. Die Design-Ästhetik spiegelt die Qualität und Kreativität des Nagelstudios wider und schafft Vertrauen bei potenziellen Kunden.',
      imageUrl: '/images/viktoria-schwab-nails-thumbnail.svg',
      technologies: ['Webflow', 'Responsive Design', 'CMS', 'WhatsApp Integration', 'Galerie-System'],
      benefits: [
        'Professionelle Präsentation der Nagelkunst und Services',
        'Direkte Terminbuchung über WhatsApp-Integration',
        'Umfangreiche Galerie zur Inspiration der Kunden',
        'Steigerung der Online-Präsenz und Kundenakquise',
        'Einfache Verwaltung von Inhalten und Öffnungszeiten',
      ],
      link: 'https://viktoria-schwab-nails.webflow.io',
      featured: true,
    },
    {
      id: 'manusfaktur-sinntal',
      title: 'MANUSFaktur Sinntal - Kunst & Manufaktur Website',
      description: 'Eine künstlerische Website für eine Manufaktur mit Fokus auf Kunst, Design und kreative Projekte. Entwickelt für Manuella Neubauer zur Präsentation ihrer künstlerischen Arbeiten und Dienstleistungen.',
      longDescription: 'Die MANUSFaktur Website bietet eine Plattform für die Präsentation künstlerischer Arbeiten und kreativer Projekte. Mit einem minimalistischen, eleganten Design wird die Kunst von Manuella Neubauer in den Vordergrund gestellt. Die Website ermöglicht es Besuchern, die verschiedenen künstlerischen Bereiche zu erkunden und Kontakt aufzunehmen. Besonders hervorzuheben ist die visuelle Präsentation der Kunstwerke und die intuitive Navigation durch die verschiedenen Bereiche.',
      imageUrl: '/images/manusfaktur-sinntal-thumbnail.svg',
      technologies: ['Webflow', 'Responsive Design', 'CMS', 'Portfolio-Galerie', 'Kontaktformular'],
      benefits: [
        'Professionelle Präsentation künstlerischer Arbeiten',
        'Steigerung der Sichtbarkeit und Reichweite',
        'Einfache Kontaktaufnahme für potenzielle Kunden',
        'Flexible Verwaltung von Kunstwerken und Projekten',
        'Moderne, künstlerische Ästhetik',
      ],
      link: 'https://manusfaktur-sinntal.webflow.io',
      featured: true,
    },
  ],
  contact: {
    email: 'contact@asaisgroup.com',
    phone: '+1 (555) 000-0000',
  },
  website: 'https://asais-group.webflow.io',
};





