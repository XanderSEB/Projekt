import { motion } from 'framer-motion';
import { CursorTracker } from '../components/CursorTracker';
import { Header } from '../components/Header';
import { ASAISGroup } from '../components/ASAISGroup';
import { Footer } from '../components/Footer';

export const ASAISGroupPage = () => {
  return (
    <motion.div
      className="App"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <CursorTracker />
      <Header />
      <main>
        <ASAISGroup />
      </main>
      <Footer />
    </motion.div>
  );
};




