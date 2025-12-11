export type ProjectType = 'youtube' | 'blog' | 'app' | 'website';

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string; // Erweiterte Beschreibung für Blog-Posts
  type: ProjectType;
  youtubeUrl?: string;
  blogUrl?: string; // URL für Blog-Post/Subpage
  appUrl?: string; // URL für App-Download oder Demo
  websiteUrl?: string; // URL für Website
  imageUrl?: string;
  tags: string[];
  date: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Portfolio Website - Entwicklung & Design Showcase',
    description: 'Ein umfassendes Video über die Entwicklung meiner modernen Portfolio-Website. Erfahren Sie mehr über die verwendeten Technologien, scroll-getriebene Animationen, dynamische UI-Komponenten und die Design-Entscheidungen hinter diesem Projekt.',
    longDescription: 'In diesem Video zeige ich Ihnen die komplette Entwicklung meiner Portfolio-Website. Ich erkläre die Architektur, die verwendeten Technologien wie React, TypeScript und Framer Motion, und wie ich die scroll-getriebenen Animationen implementiert habe. Außerdem zeige ich die macOS-ähnlichen Browser-Tabs, dynamische Hintergründe und responsive Design-Lösungen. Das Video bietet einen detaillierten Einblick in den Entwicklungsprozess von der Konzeption bis zur finalen Umsetzung.',
    type: 'youtube',
    youtubeUrl: 'https://youtu.be/-thCerTaaKY',
    imageUrl: 'https://img.youtube.com/vi/-thCerTaaKY/maxresdefault.jpg',
    tags: ['React', 'TypeScript', 'Framer Motion', 'Portfolio', 'Web Development', 'UI/UX', 'Animation'],
    date: '2025-01-15',
    featured: true,
  },
  {
    id: '2',
    title: 'Doom Software Games 2024',
    description: 'Ein umfassendes Video über die Entwicklung von Doom Software Games 2024. Erfahren Sie mehr über Unity-Spieleentwicklung, C# Programmierung, KI-Gegner-Implementierung und moderne Game-Development-Technologien.',
    longDescription: 'In diesem Video zeige ich Ihnen die Entwicklung von Dom Software Games 2024. Ich erkläre die Verwendung von Unity für Spieleentwicklung, C# Programmierung für Game-Logik, die Implementierung von KI-Gegnern und moderne Game-Development-Technologien. Das Video bietet einen detaillierten Einblick in den Entwicklungsprozess eines modernen Spiels mit Unity und C#.',
    type: 'youtube',
    youtubeUrl: 'https://youtu.be/vESfG_NbUBw',
    imageUrl: 'https://img.youtube.com/vi/vESfG_NbUBw/maxresdefault.jpg',
    tags: ['Unity', 'C#', 'Game Development', 'KI Gegner', 'Spieleentwicklung', 'Modern Tech', 'Games'],
    date: '2025-01-20',
    featured: true,
  },
  {
    id: '3',
    title: 'Akanoid 3D',
    description: 'Ein detailliertes Video über die Entwicklung von Akanoid 3D. Erfahren Sie mehr über 3D-Spieleentwicklung mit Unity, C# Programmierung, KI-Gegner-Implementierung und moderne Game-Development-Technologien.',
    longDescription: 'In diesem Video zeige ich Ihnen die Entwicklung von Akanoid 3D. Ich erkläre 3D-Spieleentwicklung mit Unity, C# Programmierung für komplexe Game-Logik, die Implementierung von intelligenten KI-Gegnern und moderne Game-Development-Technologien. Das Video bietet einen umfassenden Einblick in die Entwicklung eines 3D-Spiels mit Unity, C# und fortschrittlichen KI-Systemen.',
    type: 'youtube',
    youtubeUrl: 'https://youtu.be/wco0wagHZqY',
    imageUrl: 'https://img.youtube.com/vi/wco0wagHZqY/maxresdefault.jpg',
    tags: ['Unity', 'C#', '3D', 'Game Development', 'KI Gegner', 'Spieleentwicklung', 'Modern Tech', 'Games'],
    date: '2025-01-25',
    featured: true,
  },
  {
    id: '4',
    title: 'BUGA 2023 Mannheim - Navigations-App',
    description: 'Eine innovative Web-App zur Navigation auf der Bundesgartenschau 2023 in Mannheim. Entwickelt im Team mit Angular, Spring Boot und Django. Die App erleichtert Besuchern die Orientierung mit Seilbahnverbindungen, Bus-Routen und interaktiven Karten.',
    longDescription: 'Im Rahmen eines Teamprojekts mit sechs Personen entwickelten wir eine umfassende Navigations-App für die BUGA 2023 in Mannheim. Die Anwendung wurde mit Angular im Frontend und Spring Boot sowie Django im Backend realisiert. Die App bietet Besuchern eine intuitive Navigation durch die verschiedenen Bereiche der Bundesgartenschau, inklusive Seilbahnverbindungen und interner Busse. Über eine SQL-Datenbank werden alle Sehenswürdigkeiten, Routen und Informationen verwaltet. Besonders hervorzuheben ist die interaktive Kartenfunktion mit Pop-up-Zoom, die es Nutzern ermöglicht, Sehenswürdigkeiten zu planen, zu besichtigen und zu erkunden. Die intuitive UI wurde mit Fokus auf Benutzerfreundlichkeit entwickelt und bietet eine nahtlose Navigation durch das gesamte Gelände.',
    type: 'blog',
    blogUrl: '/blog/buga-2023-app',
    imageUrl: '/images/buga-2023-thumbnail.svg',
    tags: ['Angular', 'Spring Boot', 'Django', 'SQL', 'Full Stack', 'Team Project', 'BUGA 2023', 'Navigation', 'Web App'],
    date: '2023-04-15',
    featured: true,
  },
  {
    id: '5',
    title: 'Virtuelle Trainingsumgebung zur Unterstützung von Interventionen bei Alkoholsucht',
    description: 'Entwicklung eines Unity-basierten Prototyps zur Simulation realer Interaktionssituationen für die Verhaltenstherapie bei Alkoholsucht. Fokus auf Realismus in Wahrnehmung und Interaktion, evaluative Befragung zur Nutzbarkeit und Wirksamkeit im Trainingskontext.',
    longDescription: 'Diese Arbeit beschreibt die Entwicklung eines interaktiven Prototyps, der realistische Alltagssituationen (z. B. soziale Trigger-Situationen, Entscheidungswege, Bewältigungsstrategien) nachbildet, um Patientinnen und Therapeutinnen eine sichere, wiederholbare Übungsumgebung zu bieten. Der Prototyp wurde in Unity entwickelt und durch eine Evaluationsstudie zur Gebrauchstauglichkeit und ersten Indikatoren für Realismus und Lernwirksamkeit ergänzt. Die Kernfrage war: Wie kann eine virtuelle, interaktive Trainingsanwendung gestaltet werden, um in der Therapie bei Alkoholsucht realistische Übungsszenarien bereitzustellen und die Transferwahrscheinlichkeit in reale Situationen zu erhöhen? Der Einsatz erfolgt als unterstützendes Werkzeug – nicht als Ersatz therapeutischer Behandlung. Die Entwicklung umfasste Konzeption, Szenariendefinition, iterative Implementierung in Unity und eine Pilot-Studie mit Fragebogen zur Usability, Realismus und Lernwahrnehmung.',
    type: 'blog',
    blogUrl: '/blog/virtuelle-trainingsumgebung-alkoholsucht',
    imageUrl: '/images/WohnungShaderDrawMode.png',
    tags: ['Unity', 'C#', 'VR/AR', 'Healthcare', 'Therapy', '3D Simulation', 'Game Development', 'Research', 'Usability'],
    date: '2024-06-15',
    featured: true,
  },
  {
    id: '8',
    title: 'Desktop Applikation mit Electron',
    description: 'Ein Blog-Post über die Entwicklung einer Desktop-Anwendung mit Electron. Erfahren Sie mehr über Cross-Platform-Entwicklung und native Integration.',
    longDescription: 'Dieser Blog-Post beschreibt die Entwicklung einer professionellen Desktop-Anwendung mit Electron. Ich teile meine Erfahrungen mit der Integration von nativen Features, Performance-Optimierung und dem Packaging-Prozess für verschiedene Betriebssysteme. Außerdem zeige ich, wie ich bestimmte Herausforderungen gelöst habe und welche Tools ich verwendet habe.',
    type: 'blog',
    blogUrl: '/blog/desktop-applikation-electron',
    appUrl: 'https://github.com/example/desktop-app',
    websiteUrl: 'https://example-app.com',
    tags: ['Electron', 'Desktop', 'Cross-Platform', 'Professional', 'Native'],
    date: '2024-06-18',
  },
  {
    id: '9',
    title: 'UI/UX Design Prinzipien für moderne Web-Apps',
    description: 'Ein umfassender Blog-Post über UI/UX Design-Prinzipien und wie man benutzerfreundliche Web-Anwendungen erstellt. Lernen Sie aus meinen Erfahrungen im Design-Prozess.',
    longDescription: 'In diesem Blog-Post teile ich meine Erfahrungen mit UI/UX Design für moderne Web-Anwendungen. Ich erkläre wichtige Design-Prinzipien, zeige Beispiele für gute und schlechte UX-Patterns und gebe praktische Tipps für die Umsetzung. Außerdem zeige ich, wie ich Design-Tools verwende und wie ich mit Designern zusammenarbeite.',
    type: 'blog',
    blogUrl: '/blog/ui-ux-design-prinzipien',
    websiteUrl: 'https://example-design.com',
    youtubeUrl: 'https://www.youtube.com/watch?v=example3',
    tags: ['UI/UX', 'Design', 'User Experience', 'Web Design', 'Figma'],
    date: '2024-07-25',
  },
  {
    id: '10',
    title: 'Performance-Optimierung für React-Anwendungen',
    description: 'Ein technischer Blog-Post über Performance-Optimierung in React. Erfahren Sie, wie Sie Ihre React-Anwendungen schneller und effizienter machen.',
    longDescription: 'Dieser Blog-Post behandelt verschiedene Techniken zur Performance-Optimierung von React-Anwendungen. Ich erkläre React.memo, useMemo, useCallback, Code-Splitting, Lazy Loading und viele weitere Optimierungsstrategien. Außerdem zeige ich praktische Beispiele und messe die Performance-Verbesserungen.',
    type: 'blog',
    blogUrl: '/blog/performance-optimierung-react',
    websiteUrl: 'https://example-performance.com',
    tags: ['React', 'Performance', 'Optimization', 'Web Vitals', 'Code Splitting'],
    date: '2024-08-30',
    featured: true,
  },
];


