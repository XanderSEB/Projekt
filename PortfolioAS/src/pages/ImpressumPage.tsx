import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CursorTracker } from '../components/CursorTracker';
import { useTranslation } from '../hooks/useTranslation';
import { FaArrowLeft } from 'react-icons/fa';

export const ImpressumPage = () => {
  const { t } = useTranslation();
  return (
    <motion.div
      className="App"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <CursorTracker />
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <section className="py-24">
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Back Button */}
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors"
              >
                <FaArrowLeft size={14} />
                <span>{t('common.back')}</span>
              </Link>

              {/* Content */}
              <div className="glass rounded-2xl p-8 md:p-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-8">
                  <span className="gradient-text">Impressum</span>
                </h1>

                <div className="prose prose-invert max-w-none space-y-6 text-white/80">
                  <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">Angaben gemäß § 5 TMG</h2>
                    <p>
                      Portfolio AS<br />
                      Alexander Schwab<br />
                      Hauptstraße<br />
                      74229 Oedheim
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">Kontakt</h2>
                    <p>
                      Telefon: <a href="tel:+491723542227" className="text-primary-400 hover:text-primary-300">01723542227</a><br />
                      E-Mail: <a href="mailto:as-productions@outlook.de" className="text-primary-400 hover:text-primary-300">as-productions@outlook.de</a>
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                    <p>
                      Alexander Schwab<br />
                      Hauptstraße<br />
                      74229 Oedheim
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">Hosting</h2>
                    <p>
                      Diese Website wird gehostet auf:<br />
                      <a href="https://vercel.com/home" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300">
                        Vercel Inc.
                      </a>
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">Haftungsausschluss</h2>
                    
                    <h3 className="text-xl font-semibold text-white mt-6 mb-3">Haftung für Inhalte</h3>
                    <p>
                      Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-6 mb-3">Haftung für Links</h3>
                    <p>
                      Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-6 mb-3">Urheberrecht</h3>
                    <p>
                      Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                    </p>
                  </section>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
};

