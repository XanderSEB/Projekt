import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Parallax } from './ScrollAnimations';
import { roles } from '../data/roles';
import { useTranslation } from '../hooks/useTranslation';
import { ContactForm } from './ContactForm';

export const Hero = () => {
  const { scrollY } = useScrollAnimation();
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const { t } = useTranslation();

  // Rotiere durch die Rollen
  useEffect(() => {
    if (!isLoaded) return;
    
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000); // Wechsle alle 3 Sekunden

    return () => clearInterval(interval);
  }, [isLoaded]);

  // Setze isLoaded nach der initialen Animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 3500); // Nach Loading + kurzer Pause

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.1,
      y: 100, // Startet weiter unten
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1.5,
        ease: [0.34, 1.56, 0.64, 1], // Overshoot für dynamischen "nach vorne gezogen" Effekt
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <Parallax speed={0.3}>
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl" />
        </Parallax>
        <Parallax speed={0.5}>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        </Parallax>
      </div>

      <motion.div
        className="container mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="text-center max-w-4xl mx-auto"
          style={{
            y: scrollY * 0.3,
          }}
        >
          {/* Portfolio Alexander Schwab */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8"
            variants={itemVariants}
          >
            <span className="gradient-text">Portfolio</span>
            <br />
            <span className="text-white">Alexander Schwab</span>
          </motion.h1>

          {/* Rotierende Rollen */}
          <motion.div
            className="h-16 md:h-20 mb-8 flex items-center justify-center"
            variants={itemVariants}
          >
            <div className="relative">
              <motion.p
                className="text-2xl md:text-4xl lg:text-5xl font-bold text-white/90"
                key={currentRoleIndex}
                initial={{ opacity: 0, y: 20, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -20, rotateX: 90 }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <span className="text-white/60">{t('hero.hi')} </span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentRoleIndex}
                    className="gradient-text inline-block"
                    initial={{ opacity: 0, y: 20, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    exit={{ opacity: 0, y: -20, rotateX: 90 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    {roles[currentRoleIndex]}
                  </motion.span>
                </AnimatePresence>
              </motion.p>
            </div>
          </motion.div>

          {/* Beschreibung */}
          <motion.p
            className="text-xl md:text-2xl text-white/70 mb-8 leading-relaxed"
            variants={itemVariants}
          >
            {t('hero.welcome')}
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            variants={itemVariants}
          >
            <motion.a
              href="#projects"
              className="px-8 py-4 bg-primary-500 text-white rounded-full font-semibold text-lg hover:bg-primary-600 transition-colors relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="relative z-10">{t('hero.cta')}</span>
              <motion.div
                className="absolute inset-0 bg-primary-600"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            <motion.button
              className="px-8 py-4 glass text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsContactFormOpen(true)}
            >
              {t('hero.contact')}
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>

      <ContactForm isOpen={isContactFormOpen} onClose={() => setIsContactFormOpen(false)} />
    </section>
  );
};
