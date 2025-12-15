export type TranslationKey = 
  | 'nav.home'
  | 'nav.projects'
  | 'nav.skills'
  | 'nav.education'
  | 'nav.asaisGroup'
  | 'nav.techstack'
  | 'nav.contact'
  | 'hero.title'
  | 'hero.subtitle'
  | 'hero.cta'
  | 'hero.welcome'
  | 'hero.description'
  | 'hero.contact'
  | 'hero.hi'
  | 'footer.about'
  | 'footer.quickLinks'
  | 'footer.socialMedia'
  | 'footer.copyright'
  | 'footer.allRights'
  | 'footer.impressum'
  | 'footer.datenschutz'
  | 'projects.title'
  | 'projects.subtitle'
  | 'projects.scrollHint'
  | 'projects.youtube'
  | 'projects.blog'
  | 'projects.app'
  | 'projects.website'
  | 'skills.title'
  | 'skills.subtitle'
  | 'skills.description'
  | 'skills.techStack'
  | 'skills.techStackDescription1'
  | 'skills.techStackDescription2'
  | 'skills.viewDetailed'
  | 'skills.modern'
  | 'skills.innovative'
  | 'skills.scalable'
  | 'skills.performant'
  | 'education.title'
  | 'education.subtitle'
  | 'education.description'
  | 'education.experience'
  | 'education.training'
  | 'education.today'
  | 'education.tasks'
  | 'education.achievements'
  | 'techstack.title'
  | 'techstack.subtitle'
  | 'techstack.description'
  | 'techstack.why'
  | 'techstack.whyDescription1'
  | 'techstack.whyDescription2'
  | 'techstack.whyDescription3'
  | 'techstack.modern'
  | 'techstack.performant'
  | 'techstack.scalable'
  | 'techstack.typeSafe'
  | 'techstack.responsive'
  | 'asais.title'
  | 'asais.description'
  | 'asais.button'
  | 'common.back'
  | 'common.today'
  | 'skillset.title'
  | 'skillset.introduction'
  | 'skillset.lastUpdated'
  | 'skillset.years'
  | 'skillset.year'
  | 'skillset.experience'
  | 'skillset.relevance'
  | 'skillset.usedIn'
  | 'skillset.certifications'
  | 'skillset.summary'
  | 'skillset.level.expert'
  | 'skillset.level.advanced'
  | 'skillset.level.intermediate'
  | 'skillset.level.beginner'
  | 'skillset.category.programmingLanguages'
  | 'skillset.category.programmingLanguagesDesc'
  | 'skillset.category.gameEngines'
  | 'skillset.category.gameEnginesDesc'
  | 'skillset.category.frontendWeb'
  | 'skillset.category.frontendWebDesc'
  | 'skillset.category.backendFrameworks'
  | 'skillset.category.backendFrameworksDesc'
  | 'skillset.category.databases'
  | 'skillset.category.databasesDesc'
  | 'skillset.category.devopsInfrastructure'
  | 'skillset.category.devopsInfrastructureDesc'
  | 'skillset.category.cloudServices'
  | 'skillset.category.cloudServicesDesc'
  | 'skillset.category.observabilityMessaging'
  | 'skillset.category.observabilityMessagingDesc'
  | 'skillset.category.testingQa'
  | 'skillset.category.testingQaDesc'
  | 'skillset.category.dataScienceMl'
  | 'skillset.category.dataScienceMlDesc'
  | 'skillset.category.3dGraphicsDesign'
  | 'skillset.category.3dGraphicsDesignDesc'
  | 'skillset.category.modelingArchitecture'
  | 'skillset.category.modelingArchitectureDesc'
  | 'skillset.category.businessErpTools'
  | 'skillset.category.businessErpToolsDesc'
  | 'skillset.category.buildPackagingTools'
  | 'skillset.category.buildPackagingToolsDesc'
  | 'skillset.category.apisAuth'
  | 'skillset.category.apisAuthDesc'
  | 'skillset.category.other'
  | 'skillset.category.otherDesc'
  | 'cookieBanner.title'
  | 'cookieBanner.description'
  | 'cookieBanner.necessary'
  | 'cookieBanner.youtube'
  | 'cookieBanner.acceptAll'
  | 'cookieBanner.acceptNecessary'
  | 'cookieBanner.reject'
  | 'cookieBanner.privacyLink';

