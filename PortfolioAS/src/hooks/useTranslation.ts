import { useLanguage } from '../context/LanguageContext';
import { translations, TranslationKey } from '../data/translations';

export type TranslationFunction = (key: TranslationKey) => string;

export const useTranslation = () => {
  const { language } = useLanguage();
  
  const t: TranslationFunction = (key: TranslationKey): string => {
    return translations[language][key] || key;
  };
  
  return { t, language };
};

