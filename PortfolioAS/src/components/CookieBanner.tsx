import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaCookie } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';

interface CookieConsent {
  necessary: boolean;
  youtube: boolean;
  timestamp: number;
}

const COOKIE_CONSENT_KEY = 'cookieConsent';

export const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    // Prüfe ob bereits eine Einwilligung vorliegt
    const savedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (savedConsent) {
      try {
        JSON.parse(savedConsent) as CookieConsent;
        setShowBanner(false);
      } catch {
        // Bei Fehler Banner anzeigen
        setShowBanner(true);
      }
    } else {
      setShowBanner(true);
    }

    // Event Listener für manuelles Anzeigen des Banners
    const handleShowBanner = () => {
      setShowBanner(true);
    };
    window.addEventListener('showCookieBanner', handleShowBanner);
    return () => window.removeEventListener('showCookieBanner', handleShowBanner);
  }, []);

  const handleAcceptAll = () => {
    const newConsent: CookieConsent = {
      necessary: true,
      youtube: true,
      timestamp: Date.now(),
    };
    saveConsent(newConsent);
  };

  const handleAcceptNecessary = () => {
    const newConsent: CookieConsent = {
      necessary: true,
      youtube: false,
      timestamp: Date.now(),
    };
    saveConsent(newConsent);
  };

  const handleReject = () => {
    const newConsent: CookieConsent = {
      necessary: true, // Notwendige Cookies können nicht abgelehnt werden
      youtube: false,
      timestamp: Date.now(),
    };
    saveConsent(newConsent);
  };

  const saveConsent = (newConsent: CookieConsent) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(newConsent));
    setShowBanner(false);
    // Event für andere Komponenten
    window.dispatchEvent(new CustomEvent('cookieConsentUpdated', { detail: newConsent }));
  };

  if (!showBanner) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
      >
        <div className="container mx-auto max-w-4xl">
          <div className="glass rounded-2xl p-6 md:p-8 shadow-2xl border border-white/20">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <FaCookie className="text-primary-400 text-2xl" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2">{t('cookieBanner.title')}</h3>
                <p className="text-white/80 mb-4 text-sm md:text-base">
                  {t('cookieBanner.description')}
                </p>
                <div className="mb-4 space-y-2 text-sm text-white/70">
                  <div>
                    <strong className="text-white">{t('cookieBanner.necessary')}</strong>
                  </div>
                  <div>
                    <strong className="text-white">{t('cookieBanner.youtube')}</strong>{' '}
                    <Link to="/datenschutz" className="text-primary-400 hover:text-primary-300 underline">
                      {t('cookieBanner.privacyLink')}
                    </Link>.
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.button
                    onClick={handleAcceptAll}
                    className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t('cookieBanner.acceptAll')}
                  </motion.button>
                  <motion.button
                    onClick={handleAcceptNecessary}
                    className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t('cookieBanner.acceptNecessary')}
                  </motion.button>
                  <motion.button
                    onClick={handleReject}
                    className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-semibold transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t('cookieBanner.reject')}
                  </motion.button>
                </div>
              </div>
              <motion.button
                onClick={() => setShowBanner(false)}
                className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-white/70 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Schließen"
              >
                <FaTimes size={18} />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

// Hook zum Prüfen der Cookie-Zustimmung
export const useCookieConsent = () => {
  const [consent, setConsent] = useState<CookieConsent | null>(null);

  useEffect(() => {
    const loadConsent = () => {
      const saved = localStorage.getItem(COOKIE_CONSENT_KEY);
      if (saved) {
        try {
          setConsent(JSON.parse(saved) as CookieConsent);
        } catch {
          setConsent(null);
        }
      }
    };

    loadConsent();

    // Event Listener für Consent-Updates
    const handleUpdate = (e: Event) => {
      const customEvent = e as CustomEvent<CookieConsent>;
      setConsent(customEvent.detail);
    };

    window.addEventListener('cookieConsentUpdated', handleUpdate);
    return () => window.removeEventListener('cookieConsentUpdated', handleUpdate);
  }, []);

  return consent;
};

