import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaYoutube } from 'react-icons/fa';
import { useTranslation } from '../hooks/useTranslation';
import { ContactModal } from './ContactModal';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t, language } = useTranslation();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/XanderSEB', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/alexander-schwab-3bb61b383/', label: 'LinkedIn' },
    { icon: FaEnvelope, href: '#', label: 'Email', isEmail: true },
    { icon: FaYoutube, href: 'https://www.youtube.com/@alexanderschwab7288', label: 'YouTube' },
  ];

  return (
    <footer id="contact" className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 gradient-text">{t('footer.about')}</h3>
            <p className="text-white/70">
              {language === 'de' 
                ? 'Eine moderne Portfolio-Webseite, die meine Projekte, Bildung und die ASAIS Group präsentiert.'
                : 'A modern portfolio website showcasing my projects, education, and the ASAIS Group.'}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-white/70 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-white/70 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {t('nav.projects')}
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="text-white/70 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#education')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {t('nav.education')}
                </a>
              </li>
              <li>
                <a
                  href="#asais"
                  className="text-white/70 hover:text-white transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#asais')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {t('nav.asaisGroup')}
                </a>
              </li>
              <li>
                <Link
                  to="/impressum"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {t('footer.impressum')}
                </Link>
              </li>
              <li>
                <Link
                  to="/datenschutz"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {t('footer.datenschutz')}
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold mb-4">{t('footer.socialMedia')}</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                if (link.isEmail) {
                  return (
                    <motion.button
                      key={link.label}
                      onClick={() => setIsContactModalOpen(true)}
                      className="w-12 h-12 glass rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      aria-label={link.label}
                    >
                      <Icon size={20} />
                    </motion.button>
                  );
                }
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 glass rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    aria-label={link.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-center text-white/50">
            <p>&copy; {currentYear} {t('footer.copyright')}</p>
            <div className="flex gap-4 text-sm">
              <Link to="/impressum" className="hover:text-white transition-colors">
                {t('footer.impressum')}
              </Link>
              <span className="text-white/30">|</span>
              <Link to="/datenschutz" className="hover:text-white transition-colors">
                {t('footer.datenschutz')}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </footer>
  );
};










