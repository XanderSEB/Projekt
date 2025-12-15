export interface SkillCategory {
  id: string;
  name: string;
  description?: string;
  skills: SkillItem[];
}

export interface SkillItem {
  id: string;
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  yearsOfExperience?: number;
  description?: string;
  projects?: string[]; // Projekte, in denen diese Skill verwendet wurde
  certifications?: string[]; // Zertifikate oder Qualifikationen
}

export interface SkillsetData {
  title: string;
  introduction: string;
  categories: SkillCategory[];
  summary?: string;
  lastUpdated: string;
}

// Helper function to map PDF levels to our level system
const mapLevel = (level: string): 'beginner' | 'intermediate' | 'advanced' | 'expert' => {
  switch (level.toLowerCase()) {
    case 'high':
      return 'advanced';
    case 'medium':
      return 'intermediate';
    case 'low':
      return 'beginner';
    default:
      return 'intermediate';
  }
};

export const skillsetData: SkillsetData = {
  title: 'Skills-Übersicht — Selbsteinschätzung',
  introduction: 'Die hier aufgeführten Kenntnisse stellen meine persönliche Selbsteinschätzung dar und beruhen auf dem Wissen, das ich mir während meines Studiums angeeignet habe. Diese Übersicht bietet einen kompakten Überblick über die Technologien, Methoden und Themen, mit denen ich im Studienverlauf gearbeitet habe. In keinem der genannten Bereiche betrachte ich mich als absoluten Experten, vielmehr möchte ich transparent darstellen, welche Erfahrungen und Kompetenzen ich erworben habe.',
  lastUpdated: '2025-12-15',
  categories: [
    {
      id: 'programming-languages',
      name: 'Programmiersprachen',
      description: 'Sprachen, die ich während meines Studiums erlernt und verwendet habe',
      skills: [
        { id: 'java', name: 'Java', level: mapLevel('High'), description: 'Backend, Enterprise' },
        { id: 'c', name: 'C', level: mapLevel('Medium'), description: 'Embedded, Systems' },
        { id: 'cpp', name: 'C++', level: mapLevel('Medium'), description: 'Game-Dev, Systems' },
        { id: 'csharp', name: 'C#', level: mapLevel('High'), description: 'Game-Dev, Enterprise, Tools' },
        { id: 'python', name: 'Python', level: mapLevel('High'), description: 'Data Science, Scripting, Backend' },
        { id: 'javascript', name: 'JavaScript', level: mapLevel('High'), description: 'Frontend, Full-Stack' },
        { id: 'typescript', name: 'TypeScript', level: mapLevel('High'), description: 'Frontend, Full-Stack' },
        { id: 'go', name: 'Go', level: mapLevel('Low'), description: 'Cloud, Services' },
      ],
    },
    {
      id: 'game-engines',
      name: 'Game Engines',
      description: 'Engines für Spieleentwicklung und Simulation',
      skills: [
        { id: 'unity', name: 'Unity (C#)', level: mapLevel('High'), description: 'Game-Dev, Simulation' },
        { id: 'unreal', name: 'Unreal Engine (C++)', level: mapLevel('Medium'), description: 'High-Fidelity Game-Dev, Simulation' },
      ],
    },
    {
      id: 'frontend-web',
      name: 'Frontend / Web',
      description: 'Technologien für Frontend-Entwicklung und Web-Interfaces',
      skills: [
        { id: 'react', name: 'React', level: mapLevel('High'), description: 'Frontend, Web-App' },
        { id: 'vite-webpack', name: 'Vite / Webpack', level: mapLevel('Medium'), description: 'Frontend Build Tools' },
        { id: 'html-css', name: 'HTML / CSS / SASS / Tailwind / Bootstrap', level: mapLevel('High'), description: 'Frontend, UI' },
      ],
    },
    {
      id: 'backend-frameworks',
      name: 'Backend / Frameworks',
      description: 'Backend-Frameworks und Server-Technologien',
      skills: [
        { id: 'nodejs-express', name: 'Node.js / Express', level: mapLevel('High'), description: 'Backend, APIs' },
        { id: 'spring', name: 'Spring (Java)', level: mapLevel('High'), description: 'Enterprise Backend' },
        { id: 'aspnet', name: 'ASP.NET / .NET Core', level: mapLevel('High'), description: 'Enterprise, Services' },
        { id: 'django-flask', name: 'Django / Flask', level: mapLevel('High'), description: 'Python Backend, Prototyping' },
      ],
    },
    {
      id: 'databases',
      name: 'Datenbanken',
      description: 'Datenbank-Technologien und Datenmanagement',
      skills: [
        { id: 'postgresql', name: 'PostgreSQL', level: mapLevel('High'), description: 'Relationale DBs, Analytics' },
        { id: 'mysql-mariadb', name: 'MySQL / MariaDB', level: mapLevel('High'), description: 'Relationale DBs, Web' },
        { id: 'sqlite', name: 'SQLite', level: mapLevel('Medium'), description: 'Prototypen, Embedded DB' },
        { id: 'mongodb', name: 'MongoDB', level: mapLevel('High'), description: 'NoSQL, Document Stores' },
      ],
    },
    {
      id: 'devops-infrastructure',
      name: 'DevOps / Infrastruktur',
      description: 'DevOps-Tools, Versionskontrolle und Infrastruktur-Management',
      skills: [
        { id: 'git', name: 'Git (GitHub, GitLab)', level: mapLevel('High'), description: 'Versionskontrolle, Collaboration' },
        { id: 'docker', name: 'Docker / Docker Compose', level: mapLevel('High'), description: 'Containerization, DevOps' },
        { id: 'cicd', name: 'CI/CD (GitHub Actions, GitLab CI, Jenkins)', level: mapLevel('High'), description: 'Deployment Pipelines' },
        { id: 'linux-bash', name: 'Linux / Bash', level: mapLevel('Medium'), description: 'Server, Scripts' },
        { id: 'kubernetes', name: 'Kubernetes / Helm', level: mapLevel('Low'), description: 'Orchestration' },
        { id: 'terraform-ansible', name: 'Terraform / Ansible', level: mapLevel('Medium'), description: 'IaC / Konfig-Management' },
      ],
    },
    {
      id: 'cloud-services',
      name: 'Cloud / Services',
      description: 'Cloud-Plattformen und Backend-as-a-Service',
      skills: [
        { id: 'supabase-firebase', name: 'Supabase / Firebase', level: mapLevel('Medium'), description: 'BaaS, Prototyping' },
        { id: 'railway-vercel', name: 'Railway / Vercel / Netlify', level: mapLevel('Medium'), description: 'Hosting / Deployment' },
      ],
    },
    {
      id: 'observability-messaging',
      name: 'Observability / Messaging',
      description: 'Monitoring, Logging und Messaging-Systeme',
      skills: [
        { id: 'prometheus-grafana', name: 'Prometheus / Grafana', level: mapLevel('Low'), description: 'Monitoring' },
        { id: 'redis-rabbitmq', name: 'Redis / RabbitMQ / Kafka', level: mapLevel('Medium'), description: 'Caching / Messaging' },
      ],
    },
    {
      id: 'testing-qa',
      name: 'Testing / QA',
      description: 'Test-Frameworks und Qualitätssicherung',
      skills: [
        { id: 'testing', name: 'Jest / Cypress / Selenium / PyTest / NUnit', level: mapLevel('Medium'), description: 'Automated Testing' },
      ],
    },
    {
      id: 'data-science-ml',
      name: 'Data Science / ML',
      description: 'Data Science, Machine Learning und KI',
      skills: [
        { id: 'numpy', name: 'NumPy', level: mapLevel('Medium'), description: 'Data Analysis' },
        { id: 'pandas', name: 'pandas', level: mapLevel('Medium'), description: 'Data Analysis' },
        { id: 'scikit-learn', name: 'scikit-learn', level: mapLevel('Medium'), description: 'Classical ML' },
        { id: 'tensorflow-pytorch', name: 'TensorFlow / PyTorch', level: mapLevel('Medium'), description: 'Deep Learning' },
      ],
    },
    {
      id: '3d-graphics-design',
      name: '3D / Grafik / Design',
      description: '3D-Modellierung, Grafik und Design-Tools',
      skills: [
        { id: 'blender', name: 'Blender', level: mapLevel('High'), description: '3D Assets, Game-Dev' },
        { id: 'photoshop-gimp-figma', name: 'Photoshop / GIMP / Figma', level: mapLevel('Medium'), description: 'UI / Assets / Design' },
      ],
    },
    {
      id: 'modeling-architecture',
      name: 'Modellierung / Architektur',
      description: 'Software-Architektur und Dokumentation',
      skills: [
        { id: 'uml-plantuml', name: 'UML / PlantUML', level: mapLevel('High'), description: 'Software-Architektur, Dokumentation' },
        { id: 'openapi-swagger', name: 'OpenAPI / Swagger', level: mapLevel('Medium'), description: 'API-Design' },
      ],
    },
    {
      id: 'business-erp-tools',
      name: 'Business / ERP / Tools',
      description: 'Business-Software und ERP-Systeme',
      skills: [
        { id: 'excel', name: 'Microsoft Excel (Pivot, VBA basics)', level: mapLevel('High'), description: 'Reporting, Analysen' },
        { id: 'word', name: 'Microsoft Word', level: mapLevel('High'), description: 'Dokumentation, Formatierung' },
        { id: 'powerpoint', name: 'Microsoft PowerPoint', level: mapLevel('High'), description: 'Präsentationen, Visualisierung' },
        { id: 'office', name: 'Microsoft Office Suite', level: mapLevel('High'), description: 'Office-Anwendungen, Collaboration' },
        { id: 'sap', name: 'SAP / ERP', level: mapLevel('Medium'), description: 'Enterprise-Software, Prozesse' },
      ],
    },
    {
      id: 'build-packaging-tools',
      name: 'Build / Packaging / Tools',
      description: 'Build-Systeme und Package-Manager',
      skills: [
        { id: 'build-systems', name: 'Maven / Gradle / CMake / Make / NuGet', level: mapLevel('High'), description: 'Build-Systems' },
      ],
    },
    {
      id: 'apis-auth',
      name: 'APIs / Auth',
      description: 'API-Design und Authentifizierung',
      skills: [
        { id: 'apis', name: 'REST / GraphQL / WebSockets / OAuth2 / JWT', level: mapLevel('High'), description: 'API, Auth' },
      ],
    },
    {
      id: 'other',
      name: 'Sonstiges',
      description: 'Weitere Tools und Technologien',
      skills: [
        { id: 'postman-insomnia', name: 'Postman / Insomnia / Docker Desktop', level: mapLevel('Medium'), description: 'API-Testing, Local Dev' },
        { id: 'figma-adobe-xd', name: 'Figma / Adobe XD', level: mapLevel('High'), description: 'Design-Prototyping' },
      ],
    },
  ],
  summary: 'Diese Übersicht basiert auf meinen Erfahrungen während des Studiums. Ich betrachte mich in keinem der genannten Bereiche als absoluten Experten, sondern möchte transparent meine erworbenen Kompetenzen darstellen.',
};

