import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CursorTracker } from '../components/CursorTracker';
import { Link } from 'react-router-dom';
import { skillsetData } from '../data/skillset';
import { useTranslation } from '../hooks/useTranslation';
import { FaArrowLeft, FaCode, FaCheckCircle, FaCalendarAlt } from 'react-icons/fa';

const getLevelColor = (level: string) => {
  switch (level) {
    case 'expert':
      return 'bg-green-500/20 text-green-300 border-green-500/50';
    case 'advanced':
      return 'bg-blue-500/20 text-blue-300 border-blue-500/50';
    case 'intermediate':
      return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/50';
    case 'beginner':
      return 'bg-gray-500/20 text-gray-300 border-gray-500/50';
    default:
      return 'bg-gray-500/20 text-gray-300 border-gray-500/50';
  }
};

const getLevelLabel = (level: string, t: (key: string) => string) => {
  switch (level) {
    case 'expert':
      return t('skillset.level.expert');
    case 'advanced':
      return t('skillset.level.advanced');
    case 'intermediate':
      return t('skillset.level.intermediate');
    case 'beginner':
      return t('skillset.level.beginner');
    default:
      return level;
  }
};

export const SkillsetPage = () => {
  const { t, language } = useTranslation();
  
  // Get translated data based on language
  const getTranslatedData = () => {
    const categoryTranslations: Record<string, { name: string; description?: string }> = {
      'programming-languages': {
        name: t('skillset.category.programmingLanguages'),
        description: t('skillset.category.programmingLanguagesDesc'),
      },
      'game-engines': {
        name: t('skillset.category.gameEngines'),
        description: t('skillset.category.gameEnginesDesc'),
      },
      'frontend-web': {
        name: t('skillset.category.frontendWeb'),
        description: t('skillset.category.frontendWebDesc'),
      },
      'backend-frameworks': {
        name: t('skillset.category.backendFrameworks'),
        description: t('skillset.category.backendFrameworksDesc'),
      },
      'databases': {
        name: t('skillset.category.databases'),
        description: t('skillset.category.databasesDesc'),
      },
      'devops-infrastructure': {
        name: t('skillset.category.devopsInfrastructure'),
        description: t('skillset.category.devopsInfrastructureDesc'),
      },
      'cloud-services': {
        name: t('skillset.category.cloudServices'),
        description: t('skillset.category.cloudServicesDesc'),
      },
      'observability-messaging': {
        name: t('skillset.category.observabilityMessaging'),
        description: t('skillset.category.observabilityMessagingDesc'),
      },
      'testing-qa': {
        name: t('skillset.category.testingQa'),
        description: t('skillset.category.testingQaDesc'),
      },
      'data-science-ml': {
        name: t('skillset.category.dataScienceMl'),
        description: t('skillset.category.dataScienceMlDesc'),
      },
      '3d-graphics-design': {
        name: t('skillset.category.3dGraphicsDesign'),
        description: t('skillset.category.3dGraphicsDesignDesc'),
      },
      'modeling-architecture': {
        name: t('skillset.category.modelingArchitecture'),
        description: t('skillset.category.modelingArchitectureDesc'),
      },
      'business-erp-tools': {
        name: t('skillset.category.businessErpTools'),
        description: t('skillset.category.businessErpToolsDesc'),
      },
      'build-packaging-tools': {
        name: t('skillset.category.buildPackagingTools'),
        description: t('skillset.category.buildPackagingToolsDesc'),
      },
      'apis-auth': {
        name: t('skillset.category.apisAuth'),
        description: t('skillset.category.apisAuthDesc'),
      },
      'other': {
        name: t('skillset.category.other'),
        description: t('skillset.category.otherDesc'),
      },
    };

    return {
      ...skillsetData,
      title: t('skillset.title'),
      introduction: t('skillset.introduction'),
      summary: skillsetData.summary ? t('skillset.summary') : undefined,
      categories: skillsetData.categories.map((category) => ({
        ...category,
        name: categoryTranslations[category.id]?.name || category.name,
        description: categoryTranslations[category.id]?.description || category.description,
      })),
    };
  };
  
  const translatedData = getTranslatedData();
  
  return (
    <motion.div
      className="App"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <CursorTracker />
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(15,23,42,0.8),rgba(2,6,23,1))] opacity-50" />
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Back Button */}
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors"
              >
                <FaArrowLeft size={14} />
                <span>{t('common.back')}</span>
              </Link>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 break-words">
                <span className="gradient-text">{translatedData.title}</span>
              </h1>

              {/* Introduction */}
              <p className="text-base sm:text-lg md:text-xl text-white/80 mb-4 max-w-3xl break-words">
                {translatedData.introduction}
              </p>

              {/* Last Updated */}
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <FaCalendarAlt size={14} />
                <span>{t('skillset.lastUpdated')} {new Date(skillsetData.lastUpdated).toLocaleDateString(language === 'en' ? 'en-US' : 'de-DE')}</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
            {/* Categories */}
            {translatedData.categories.map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                className="glass rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 mb-8 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              >
                {/* Category Header */}
                <div className="flex items-start sm:items-center gap-3 mb-6 flex-wrap">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaCode size={20} className="sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white break-words">{category.name}</h2>
                    {category.description && (
                      <p className="text-white/60 text-xs sm:text-sm mt-1 break-words">{category.description}</p>
                    )}
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.id}
                      className="bg-slate-800/50 rounded-xl p-4 sm:p-5 md:p-6 border border-white/10 hover:border-primary-500/50 transition-colors overflow-hidden"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    >
                      {/* Skill Header */}
                      <div className="flex items-start justify-between mb-3 gap-2 flex-wrap">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg sm:text-xl font-bold text-white mb-1 break-words">{skill.name}</h3>
                          {skill.yearsOfExperience && (
                            <p className="text-white/60 text-xs sm:text-sm break-words">
                              {skill.yearsOfExperience} {skill.yearsOfExperience === 1 ? t('skillset.year') : t('skillset.years')} {t('skillset.experience')}
                            </p>
                          )}
                        </div>
                        <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-semibold border flex-shrink-0 ${getLevelColor(skill.level)}`}>
                          {getLevelLabel(skill.level, t)}
                        </span>
                      </div>

                      {/* Description / Relevanz */}
                      {skill.description && (
                        <div className="mb-4">
                          <p className="text-white/60 text-xs font-semibold mb-1">{t('skillset.relevance')}</p>
                          <p className="text-white/70 text-xs sm:text-sm break-words">{skill.description}</p>
                        </div>
                      )}

                      {/* Projects */}
                      {skill.projects && skill.projects.length > 0 && (
                        <div className="mb-3">
                          <p className="text-white/60 text-xs mb-2 font-semibold">{t('skillset.usedIn')}</p>
                          <div className="flex flex-wrap gap-2">
                            {skill.projects.map((project) => (
                              <span
                                key={project}
                                className="px-2 py-1 bg-primary-500/20 text-primary-300 rounded text-xs border border-primary-500/30"
                              >
                                {project}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Certifications */}
                      {skill.certifications && skill.certifications.length > 0 && (
                        <div>
                          <p className="text-white/60 text-xs mb-2 font-semibold">{t('skillset.certifications')}</p>
                          <ul className="space-y-1">
                            {skill.certifications.map((cert) => (
                              <li key={cert} className="flex items-center gap-2 text-white/70 text-xs">
                                <FaCheckCircle className="text-primary-400" size={12} />
                                <span>{cert}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Summary */}
            {translatedData.summary && (
            <motion.div
              className="glass rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 text-center overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: translatedData.categories.length * 0.1 }}
            >
              <p className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto break-words">
                {translatedData.summary}
              </p>
            </motion.div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
};

