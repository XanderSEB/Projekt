import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaUser, FaPaperPlane, FaTimes, FaFileAlt } from 'react-icons/fa';

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactForm = ({ isOpen, onClose }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    contactType: 'portfolio', // 'portfolio' or 'asais'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Get the appropriate email based on contact type
    const recipientEmail = formData.contactType === 'portfolio' 
      ? 'alexander1.schwab@web.de'
      : 'as-productions@outlook.de'; // ASAIS Group email (same for now)

    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Kontaktanfrage');
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `E-Mail: ${formData.email}\n\n` +
      `Nachricht:\n${formData.message}`
    );
    const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

    // Open email client
    window.location.href = mailtoLink;
    
    // Simulate success after a short delay
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setTimeout(() => {
        onClose();
        setFormData({ name: '', email: '', subject: '', message: '', contactType: 'portfolio' });
        setSubmitStatus('idle');
      }, 2000);
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9998]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Form Modal */}
      <motion.div
        className="glass rounded-2xl p-6 md:p-8 max-w-lg w-full relative z-[9999] max-h-[90vh] overflow-y-auto"
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
            <span className="gradient-text">Kontaktformular</span>
          </h2>
          <p className="text-white/70 text-sm">
            Senden Sie uns eine Nachricht
          </p>
        </div>

        {submitStatus === 'success' ? (
          <motion.div
            className="text-center py-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaPaperPlane className="text-green-400" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Nachricht vorbereitet!</h3>
            <p className="text-white/70 text-sm">
              Ihr E-Mail-Programm sollte sich jetzt öffnen.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Contact Type Selection */}
            <div>
              <label className="block text-white/80 text-sm font-semibold mb-2">
                Art der Anfrage
              </label>
              <select
                name="contactType"
                value={formData.contactType}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-primary-500 transition-colors"
              >
                <option value="portfolio">Portfolio AS - Persönliche Anfragen</option>
                <option value="asais">ASAIS Group - Geschäftliche Anfragen</option>
              </select>
            </div>

            {/* Name */}
            <div>
              <label className="block text-white/80 text-sm font-semibold mb-2">
                Name *
              </label>
              <div className="relative">
                <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40" size={16} />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="Ihr Name"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-white/80 text-sm font-semibold mb-2">
                E-Mail *
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40" size={16} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="ihre.email@example.com"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="block text-white/80 text-sm font-semibold mb-2">
                Betreff
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-primary-500 transition-colors"
                placeholder="Betreff Ihrer Nachricht"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-white/80 text-sm font-semibold mb-2">
                Nachricht *
              </label>
              <div className="relative">
                <FaFileAlt className="absolute left-4 top-4 text-white/40" size={16} />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                  placeholder="Ihre Nachricht..."
                />
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold text-base transition-colors inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Wird vorbereitet...</span>
                </>
              ) : (
                <>
                  <FaPaperPlane size={16} />
                  <span>Nachricht senden</span>
                </>
              )}
            </motion.button>
          </form>
        )}
      </motion.div>
    </motion.div>
  );
};

