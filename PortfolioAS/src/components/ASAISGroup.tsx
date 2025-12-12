import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { asaisGroupInfo, Project } from '../data/asaisGroup';
import { ScrollAnimations } from './ScrollAnimations';
import { FaArrowRight, FaEnvelope, FaPhone, FaCheckCircle, FaHeadset, FaLaptopCode, FaRocket, FaGlobe } from 'react-icons/fa';

export const ASAISGroup = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Zoom-Out Effekt basierend auf Scroll
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.3]);

  const pricingIcons = [FaHeadset, FaLaptopCode, FaRocket];

  return (
    <div ref={containerRef} className="relative min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section mit Zoom-Out Effekt */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background mit Zoom-Out */}
        <motion.div
          className="fixed inset-0 pointer-events-none"
          style={{ scale, opacity }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]" />
        </motion.div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            className="max-w-5xl mx-auto text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 break-words px-2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-white">{asaisGroupInfo.hero.headline}</span>
            </motion.h1>
            
            <motion.p
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/70 mb-12 max-w-3xl mx-auto break-words px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {asaisGroupInfo.hero.subheadline}
            </motion.p>

            <motion.p
              className="text-sm sm:text-base md:text-lg text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed break-words px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {asaisGroupInfo.description}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                className="px-8 py-4 bg-primary-500 text-white rounded-lg font-semibold text-lg hover:bg-primary-600 transition-colors inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {asaisGroupInfo.hero.ctaPrimary}
                <FaArrowRight />
              </motion.button>
              <motion.button
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold text-lg hover:bg-white/20 transition-colors border border-white/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {asaisGroupInfo.hero.ctaSecondary}
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      {asaisGroupInfo.pricing && asaisGroupInfo.pricing.length > 0 && (
        <section className="relative py-24">
          <div className="container mx-auto px-4 sm:px-6">
            <ScrollAnimations direction="fade">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white break-words px-4">
                  Unsere Preispakete
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-2xl mx-auto break-words px-4">
                  Transparente Preise für Ihre digitalen Bedürfnisse
                </p>
              </div>
            </ScrollAnimations>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {asaisGroupInfo.pricing.map((packageItem, index) => {
                const Icon = pricingIcons[index] || FaRocket;
                return (
                  <ScrollAnimations key={index} direction="up" delay={index * 0.1}>
                    <motion.div
                      className={`glass rounded-2xl p-6 sm:p-8 md:p-10 h-full flex flex-col overflow-hidden relative ${
                        packageItem.highlight 
                          ? 'border-2 border-primary-500/50 bg-gradient-to-br from-primary-500/10 to-purple-500/10' 
                          : ''
                      }`}
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      {packageItem.highlight && (
                        <div className="absolute top-4 right-4 px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-xs font-semibold border border-primary-500/50">
                          Empfohlen
                        </div>
                      )}
                      
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                        <Icon size={28} className="text-white" />
                      </div>
                      
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 break-words">
                        {packageItem.title}
                      </h3>
                      
                      <p className="text-sm sm:text-base text-white/60 mb-6 break-words">
                        {packageItem.description}
                      </p>
                      
                      <div className="mb-6">
                        <div className="flex items-baseline gap-2">
                          <span className="text-4xl sm:text-5xl font-bold text-white">
                            {packageItem.price}€
                          </span>
                          {packageItem.period && (
                          <span className="text-white/60 text-sm">
                            {packageItem.period}
                          </span>
                          )}
                        </div>
                      </div>
                      
                      <ul className="space-y-3 flex-grow mb-6">
                        {packageItem.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3 text-white/80 text-sm sm:text-base">
                            <FaCheckCircle className="text-primary-400 mt-1 flex-shrink-0" size={16} />
                            <span className="break-words">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <motion.button
                        className="w-full px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold text-base transition-colors inline-flex items-center justify-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        Kontakt aufnehmen
                        <FaArrowRight size={14} />
                      </motion.button>
                    </motion.div>
                  </ScrollAnimations>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Portfolio Section mit Scroll-Zoom-Out Effekt */}
      {asaisGroupInfo.projects && asaisGroupInfo.projects.length > 0 && (
        <ProjectsShowcase projects={asaisGroupInfo.projects} />
      )}

      {/* Contact Section */}
      <section className="relative py-24">
        <div className="container mx-auto px-4 sm:px-6">
            <ScrollAnimations direction="fade">
              <div className="max-w-4xl mx-auto glass rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 text-center overflow-hidden">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white break-words px-4">
                  Lassen Sie uns über Ihr nächstes Projekt sprechen
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl text-white/70 mb-8 break-words px-4">
                  Kontaktieren Sie uns für eine technische Beratung.
                </p>
                
                <div className="flex flex-col md:flex-row gap-6 justify-center">
                  <motion.a
                    href={`mailto:${asaisGroupInfo.contact.email}`}
                    className="flex items-center gap-3 px-6 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-colors border border-white/20"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaEnvelope size={20} />
                    <div className="text-left">
                      <div className="text-sm text-white/60">E-Mail-Anfragen</div>
                      <div className="font-semibold">{asaisGroupInfo.contact.email}</div>
                    </div>
                  </motion.a>
                  
                  {asaisGroupInfo.contact.phone && (
                    <motion.a
                      href={`tel:${asaisGroupInfo.contact.phone}`}
                      className="flex items-center gap-3 px-6 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-colors border border-white/20"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaPhone size={20} />
                      <div className="text-left">
                        <div className="text-sm text-white/60">Telefon-Support</div>
                        <div className="font-semibold">{asaisGroupInfo.contact.phone}</div>
                      </div>
                    </motion.a>
                  )}
                </div>
              </div>
            </ScrollAnimations>
        </div>
      </section>
    </div>
  );
};

// ProjectsShowcase Komponente mit Scroll-Zoom-Out Effekt
interface ProjectsShowcaseProps {
  projects: Project[];
}

const ProjectsShowcase = ({ projects }: ProjectsShowcaseProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Einfache Scroll-Erkennung für aktives Projekt
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Finde das Projekt, das aktuell im Viewport ist
      const projectElements = document.querySelectorAll('[data-project-index]');
      let newActiveIndex = 0;
      
      projectElements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= windowHeight / 2 && rect.bottom >= windowHeight / 2) {
          newActiveIndex = index;
        }
      });
      
      setActiveIndex(newActiveIndex);
      setScrollProgress(Math.min(1, scrollPosition / (windowHeight * projects.length)));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [projects.length]);

  return (
    <section className="relative py-24 bg-slate-900/50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <ScrollAnimations direction="fade">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white break-words px-4">
              Unsere Projekte
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-2xl mx-auto break-words px-4">
              Entdecken Sie unsere neuesten Projekte und Case Studies
            </p>
            <p className="text-xs sm:text-sm text-white/50 mt-4 break-words px-4">
              Scrollen Sie, um durch die Projekte zu navigieren
            </p>
          </div>
        </ScrollAnimations>
      </div>

      {/* Scroll Container - Projekte untereinander */}
      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6">
        <div className="space-y-12 md:space-y-16">
          {projects && projects.length > 0 ? (
            projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                scrollProgress={scrollProgress}
                isActive={index === activeIndex}
                activeIndex={activeIndex}
                totalProjects={projects.length}
              />
            ))
          ) : (
            <div className="text-white text-center">
              <p>Keine Projekte verfügbar</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// ProjectCard Komponente mit Scroll-Animation
interface ProjectCardProps {
  project: Project;
  index: number;
  scrollProgress: number;
  isActive: boolean;
  activeIndex: number;
  totalProjects: number;
}

const ProjectCard = ({
  project,
  index,
  scrollProgress: _scrollProgress,
  isActive,
  activeIndex: _activeIndex,
  totalProjects: _totalProjects,
}: ProjectCardProps) => {
  // Vereinfachte Logik: Alle Projekte sind immer sichtbar, nur leichte Animationen
  // Leichte Hover/Active Animation
  const scale = isActive ? 1.02 : 1;

  return (
    <motion.div
      data-project-index={index}
      className="w-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{
        scale,
      }}
    >
        <div
          className="glass rounded-2xl overflow-hidden flex flex-col bg-slate-800/90 backdrop-blur-xl border border-white/10 shadow-2xl"
          style={{ pointerEvents: 'auto', minHeight: '600px' }}
        >
          {/* Projekt Bild/Preview */}
          <div className="w-full h-64 bg-gradient-to-br from-primary-500/20 to-purple-500/20 relative overflow-hidden">
            {project.imageUrl ? (
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <FaGlobe size={48} className="text-primary-400/50" />
              </div>
            )}
          </div>

          {/* Projekt Content */}
          <div className="p-4 sm:p-6 md:p-8 flex-grow flex flex-col overflow-hidden" style={{ pointerEvents: 'auto' }}>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 break-words">
              {project.title}
            </h3>
            <p className="text-sm sm:text-base text-white/80 mb-4 leading-relaxed break-words">
              {project.description}
            </p>

            {project.longDescription && (
              <p className="text-xs sm:text-sm text-white/70 mb-6 leading-relaxed line-clamp-2 break-words">
                {project.longDescription}
              </p>
            )}

            {/* Technologien */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-white/90 mb-3 uppercase tracking-wide">
                Technologien
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-primary-500/20 text-primary-300 rounded-full text-xs border border-primary-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Vorteile */}
            {project.benefits && project.benefits.length > 0 && (
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white/90 mb-3 uppercase tracking-wide">
                  Vorteile für Kunden
                </h4>
                <ul className="space-y-2">
                  {project.benefits.slice(0, 3).map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-white/70 text-sm">
                      <FaCheckCircle className="text-primary-400 mt-0.5 flex-shrink-0" size={14} />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Link Button */}
            {project.link && (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 px-6 py-3 bg-primary-500/20 hover:bg-primary-500/30 text-primary-300 rounded-lg text-sm font-semibold border border-primary-500/30 transition-colors w-fit"
                style={{ pointerEvents: 'auto' }}
                whileHover={{ scale: 1.05, x: 2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGlobe size={14} />
                Website besuchen
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
  );
};
