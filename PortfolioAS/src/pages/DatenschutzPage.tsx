import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CursorTracker } from '../components/CursorTracker';
import { useTranslation } from '../hooks/useTranslation';
import { FaArrowLeft } from 'react-icons/fa';

export const DatenschutzPage = () => {
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
                  <span className="gradient-text">Datenschutzerklärung</span>
                </h1>

                <div className="prose prose-invert max-w-none space-y-6 text-white/80">
                  <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">1. Datenschutz auf einen Blick</h2>
                    
                    <h3 className="text-xl font-semibold text-white mt-6 mb-3">Allgemeine Hinweise</h3>
                    <p>
                      Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-6 mb-3">Datenerfassung auf dieser Website</h3>
                    <p>
                      <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                      Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
                    </p>
                    <p>
                      <strong>Wie erfassen wir Ihre Daten?</strong><br />
                      Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                    </p>
                    <p>
                      <strong>Wofür nutzen wir Ihre Daten?</strong><br />
                      Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">2. Hosting</h2>
                    <p>
                      Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert.
                    </p>
                    <p>
                      Hoster: <a href="https://vercel.com/home" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300">Vercel Inc.</a>
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
                    
                    <h3 className="text-xl font-semibold text-white mt-6 mb-3">Datenschutz</h3>
                    <p>
                      Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzbestimmungen sowie dieser Datenschutzerklärung.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-6 mb-3">Hinweis zur verantwortlichen Stelle</h3>
                    <p>
                      Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br />
                      <br />
                      Portfolio AS<br />
                      Alexander Schwab<br />
                      Hauptstraße<br />
                      74229 Oedheim<br />
                      <br />
                      Telefon: <a href="tel:+491723542227" className="text-primary-400 hover:text-primary-300">01723542227</a><br />
                      E-Mail: <a href="mailto:as-productions@outlook.de" className="text-primary-400 hover:text-primary-300">as-productions@outlook.de</a>
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">4. Datenerfassung auf dieser Website</h2>
                    
                    <h3 className="text-xl font-semibold text-white mt-6 mb-3">Cookies</h3>
                    <p>
                      Diese Website nutzt Cookies. Cookies sind kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (dauerhafte Cookies) auf Ihrem Endgerät gespeichert.
                    </p>
                    <p>
                      Wenn Sie YouTube-Videos auf dieser Website ansehen, werden Cookies von YouTube gesetzt. Diese dienen der Analyse und Personalisierung. Sie können der Verwendung von Cookies widersprechen, indem Sie die entsprechenden Einstellungen in Ihrem Browser vornehmen.
                    </p>

                    <h3 className="text-xl font-semibold text-white mt-6 mb-3">YouTube</h3>
                    <p>
                      Diese Website bindet Videos der Website YouTube ein. Betreiber der Seiten ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
                    </p>
                    <p>
                      Wenn Sie eine Seite mit YouTube-Videos besuchen, wird eine Verbindung zu den Servern von YouTube hergestellt. Dabei wird dem YouTube-Server mitgeteilt, welche unserer Seiten Sie besucht haben.
                    </p>
                    <p>
                      Wenn Sie in Ihrem YouTube-Account eingeloggt sind, ermöglichen Sie YouTube, Ihr Surfverhalten direkt Ihrem persönlichen Profil zuzuordnen. Dies können Sie verhindern, indem Sie sich aus Ihrem YouTube-Account ausloggen.
                    </p>
                    <p>
                      Die Nutzung von YouTube erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.
                    </p>
                    <p>
                      Weitere Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von YouTube unter: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300">https://policies.google.com/privacy</a>
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-semibold text-white mb-4">5. Ihre Rechte</h2>
                    <p>
                      Sie haben jederzeit das Recht, Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten. Außerdem haben Sie ein Recht auf Berichtigung, Löschung oder Einschränkung der Verarbeitung Ihrer Daten sowie ein Widerspruchsrecht gegen die Verarbeitung.
                    </p>
                    <p>
                      Bei Fragen zum Datenschutz können Sie sich jederzeit an uns wenden.
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

