import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { CursorTracker } from '../components/CursorTracker';
import { useCookieConsent } from '../components/CookieBanner';
import { FaArrowLeft, FaCalendarAlt, FaTag, FaYoutube, FaGlobe, FaMobileAlt, FaTimes } from 'react-icons/fa';

export const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const cookieConsent = useCookieConsent();
  const youtubeConsent = cookieConsent?.youtube ?? false;
  
  // Finde das Projekt basierend auf dem Slug
  const project = projects.find((p) => {
    if (p.blogUrl) {
      const urlSlug = p.blogUrl.split('/').pop();
      return urlSlug === slug;
    }
    return false;
  });

  // ESC-Taste zum Schließen des Modals
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedImage) {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.addEventListener('keydown', handleEscape);
      // Verhindere Scrollen im Hintergrund
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  if (!project) {
    return (
      <motion.div
        className="App"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <CursorTracker />
        <Header />
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 to-slate-800">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Blog-Post nicht gefunden</h1>
            <Link to="/" className="text-primary-400 hover:text-primary-300">
              Zurück zur Startseite
            </Link>
          </div>
        </main>
        <Footer />
      </motion.div>
    );
  }

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
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(15,23,42,0.8),rgba(2,6,23,1))] opacity-50" />
          
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Back Button */}
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors"
              >
                <FaArrowLeft size={14} />
                <span>Zurück zu Projekten</span>
              </Link>

              {/* Title */}
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                <span className="gradient-text">{project.title}</span>
              </h1>

              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-white/60 mb-8">
                <div className="flex items-center gap-2">
                  <FaCalendarAlt size={14} />
                  <span>{new Date(project.date).toLocaleDateString('de-DE', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaTag size={14} />
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-xs border border-primary-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Image/Thumbnail */}
              {project.imageUrl && (
                <motion.div
                  className="mt-8 rounded-xl overflow-hidden shadow-2xl"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <img 
                    src={project.imageUrl.startsWith('http') ? project.imageUrl : project.imageUrl}
                    alt={project.title}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                    onError={(e) => {
                      console.error('Failed to load image:', project.imageUrl);
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12">
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.article
              className="glass rounded-2xl p-8 md:p-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Description */}
              <div className="prose prose-invert max-w-none mb-8">
                <p className="text-xl text-white/80 leading-relaxed mb-6">
                  {project.description}
                </p>
                
                {project.longDescription && (
                  <div className="text-white/70 leading-relaxed space-y-6">
                    <p className="text-lg">{project.longDescription}</p>
                    
                    {/* Spezifischer Content für Virtuelle Trainingsumgebung */}
                    {project.id === '5' && (
                      <>
                        {/* Projekt-Bilder Galerie */}
                        <div className="mt-8 grid md:grid-cols-3 gap-4">
                          <motion.div
                            className="rounded-xl overflow-hidden shadow-lg cursor-pointer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            whileHover={{ scale: 1.05 }}
                            onClick={() => setSelectedImage('/images/WohnungShaderDrawMode.png')}
                          >
                            <img 
                              src="/images/WohnungShaderDrawMode.png" 
                              alt="Wohnungsszene - Unity Shader Draw Mode"
                              className="w-full h-auto object-cover"
                            />
                          </motion.div>
                          <motion.div
                            className="rounded-xl overflow-hidden shadow-lg cursor-pointer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                            onClick={() => setSelectedImage('/images/StadtVonOben.png')}
                          >
                            <img 
                              src="/images/StadtVonOben.png" 
                              alt="Stadtansicht von oben"
                              className="w-full h-auto object-cover"
                            />
                          </motion.div>
                          <motion.div
                            className="rounded-xl overflow-hidden shadow-lg cursor-pointer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            whileHover={{ scale: 1.05 }}
                            onClick={() => setSelectedImage('/images/FahrzeugAnsicht.png')}
                          >
                            <img 
                              src="/images/FahrzeugAnsicht.png" 
                              alt="Fahrzeugansicht"
                              className="w-full h-auto object-cover"
                            />
                          </motion.div>
                        </div>

                        <div className="mt-8 p-6 bg-slate-800/50 rounded-xl border border-white/10">
                          <h2 className="text-2xl font-bold text-white mb-4">Kontext & Ziel der Arbeit</h2>
                          <p className="text-white/80 mb-4">
                            Ziel dieser Arbeit war die Erstellung eines interaktiven Prototyps, der realistische Alltagssituationen 
                            (z. B. soziale Trigger-Situationen, Entscheidungswege, Bewältigungsstrategien) nachbildet, um Patientinnen 
                            und Therapeutinnen eine sichere, wiederholbare Übungsumgebung zu bieten.
                          </p>
                          <div className="p-4 bg-indigo-500/20 rounded-lg border border-indigo-500/30 mt-4">
                            <p className="text-white/90 font-semibold mb-2">Kernfrage:</p>
                            <p className="text-white/80">
                              Wie kann eine virtuelle, interaktive Trainingsanwendung gestaltet werden, um in der Therapie bei 
                              Alkoholsucht realistische Übungsszenarien bereitzustellen und die Transferwahrscheinlichkeit in 
                              reale Situationen zu erhöhen?
                            </p>
                          </div>
                          <p className="text-white/70 text-sm mt-4 italic">
                            ⚠️ Hinweis: Einsatz als unterstützendes Werkzeug – nicht als Ersatz therapeutischer Behandlung.
                          </p>
                        </div>

                        <div className="mt-6 p-6 bg-slate-800/50 rounded-xl border border-white/10">
                          <h2 className="text-2xl font-bold text-white mb-4">Vorgehen</h2>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="p-4 bg-slate-700/50 rounded-lg">
                              <h3 className="text-lg font-semibold text-indigo-400 mb-2">1. Konzeption</h3>
                              <p className="text-white/80">Szenariendefinition mit Fokus auf Trigger-Situationen, Ziele und Erfolgskriterien für therapeutische Übungen.</p>
                            </div>
                            <div className="p-4 bg-slate-700/50 rounded-lg">
                              <h3 className="text-lg font-semibold text-green-400 mb-2">2. Implementierung</h3>
                              <p className="text-white/80">Prototyp-Entwicklung in Unity mit iterativer Entwicklung in Sprints. Fokus auf Realismus in visueller Darstellung und Interaktion.</p>
                            </div>
                            <div className="p-4 bg-slate-700/50 rounded-lg">
                              <h3 className="text-lg font-semibold text-yellow-400 mb-2">3. Evaluation</h3>
                              <p className="text-white/80">Pilot-Studie mit Fragebogen zur Usability, Realismus und Lernwahrnehmung. Quantitative Auswertung mit standardisierten Fragebögen.</p>
                            </div>
                            <div className="p-4 bg-slate-700/50 rounded-lg">
                              <h3 className="text-lg font-semibold text-purple-400 mb-2">4. Analyse & Ergebnis</h3>
                              <p className="text-white/80">Empfehlungen für Integration in therapeutische Abläufe und Weiterentwicklung basierend auf Evaluationsergebnissen.</p>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 p-6 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl border border-indigo-500/30">
                          <h2 className="text-2xl font-bold text-white mb-4">Realismus-Index</h2>
                          <p className="text-white/80 mb-4">
                            Zur Messung der Realitätsnähe wurde ein vereinfachter Realismus-Index entwickelt:
                          </p>
                          <div className="p-4 bg-slate-800/50 rounded-lg border border-indigo-500/30">
                            <p className="text-2xl font-bold text-center text-indigo-400 mb-2">R = (V + I + B) / 3</p>
                            <div className="grid md:grid-cols-3 gap-4 mt-4">
                              <div className="text-center">
                                <p className="text-lg font-semibold text-white mb-1">V</p>
                                <p className="text-sm text-white/80">Visuelle Glaubwürdigkeit</p>
                              </div>
                              <div className="text-center">
                                <p className="text-lg font-semibold text-white mb-1">I</p>
                                <p className="text-sm text-white/80">Interaktions-/Physik-Glaubwürdigkeit</p>
                              </div>
                              <div className="text-center">
                                <p className="text-lg font-semibold text-white mb-1">B</p>
                                <p className="text-sm text-white/80">Verhaltenstreue von NPCs</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 p-6 bg-slate-800/50 rounded-xl border border-white/10">
                          <h2 className="text-2xl font-bold text-white mb-4">Eingesetzte Technologien</h2>
                          <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                              <thead>
                                <tr className="border-b border-white/20">
                                  <th className="p-3 text-white font-semibold">Technologie</th>
                                  <th className="p-3 text-white font-semibold">Rolle / Einsatz</th>
                                </tr>
                              </thead>
                              <tbody className="text-white/80">
                                <tr className="border-b border-white/10">
                                  <td className="p-3"><span className="text-indigo-400 font-semibold">Unity (Engine)</span></td>
                                  <td className="p-3">Hauptplattform für Prototyp, Szenen, UI</td>
                                </tr>
                                <tr className="border-b border-white/10">
                                  <td className="p-3"><span className="text-green-400 font-semibold">C#</span></td>
                                  <td className="p-3">Gameplay-Logik, Interaktionsskripte</td>
                                </tr>
                                <tr className="border-b border-white/10">
                                  <td className="p-3"><span className="text-blue-400 font-semibold">Unity UI / Canvas</span></td>
                                  <td className="p-3">Benutzerführung, Fragebogen-Integration</td>
                                </tr>
                                <tr className="border-b border-white/10">
                                  <td className="p-3"><span className="text-red-400 font-semibold">Microsoft Forms</span></td>
                                  <td className="p-3">Datenerhebung (Fragebögen)</td>
                                </tr>
                                <tr className="border-b border-white/10">
                                  <td className="p-3"><span className="text-yellow-400 font-semibold">Excel / CSV</span></td>
                                  <td className="p-3">Datenaufbereitung und erste Auswertung</td>
                                </tr>
                                <tr className="border-b border-white/10">
                                  <td className="p-3"><span className="text-purple-400 font-semibold">Git</span></td>
                                  <td className="p-3">Versionierung, Projektverlauf, Commit-History</td>
                                </tr>
                                <tr className="border-b border-white/10">
                                  <td className="p-3"><span className="text-cyan-400 font-semibold">Occlusion Culling</span></td>
                                  <td className="p-3">Performanceoptimierung (Sichtbarkeit)</td>
                                </tr>
                                <tr className="border-b border-white/10">
                                  <td className="p-3"><span className="text-pink-400 font-semibold">NavMesh / KI</span></td>
                                  <td className="p-3">NPC-Bewegung / Verhaltenssimulation</td>
                                </tr>
                                <tr>
                                  <td className="p-3"><span className="text-orange-400 font-semibold">Post-Processing / Lighting</span></td>
                                  <td className="p-3">Visuelle Realitätssteigerung</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>

                        <div className="mt-6 p-6 bg-slate-800/50 rounded-xl border border-white/10">
                          <h2 className="text-2xl font-bold text-white mb-4">Kernergebnisse & Nutzen</h2>
                          <div className="space-y-4">
                            <div className="p-4 bg-green-500/20 rounded-lg border border-green-500/30">
                              <h3 className="text-lg font-semibold text-green-400 mb-2">✓ Realismussteigerung</h3>
                              <p className="text-white/80">
                                Realismus erhöht durch Kombination von visueller Detailtiefe, interaktiven Entscheidungsszenarien 
                                und glaubwürdigen NPC-Reaktionen.
                              </p>
                            </div>
                            <div className="p-4 bg-blue-500/20 rounded-lg border border-blue-500/30">
                              <h3 className="text-lg font-semibold text-blue-400 mb-2">✓ Wiederholbare Übungsumgebung</h3>
                              <p className="text-white/80">
                                Simulation bietet wiederholbare, kontrollierte Übungssituationen für das Training von 
                                Bewältigungsstrategien.
                              </p>
                            </div>
                            <div className="p-4 bg-yellow-500/20 rounded-lg border border-yellow-500/30">
                              <h3 className="text-lg font-semibold text-yellow-400 mb-2">✓ Positive Evaluationsergebnisse</h3>
                              <p className="text-white/80">
                                Erste Evaluation zeigt akzeptable Usability und wahrgenommene Realitätsnähe; Hinweise auf 
                                positive Lerneffekte (Pilotdaten, nicht klinische Evidenz).
                              </p>
                            </div>
                            <div className="p-4 bg-purple-500/20 rounded-lg border border-purple-500/30">
                              <h3 className="text-lg font-semibold text-purple-400 mb-2">✓ Praktischer Nutzen</h3>
                              <p className="text-white/80">
                                Ergänzung bestehender Therapieprogramme als „safe-to-fail" Übungsfeld, Erhöhung der 
                                Transferwahrscheinlichkeit in reale Kontexte durch gezielte Szenarien.
                              </p>
                            </div>
                          </div>
                          <p className="text-white/70 text-sm mt-4 italic">
                            Einschränkung: Keine klinische Wirksamkeitsstudie; Prototyp für Pilot- und Implementationsforschung gedacht.
                          </p>
                        </div>

                        <div className="mt-6 p-6 bg-slate-800/50 rounded-xl border border-white/10">
                          <h2 className="text-2xl font-bold text-white mb-4">Quellenübersicht</h2>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="p-4 bg-slate-700/50 rounded-lg">
                              <h3 className="text-lg font-semibold text-white mb-2">Wissenschaftliche Quellen</h3>
                              <ul className="list-disc list-inside space-y-1 text-white/80 text-sm">
                                <li>Wissenschaftliche Artikel (peer-reviewed): ca. 12–20</li>
                                <li>Theorie: Verhaltenstherapie, Cognitive Load, Gamification</li>
                                <li>Fachbücher / Kapitel: 2–5</li>
                              </ul>
                            </div>
                            <div className="p-4 bg-slate-700/50 rounded-lg">
                              <h3 className="text-lg font-semibold text-white mb-2">Technische & Praktische Quellen</h3>
                              <ul className="list-disc list-inside space-y-1 text-white/80 text-sm">
                                <li>Online-Ressourcen / technische Dokumentation: 5–10</li>
                                <li>Praxisberichte / Richtlinien: 3–6</li>
                                <li>Gesamt: ~22–40 Quellen</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 p-6 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-xl border border-red-500/30">
                          <h2 className="text-2xl font-bold text-white mb-4">Ethik & Einsatzbereich</h2>
                          <div className="space-y-3 text-white/80">
                            <div className="flex items-start gap-3">
                              <span className="text-xl">⚕️</span>
                              <p><strong>Einsatz nur unter Anleitung:</strong> Qualifizierte Therapeut*innen müssen die Anwendung begleiten.</p>
                            </div>
                            <div className="flex items-start gap-3">
                              <span className="text-xl">🔒</span>
                              <p><strong>Datenschutz:</strong> Formulare und Rohdaten werden pseudonymisiert; Einwilligung wird eingeholt.</p>
                            </div>
                            <div className="flex items-start gap-3">
                              <span className="text-xl">🚀</span>
                              <p><strong>Weiterentwicklung:</strong> Stärkere Verhaltensmodellierung, adaptives Feedback, VR-Integration möglich.</p>
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    {/* Spezifischer Content für BUGA 2023 App */}
                    {project.id === '4' && (
                      <>
                        <div className="mt-8 p-6 bg-slate-800/50 rounded-xl border border-white/10">
                          <h2 className="text-2xl font-bold text-white mb-4">Technologie-Stack</h2>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="p-4 bg-slate-700/50 rounded-lg">
                              <h3 className="text-lg font-semibold text-red-400 mb-2">Frontend</h3>
                              <p className="text-white/80">Angular wurde für die Entwicklung der benutzerfreundlichen Oberfläche verwendet. Die App bietet eine intuitive Navigation mit interaktiven Karten und Echtzeit-Updates.</p>
                            </div>
                            <div className="p-4 bg-slate-700/50 rounded-lg">
                              <h3 className="text-lg font-semibold text-green-400 mb-2">Backend</h3>
                              <p className="text-white/80">Spring Boot und Django wurden parallel eingesetzt, um eine robuste und skalierbare Backend-Architektur zu gewährleisten. Beide Frameworks ergänzen sich perfekt für verschiedene API-Endpunkte.</p>
                            </div>
                            <div className="p-4 bg-slate-700/50 rounded-lg">
                              <h3 className="text-lg font-semibold text-blue-400 mb-2">Datenbank</h3>
                              <p className="text-white/80">Eine SQL-Datenbank verwaltet alle Sehenswürdigkeiten, Routen, Seilbahn- und Busverbindungen. Die Datenstruktur ermöglicht schnelle Abfragen und effiziente Navigation.</p>
                            </div>
                            <div className="p-4 bg-slate-700/50 rounded-lg">
                              <h3 className="text-lg font-semibold text-purple-400 mb-2">Features</h3>
                              <p className="text-white/80">Pop-up-Zoom für detaillierte Kartenansichten, Echtzeit-Navigation, Seilbahn- und Bus-Routenplanung sowie interaktive Sehenswürdigkeiten-Planung.</p>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 p-6 bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-xl border border-primary-500/30">
                          <h2 className="text-2xl font-bold text-white mb-4">Team & Zusammenarbeit</h2>
                          <p className="text-white/80 mb-4">
                            Das Projekt wurde von einem sechsköpfigen Team entwickelt. Die Zusammenarbeit erfolgte agil mit klarer Aufteilung der Verantwortlichkeiten:
                          </p>
                          <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                            <li>Frontend-Entwicklung mit Angular</li>
                            <li>Backend-APIs mit Spring Boot und Django</li>
                            <li>Datenbank-Design und -Implementierung</li>
                            <li>UI/UX Design und Benutzerfreundlichkeit</li>
                            <li>Testing und Qualitätssicherung</li>
                            <li>Projektmanagement und Koordination</li>
                          </ul>
                        </div>

                        <div className="mt-6 p-6 bg-slate-800/50 rounded-xl border border-white/10">
                          <h2 className="text-2xl font-bold text-white mb-4">Hauptfunktionen</h2>
                          <div className="space-y-4">
                            <div className="flex items-start gap-4">
                              <div className="text-2xl">🗺️</div>
                              <div>
                                <h3 className="text-lg font-semibold text-white mb-1">Interaktive Karte</h3>
                                <p className="text-white/80">Eine detaillierte Karte des BUGA-Geländes mit Zoom-Funktion ermöglicht es Besuchern, sich einfach zu orientieren und Sehenswürdigkeiten zu finden.</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-4">
                              <div className="text-2xl">🚠</div>
                              <div>
                                <h3 className="text-lg font-semibold text-white mb-1">Seilbahn-Navigation</h3>
                                <p className="text-white/80">Informationen über Seilbahnverbindungen und deren Verfügbarkeit helfen Besuchern, die schnellste Route zu ihren Zielen zu finden.</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-4">
                              <div className="text-2xl">🚌</div>
                              <div>
                                <h3 className="text-lg font-semibold text-white mb-1">Bus-Routen</h3>
                                <p className="text-white/80">Echtzeit-Informationen über interne Busse und deren Routen erleichtern die Navigation zwischen verschiedenen Bereichen der BUGA.</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-4">
                              <div className="text-2xl">📍</div>
                              <div>
                                <h3 className="text-lg font-semibold text-white mb-1">Sehenswürdigkeiten-Planung</h3>
                                <p className="text-white/80">Besucher können Sehenswürdigkeiten planen, besichtigen und über Pop-ups mit Zoom-Funktion detaillierte Informationen abrufen.</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 p-6 bg-slate-800/50 rounded-xl border border-white/10">
                          <h2 className="text-2xl font-bold text-white mb-4">Herausforderungen & Lösungen</h2>
                          <p className="text-white/80 mb-4">
                            Die Entwicklung einer Navigations-App für ein so großes Gelände wie die BUGA 2023 stellte einige Herausforderungen dar:
                          </p>
                          <ul className="list-disc list-inside space-y-2 text-white/80 ml-4">
                            <li><strong>Echtzeit-Daten:</strong> Die Integration von Live-Daten für Busse und Seilbahnen erforderte eine robuste Backend-Architektur.</li>
                            <li><strong>Performance:</strong> Die große Datenmenge an Sehenswürdigkeiten und Routen erforderte optimierte Datenbankabfragen.</li>
                            <li><strong>Benutzerfreundlichkeit:</strong> Die intuitive UI musste auch für technisch weniger versierte Nutzer einfach zu bedienen sein.</li>
                            <li><strong>Team-Koordination:</strong> Die Zusammenarbeit von sechs Personen erforderte klare Kommunikation und gut strukturierte Arbeitsabläufe.</li>
                          </ul>
                        </div>
                      </>
                    )}
                    
                    {/* Fallback für andere Projekte */}
                    {project.id !== '4' && (
                      <div className="mt-8 p-6 bg-slate-800/50 rounded-xl border border-white/10">
                        <h2 className="text-2xl font-bold text-white mb-4">Weitere Details</h2>
                        <p className="text-white/70 mb-4">
                          Hier können Sie später detaillierte Informationen, Code-Beispiele, 
                          Screenshots oder andere relevante Inhalte hinzufügen.
                        </p>
                        <p className="text-white/70">
                          Dieser Bereich ist vollständig anpassbar und kann mit Markdown, 
                          Code-Highlighting, Bildern und mehr erweitert werden.
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Call to Action - Links Section */}
              {(project.youtubeUrl || project.websiteUrl || project.appUrl) && (
                <div className="mt-12 pt-8 border-t border-white/10">
                  <h3 className="text-xl font-bold text-white mb-4">Verwandte Links</h3>
                  <div className="flex flex-wrap gap-4">
                    {project.youtubeUrl && (
                      youtubeConsent ? (
                        <motion.a
                          href={project.youtubeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 bg-red-600/20 hover:bg-red-600/30 text-red-300 rounded-lg border border-red-500/30 transition-colors inline-flex items-center gap-2 font-semibold"
                          whileHover={{ scale: 1.05, x: 2 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaYoutube size={16} />
                          YouTube Video ansehen
                        </motion.a>
                      ) : (
                        <motion.button
                          onClick={() => {
                            window.dispatchEvent(new CustomEvent('showCookieBanner'));
                          }}
                          className="px-6 py-3 bg-red-600/20 hover:bg-red-600/30 text-red-300 rounded-lg border border-red-500/30 transition-colors inline-flex items-center gap-2 font-semibold cursor-pointer"
                          whileHover={{ scale: 1.05, x: 2 }}
                          whileTap={{ scale: 0.95 }}
                          title="Cookie-Zustimmung erforderlich"
                        >
                          <FaYoutube size={16} />
                          YouTube Video ansehen
                        </motion.button>
                      )
                    )}
                    {project.websiteUrl && (
                      <motion.a
                        href={project.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 rounded-lg border border-blue-500/30 transition-colors inline-flex items-center gap-2 font-semibold"
                        whileHover={{ scale: 1.05, x: 2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaGlobe size={16} />
                        Website besuchen
                      </motion.a>
                    )}
                    {project.appUrl && (
                      <motion.a
                        href={project.appUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-green-600/20 hover:bg-green-600/30 text-green-300 rounded-lg border border-green-500/30 transition-colors inline-flex items-center gap-2 font-semibold"
                        whileHover={{ scale: 1.05, x: 2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaMobileAlt size={16} />
                        App öffnen
                      </motion.a>
                    )}
                  </div>
                </div>
              )}
            </motion.article>
          </div>
        </section>
      </main>
      <Footer />

      {/* Bild-Popup Modal */}
      <AnimatePresence>
        {selectedImage && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              {/* Schließen-Button */}
              <motion.button
                className="absolute top-4 right-4 z-60 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-sm"
                onClick={() => setSelectedImage(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              >
                <FaTimes size={20} />
              </motion.button>

              {/* Bild Container */}
              <motion.div
                className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={selectedImage} 
                  alt="Vergrößerte Ansicht"
                  className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                />
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

