import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useTranslation } from '../hooks/useTranslation';
import { 
  SiReact, 
  SiTypescript, 
  SiVite, 
  SiTailwindcss, 
  SiFramer,
  SiReactrouter
} from 'react-icons/si';

interface TechItem {
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  category: 'framework' | 'language' | 'tool' | 'library';
}

const techStack: TechItem[] = [
  {
    name: 'React',
    description: 'Moderne UI-Bibliothek für interaktive Benutzeroberflächen',
    icon: <SiReact className="w-12 h-12" />,
    color: 'text-cyan-400',
    category: 'framework',
  },
  {
    name: 'TypeScript',
    description: 'Typsichere Programmiersprache für bessere Codequalität',
    icon: <SiTypescript className="w-12 h-12" />,
    color: 'text-blue-500',
    category: 'language',
  },
  {
    name: 'Vite',
    description: 'Schneller Build-Tool und Development-Server',
    icon: <SiVite className="w-12 h-12" />,
    color: 'text-yellow-400',
    category: 'tool',
  },
  {
    name: 'Tailwind CSS',
    description: 'Utility-First CSS Framework für schnelles Styling',
    icon: <SiTailwindcss className="w-12 h-12" />,
    color: 'text-cyan-500',
    category: 'tool',
  },
  {
    name: 'Framer Motion',
    description: 'Produktionsreife Animationsbibliothek für React',
    icon: <SiFramer className="w-12 h-12" />,
    color: 'text-pink-500',
    category: 'library',
  },
  {
    name: 'React Router',
    description: 'Deklaratives Routing für React-Anwendungen',
    icon: <SiReactrouter className="w-12 h-12" />,
    color: 'text-red-400',
    category: 'library',
  },
];

export const Techstack = () => {
  const { elementRef, hasIntersected } = useIntersectionObserver({
    threshold: 0.2,
  });
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const getCategoryColor = (category: TechItem['category']) => {
    switch (category) {
      case 'framework':
        return 'from-cyan-500/20 to-blue-500/20 border-cyan-400/30';
      case 'language':
        return 'from-blue-500/20 to-indigo-500/20 border-blue-400/30';
      case 'tool':
        return 'from-yellow-500/20 to-orange-500/20 border-yellow-400/30';
      case 'library':
        return 'from-pink-500/20 to-purple-500/20 border-pink-400/30';
      default:
        return 'from-gray-500/20 to-gray-600/20 border-gray-400/30';
    }
  };

  return (
    <section
      id="techstack"
      ref={elementRef as React.RefObject<HTMLElement>}
      className="relative py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 min-h-screen overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="gradient-text">{t('techstack.title')}</span>{' '}
            <span className="text-white">{t('techstack.subtitle')}</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto break-words px-4">
            {t('techstack.description')}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={hasIntersected ? 'visible' : 'hidden'}
        >
          {techStack.map((tech) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`glass rounded-2xl p-6 border-2 bg-gradient-to-br ${getCategoryColor(
                tech.category
              )} cursor-pointer transition-all duration-300`}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <motion.div
                  className={tech.color}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {tech.icon}
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-bold text-white break-words">{tech.name}</h3>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed break-words">{tech.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="glass rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 overflow-hidden">
            <motion.h3
              className="text-3xl md:text-4xl font-bold mb-6 gradient-text text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={hasIntersected ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {t('techstack.why')}
            </motion.h3>
            <motion.div
              className="space-y-4 text-base sm:text-lg md:text-xl text-white/80 leading-relaxed break-words"
              initial={{ opacity: 0 }}
              animate={hasIntersected ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <p>{t('techstack.whyDescription1')}</p>
              <p>{t('techstack.whyDescription2')}</p>
              <p>{t('techstack.whyDescription3')}</p>
            </motion.div>
            <motion.div
              className="mt-8 flex flex-wrap justify-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={hasIntersected ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              {[t('techstack.modern'), t('techstack.performant'), t('techstack.scalable'), t('techstack.typeSafe'), t('techstack.responsive')].map(
                (tag, index) => (
                  <motion.span
                    key={tag}
                    className="px-4 py-2 bg-primary-500/20 border border-primary-500/50 rounded-full text-primary-300 text-sm font-semibold"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={hasIntersected ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 1.2 + index * 0.1,
                      type: 'spring',
                      stiffness: 200,
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {tag}
                  </motion.span>
                )
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

