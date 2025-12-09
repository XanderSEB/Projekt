import { motion } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa';
import { asaisGroupInfo } from '../data/asaisGroup';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            className="text-white/60 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © {new Date().getFullYear()} {asaisGroupInfo.name}. Alle Rechte vorbehalten.
          </motion.p>
          {asaisGroupInfo.contact?.email && (
            <motion.a
              href={`mailto:${asaisGroupInfo.contact.email}`}
              className="flex items-center gap-2 text-white/60 hover:text-primary-400 transition-colors text-sm"
              whileHover={{ x: 5 }}
            >
              <FaEnvelope size={14} />
              <span>{asaisGroupInfo.contact.email}</span>
            </motion.a>
          )}
        </div>
      </div>
    </footer>
  );
};


