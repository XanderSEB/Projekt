import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

type TranslationKey = keyof typeof translations.de;

export const useTranslation = () => {
  const { language } = useLanguage();
  
  const t = (key: TranslationKey): string => {
    return translations[language][key] || key;
  };
  
  return { t, language };
};

