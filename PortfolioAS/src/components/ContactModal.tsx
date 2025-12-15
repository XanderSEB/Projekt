import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaTimes, FaBuilding, FaUser } from 'react-icons/fa';
import { asaisGroupInfo } from '../data/asaisGroup';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const portfolioEmail = 'as-productions@outlook.de';
  const asaisEmail = asaisGroupInfo.contact.email;

  const contacts = [
    {
      label: 'Portfolio AS',
      email: portfolioEmail,
      description: 'Persönliche Anfragen & Portfolio',
      icon: FaUser,
    },
    {
      label: 'ASAIS Group',
      email: asaisEmail,
      description: 'Geschäftliche Anfragen & Services',
      icon: FaBuilding,
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9998]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >
            <motion.div
              className="glass rounded-2xl p-6 md:p-8 max-w-md w-full relative"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
                aria-label="Schließen"
              >
                <FaTimes size={20} />
              </button>

              {/* Header */}
              <div className="mb-6">
                <h2 className="text-3xl font-bold mb-2">
                  <span className="gradient-text">Kontakt</span>
                </h2>
                <p className="text-white/70 text-sm">
                  Wählen Sie einen Kontakt für Ihre Anfrage
                </p>
              </div>

              {/* Contact Options */}
              <div className="space-y-4">
                {contacts.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <motion.a
                      key={contact.email}
                      href={`mailto:${contact.email}`}
                      className="block glass rounded-xl p-4 hover:bg-white/10 transition-all border border-white/10 hover:border-primary-500/50 group"
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Icon size={20} className="text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-semibold text-white mb-1">
                            {contact.label}
                          </h3>
                          <p className="text-sm text-white/60 mb-2">
                            {contact.description}
                          </p>
                          <p className="text-primary-400 font-mono text-sm break-all">
                            {contact.email}
                          </p>
                        </div>
                        <FaEnvelope
                          size={16}
                          className="text-white/40 group-hover:text-primary-400 transition-colors flex-shrink-0 mt-1"
                        />
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Footer */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-white/50 text-xs text-center">
                  Klicken Sie auf einen Kontakt, um Ihr E-Mail-Programm zu öffnen
                </p>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