export const translations: Record<'de' | 'en', Record<TranslationKey, string>> = {
  de: {
    'nav.home': 'Home',
    'nav.projects': 'Projekte',
    'nav.skills': 'Skills',
    'nav.education': 'Bildung',
    'nav.asaisGroup': 'ASAIS Group',
    'nav.techstack': 'Techstack',
    'nav.contact': 'Kontakt',
    'hero.title': 'Portfolio AS',
    'hero.subtitle': 'Willkommen in meiner digitalen Welt',
    'hero.cta': 'Meine Projekte entdecken',
    'hero.welcome': 'Willkommen auf meiner Portfolio-Webseite. Hier finden Sie meine Projekte, meine Bildung und meinen Techstack.',
    'hero.description': 'Willkommen auf meiner Portfolio-Webseite. Hier finden Sie meine Projekte, meine Bildung und meinen Techstack.',
    'hero.contact': 'Kontakt aufnehmen',
    'hero.hi': 'Hi, I am a',
    'footer.about': 'Portfolio AS',
    'footer.quickLinks': 'Quick Links',
    'footer.socialMedia': 'Social Media',
    'footer.copyright': 'Portfolio AS. Alle Rechte vorbehalten.',
    'footer.allRights': 'Alle Rechte vorbehalten',
    'footer.impressum': 'Impressum',
    'footer.datenschutz': 'Datenschutz',
    'projects.title': 'Meine',
    'projects.subtitle': 'Eine Auswahl meiner besten Projekte und Arbeiten',
    'projects.scrollHint': 'Scrollen Sie, um durch die Projekte zu navigieren',
    'projects.youtube': 'YouTube',
    'projects.blog': 'Blog lesen',
    'projects.app': 'App öffnen',
    'projects.website': 'Website',
    'skills.title': 'Technologien',
    'skills.subtitle': 'Skills',
    'skills.description': 'Programmiersprachen, Frameworks und Tools, die ich verwendet habe',
    'skills.techStack': 'Meine Tech-Stack',
    'skills.techStackDescription1': 'Über die Jahre habe ich mit einer Vielzahl moderner Technologien gearbeitet. Von Programmiersprachen wie TypeScript und Python bis hin zu Frameworks wie React und Node.js.',
    'skills.techStackDescription2': 'Jede Technologie bringt ihre eigenen Herausforderungen und Möglichkeiten mit sich. Durch kontinuierliches Lernen und Experimentieren baue ich mein Wissen stetig aus und passe mich an die sich schnell entwickelnde Tech-Landschaft an.',
    'skills.viewDetailed': 'Detailliertes Skillset ansehen',
    'skills.modern': 'Modern',
    'skills.innovative': 'Innovativ',
    'skills.scalable': 'Skalierbar',
    'skills.performant': 'Performant',
    'education.title': 'Bildung',
    'education.subtitle': '& Ausbildung',
    'education.description': 'Mein Bildungsweg, akademische Qualifikationen und Berufserfahrung',
    'education.experience': 'Erfahrung',
    'education.training': 'Ausbildung',
    'education.today': 'Heute',
    'education.tasks': 'Aufgaben & Verantwortungen:',
    'education.achievements': 'Erfolge:',
    'techstack.title': 'Techstack',
    'techstack.subtitle': 'dieser Website',
    'techstack.description': 'Die Technologien und Tools, mit denen diese Portfolio-Website entwickelt wurde',
    'techstack.why': 'Warum dieser Techstack?',
    'techstack.whyDescription1': 'Diese Website wurde mit modernen Web-Technologien entwickelt, die für Performance, Developer Experience und Wartbarkeit optimiert sind.',
    'techstack.whyDescription2': 'React ermöglicht eine komponentenbasierte Architektur, während TypeScript für typsicheren Code sorgt. Vite bietet extrem schnelle Build-Zeiten und Hot Module Replacement.',
    'techstack.whyDescription3': 'Tailwind CSS ermöglicht schnelles, responsives Design ohne zusätzliche CSS-Dateien, und Framer Motion bringt flüssige Animationen und Interaktionen zum Leben.',
    'techstack.modern': 'Modern',
    'techstack.performant': 'Performant',
    'techstack.scalable': 'Skalierbar',
    'techstack.typeSafe': 'Type-Safe',
    'techstack.responsive': 'Responsive',
    'asais.title': 'ASAIS Group',
    'asais.description': 'Erfahren Sie mehr über mein Kleingewerbe und die Services, die ich anbiete.',
    'asais.button': 'Zur ASAIS Group Seite',
    'common.back': 'Zurück zur Startseite',
    'common.today': 'Heute',
    'skillset.title': 'Skills-Übersicht — Selbsteinschätzung',
    'skillset.introduction': 'Die hier aufgeführten Kenntnisse stellen meine persönliche Selbsteinschätzung dar und beruhen auf dem Wissen, das ich mir während meines Studiums angeeignet habe. Diese Übersicht bietet einen kompakten Überblick über die Technologien, Methoden und Themen, mit denen ich im Studienverlauf gearbeitet habe. In keinem der genannten Bereiche betrachte ich mich als absoluten Experten, vielmehr möchte ich transparent darstellen, welche Erfahrungen und Kompetenzen ich erworben habe.',
    'skillset.lastUpdated': 'Zuletzt aktualisiert:',
    'skillset.years': 'Jahre',
    'skillset.year': 'Jahr',
    'skillset.experience': 'Erfahrung',
    'skillset.relevance': 'Relevanz:',
    'skillset.usedIn': 'Verwendet in:',
    'skillset.certifications': 'Zertifikate:',
    'skillset.summary': 'Diese Übersicht basiert auf meinen Erfahrungen während des Studiums. Ich betrachte mich in keinem der genannten Bereiche als absoluten Experten, sondern möchte transparent meine erworbenen Kompetenzen darstellen.',
    'skillset.level.expert': 'Experte',
    'skillset.level.advanced': 'Fortgeschritten',
    'skillset.level.intermediate': 'Mittelstufe',
    'skillset.level.beginner': 'Anfänger',
    'skillset.category.programmingLanguages': 'Programmiersprachen',
    'skillset.category.programmingLanguagesDesc': 'Sprachen, die ich während meines Studiums erlernt und verwendet habe',
    'skillset.category.gameEngines': 'Game Engines',
    'skillset.category.gameEnginesDesc': 'Engines für Spieleentwicklung und Simulation',
    'skillset.category.frontendWeb': 'Frontend / Web',
    'skillset.category.frontendWebDesc': 'Technologien für Frontend-Entwicklung und Web-Interfaces',
    'skillset.category.backendFrameworks': 'Backend / Frameworks',
    'skillset.category.backendFrameworksDesc': 'Backend-Frameworks und Server-Technologien',
    'skillset.category.databases': 'Datenbanken',
    'skillset.category.databasesDesc': 'Datenbank-Technologien und Datenmanagement',
    'skillset.category.devopsInfrastructure': 'DevOps / Infrastruktur',
    'skillset.category.devopsInfrastructureDesc': 'DevOps-Tools, Versionskontrolle und Infrastruktur-Management',
    'skillset.category.cloudServices': 'Cloud / Services',
    'skillset.category.cloudServicesDesc': 'Cloud-Plattformen und Backend-as-a-Service',
    'skillset.category.observabilityMessaging': 'Observability / Messaging',
    'skillset.category.observabilityMessagingDesc': 'Monitoring, Logging und Messaging-Systeme',
    'skillset.category.testingQa': 'Testing / QA',
    'skillset.category.testingQaDesc': 'Test-Frameworks und Qualitätssicherung',
    'skillset.category.dataScienceMl': 'Data Science / ML',
    'skillset.category.dataScienceMlDesc': 'Data Science, Machine Learning und KI',
    'skillset.category.3dGraphicsDesign': '3D / Grafik / Design',
    'skillset.category.3dGraphicsDesignDesc': '3D-Modellierung, Grafik und Design-Tools',
    'skillset.category.modelingArchitecture': 'Modellierung / Architektur',
    'skillset.category.modelingArchitectureDesc': 'Software-Architektur und Dokumentation',
    'skillset.category.businessErpTools': 'Business / ERP / Tools',
    'skillset.category.businessErpToolsDesc': 'Business-Software und ERP-Systeme',
    'skillset.category.buildPackagingTools': 'Build / Packaging / Tools',
    'skillset.category.buildPackagingToolsDesc': 'Build-Systeme und Package-Manager',
    'skillset.category.apisAuth': 'APIs / Auth',
    'skillset.category.apisAuthDesc': 'API-Design und Authentifizierung',
    'skillset.category.other': 'Sonstiges',
    'skillset.category.otherDesc': 'Weitere Tools und Technologien',
    'cookieBanner.title': 'Cookie-Einstellungen',
    'cookieBanner.description': 'Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. Einige Cookies sind notwendig für den Betrieb der Website, während andere uns helfen, diese Website und die Nutzererfahrung zu verbessern (Tracking-Cookies). Sie können selbst entscheiden, ob Sie die Cookies zulassen möchten.',
    'cookieBanner.necessary': 'Notwendige Cookies: Diese Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.',
    'cookieBanner.youtube': 'YouTube Cookies: Diese Cookies werden von YouTube gesetzt, wenn Sie Videos auf unserer Website ansehen. Weitere Informationen finden Sie in unserer',
    'cookieBanner.acceptAll': 'Alle akzeptieren',
    'cookieBanner.acceptNecessary': 'Nur notwendige',
    'cookieBanner.reject': 'Ablehnen',
    'cookieBanner.privacyLink': 'Datenschutzerklärung',
  },
  en: {
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.education': 'Education',
    'nav.asaisGroup': 'ASAIS Group',
    'nav.techstack': 'Techstack',
    'nav.contact': 'Contact',
    'hero.title': 'Portfolio AS',
    'hero.subtitle': 'Welcome to my digital world',
    'hero.cta': 'Discover my projects',
    'hero.welcome': 'Welcome to my portfolio website. Here you will find my projects, my education, and my tech stack.',
    'hero.description': 'Welcome to my portfolio website. Here you will find my projects, my education, and my tech stack.',
    'hero.contact': 'Get in touch',
    'hero.hi': 'Hi, I am a',
    'footer.about': 'Portfolio AS',
    'footer.quickLinks': 'Quick Links',
    'footer.socialMedia': 'Social Media',
    'footer.copyright': 'Portfolio AS. All rights reserved.',
    'footer.allRights': 'All rights reserved',
    'footer.impressum': 'Imprint',
    'footer.datenschutz': 'Privacy Policy',
    'projects.title': 'My',
    'projects.subtitle': 'A selection of my best projects and work',
    'projects.scrollHint': 'Scroll to navigate through the projects',
    'projects.youtube': 'YouTube',
    'projects.blog': 'Read blog',
    'projects.app': 'Open app',
    'projects.website': 'Website',
    'skills.title': 'Technologies',
    'skills.subtitle': 'Skills',
    'skills.description': 'Programming languages, frameworks, and tools I have used',
    'skills.techStack': 'My Tech Stack',
    'skills.techStackDescription1': 'Over the years, I have worked with a variety of modern technologies. From programming languages like TypeScript and Python to frameworks like React and Node.js.',
    'skills.techStackDescription2': 'Each technology brings its own challenges and opportunities. Through continuous learning and experimentation, I constantly expand my knowledge and adapt to the rapidly evolving tech landscape.',
    'skills.viewDetailed': 'View detailed skillset',
    'skills.modern': 'Modern',
    'skills.innovative': 'Innovative',
    'skills.scalable': 'Scalable',
    'skills.performant': 'Performant',
    'education.title': 'Education',
    'education.subtitle': '& Training',
    'education.description': 'My educational background, academic qualifications, and professional experience',
    'education.experience': 'Experience',
    'education.training': 'Education',
    'education.today': 'Today',
    'education.tasks': 'Tasks & Responsibilities:',
    'education.achievements': 'Achievements:',
    'techstack.title': 'Techstack',
    'techstack.subtitle': 'of this website',
    'techstack.description': 'The technologies and tools used to develop this portfolio website',
    'techstack.why': 'Why this tech stack?',
    'techstack.whyDescription1': 'This website was developed with modern web technologies optimized for performance, developer experience, and maintainability.',
    'techstack.whyDescription2': 'React enables a component-based architecture, while TypeScript ensures type-safe code. Vite provides extremely fast build times and Hot Module Replacement.',
    'techstack.whyDescription3': 'Tailwind CSS enables fast, responsive design without additional CSS files, and Framer Motion brings smooth animations and interactions to life.',
    'techstack.modern': 'Modern',
    'techstack.performant': 'Performant',
    'techstack.scalable': 'Scalable',
    'techstack.typeSafe': 'Type-Safe',
    'techstack.responsive': 'Responsive',
    'asais.title': 'ASAIS Group',
    'asais.description': 'Learn more about my small business and the services I offer.',
    'asais.button': 'Go to ASAIS Group page',
    'common.back': 'Back to homepage',
    'common.today': 'Today',
    'skillset.title': 'Skills Overview — Self-Assessment',
    'skillset.introduction': 'The skills listed here represent my personal self-assessment and are based on the knowledge I have acquired during my studies. This overview provides a compact overview of the technologies, methods, and topics I have worked with during my studies. I do not consider myself an absolute expert in any of the mentioned areas; rather, I want to transparently present the experiences and competencies I have acquired.',
    'skillset.lastUpdated': 'Last updated:',
    'skillset.years': 'years',
    'skillset.year': 'year',
    'skillset.experience': 'experience',
    'skillset.relevance': 'Relevance:',
    'skillset.usedIn': 'Used in:',
    'skillset.certifications': 'Certifications:',
    'skillset.summary': 'This overview is based on my experiences during my studies. I do not consider myself an absolute expert in any of the mentioned areas; rather, I want to transparently present the competencies I have acquired.',
    'skillset.level.expert': 'Expert',
    'skillset.level.advanced': 'Advanced',
    'skillset.level.intermediate': 'Intermediate',
    'skillset.level.beginner': 'Beginner',
    'skillset.category.programmingLanguages': 'Programming Languages',
    'skillset.category.programmingLanguagesDesc': 'Languages I learned and used during my studies',
    'skillset.category.gameEngines': 'Game Engines',
    'skillset.category.gameEnginesDesc': 'Engines for game development and simulation',
    'skillset.category.frontendWeb': 'Frontend / Web',
    'skillset.category.frontendWebDesc': 'Technologies for frontend development and web interfaces',
    'skillset.category.backendFrameworks': 'Backend / Frameworks',
    'skillset.category.backendFrameworksDesc': 'Backend frameworks and server technologies',
    'skillset.category.databases': 'Databases',
    'skillset.category.databasesDesc': 'Database technologies and data management',
    'skillset.category.devopsInfrastructure': 'DevOps / Infrastructure',
    'skillset.category.devopsInfrastructureDesc': 'DevOps tools, version control, and infrastructure management',
    'skillset.category.cloudServices': 'Cloud / Services',
    'skillset.category.cloudServicesDesc': 'Cloud platforms and backend-as-a-service',
    'skillset.category.observabilityMessaging': 'Observability / Messaging',
    'skillset.category.observabilityMessagingDesc': 'Monitoring, logging, and messaging systems',
    'skillset.category.testingQa': 'Testing / QA',
    'skillset.category.testingQaDesc': 'Testing frameworks and quality assurance',
    'skillset.category.dataScienceMl': 'Data Science / ML',
    'skillset.category.dataScienceMlDesc': 'Data science, machine learning, and AI',
    'skillset.category.3dGraphicsDesign': '3D / Graphics / Design',
    'skillset.category.3dGraphicsDesignDesc': '3D modeling, graphics, and design tools',
    'skillset.category.modelingArchitecture': 'Modeling / Architecture',
    'skillset.category.modelingArchitectureDesc': 'Software architecture and documentation',
    'skillset.category.businessErpTools': 'Business / ERP / Tools',
    'skillset.category.businessErpToolsDesc': 'Business software and ERP systems',
    'skillset.category.buildPackagingTools': 'Build / Packaging / Tools',
    'skillset.category.buildPackagingToolsDesc': 'Build systems and package managers',
    'skillset.category.apisAuth': 'APIs / Auth',
    'skillset.category.apisAuthDesc': 'API design and authentication',
    'skillset.category.other': 'Other',
    'skillset.category.otherDesc': 'Additional tools and technologies',
    'cookieBanner.title': 'Cookie Settings',
    'cookieBanner.description': 'We use cookies to provide you with the best possible experience on our website. Some cookies are necessary for the operation of the website, while others help us improve this website and the user experience (tracking cookies). You can decide for yourself whether you want to allow the cookies.',
    'cookieBanner.necessary': 'Necessary cookies: These cookies are required for the basic functions of the website and cannot be disabled.',
    'cookieBanner.youtube': 'YouTube cookies: These cookies are set by YouTube when you watch videos on our website. For more information, please see our',
    'cookieBanner.acceptAll': 'Accept all',
    'cookieBanner.acceptNecessary': 'Necessary only',
    'cookieBanner.reject': 'Reject',
    'cookieBanner.privacyLink': 'Privacy Policy',
  },
};


