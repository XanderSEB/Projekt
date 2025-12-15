import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'de' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LANGUAGE_STORAGE_KEY = 'portfolioLanguage';

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Lade gespeicherte Sprache oder verwende Deutsch als Standard
    const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (saved === 'de' || saved === 'en') {
      return saved;
    }
    // Standard: Deutsch (primär)
    return 'de';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    // Event für andere Komponenten
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: lang }));
  };

  useEffect(() => {
    // Event Listener für Sprachwechsel
    const handleLanguageChange = (e: Event) => {
      const customEvent = e as CustomEvent<Language>;
      setLanguageState(customEvent.detail);
    };
    window.addEventListener('languageChanged', handleLanguageChange);
    return () => window.removeEventListener('languageChanged', handleLanguageChange);
  }, []);

  // Translation function - wird von translations.ts importiert
  const t = (key: string): string => {
    // Diese Funktion wird durch den useTranslation Hook überschrieben
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

