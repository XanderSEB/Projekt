import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { FaGlobe } from 'react-icons/fa';

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'de' ? 'en' : 'de');
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-4 py-2 glass rounded-lg text-white/80 hover:text-white transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${language === 'de' ? 'English' : 'Deutsch'}`}
    >
      <FaGlobe size={16} />
      <span className="text-sm font-medium">{language === 'de' ? 'EN' : 'DE'}</span>
    </motion.button>
  );
};

