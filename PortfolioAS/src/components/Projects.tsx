import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import { FaYoutube, FaCircle, FaBlog, FaMobileAlt, FaGlobe, FaChevronDown } from 'react-icons/fa';

interface TabProps {
  project: typeof projects[0];
  index: number;
  scrollProgress: number;
  isActive: boolean;
  activeIndex: number;
  totalTabs: number;
}

// Helper function to get project icon - alle sind jetzt Blog-Beiträge
const getProjectIcon = (project: typeof projects[0]) => {
  // Alle Projekte sind Blog-Beiträge, aber wir können das Icon basierend auf verfügbaren Links variieren
  let iconConfig = { icon: FaBlog, color: 'bg-purple-600', size: 40 };
  
  // Wenn YouTube-Link vorhanden, zeige YouTube-Icon
  if (project.youtubeUrl && !project.websiteUrl && !project.appUrl) {
    iconConfig = { icon: FaYoutube, color: 'bg-red-600', size: 40 };
  }
  // Wenn App-Link vorhanden (ohne YouTube), zeige App-Icon
  else if (project.appUrl && !project.youtubeUrl) {
    iconConfig = { icon: FaMobileAlt, color: 'bg-green-600', size: 40 };
  }
  // Wenn Website-Link vorhanden (ohne YouTube/App), zeige Website-Icon
  else if (project.websiteUrl && !project.youtubeUrl && !project.appUrl) {
    iconConfig = { icon: FaGlobe, color: 'bg-blue-600', size: 40 };
  }
  // Standard: Blog-Icon
  else {
    iconConfig = { icon: FaBlog, color: 'bg-purple-600', size: 40 };
  }

  const Icon = iconConfig.icon;

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        className={`w-20 h-20 ${iconConfig.color} rounded-full flex items-center justify-center shadow-lg`}
        whileHover={{ scale: 1.1 }}
      >
        <Icon size={iconConfig.size} className="text-white" />
      </motion.div>
    </div>
  );
};

// Helper function to get action buttons based on project type
const getActionButtons = (project: typeof projects[0]) => {
  const buttons = [];

  if (project.youtubeUrl) {
    buttons.push(
      <motion.a
        key="youtube"
        href={project.youtubeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 bg-red-600/20 hover:bg-red-600/30 text-red-300 rounded-lg text-xs border border-red-500/30 transition-colors"
        style={{ pointerEvents: 'auto' }}
        whileHover={{ scale: 1.05, x: 2 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaYoutube size={12} />
        YouTube
      </motion.a>
    );
  }

  if (project.blogUrl) {
    // Speichere Scroll-Position vor Navigation
    const handleBlogClick = (e: React.MouseEvent) => {
      // Speichere die aktuelle Scroll-Position
      const scrollPosition = window.scrollY;
      sessionStorage.setItem('projectsScrollPosition', scrollPosition.toString());
      
      // Öffne in neuem Tab
      window.open(project.blogUrl, '_blank');
      e.preventDefault();
    };

    buttons.push(
      <motion.a
        key="blog"
        href={project.blogUrl}
        onClick={handleBlogClick}
        className="flex items-center gap-2 px-4 py-2 bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 rounded-lg text-xs border border-purple-500/30 transition-colors cursor-pointer"
        style={{ pointerEvents: 'auto' }}
        whileHover={{ scale: 1.05, x: 2 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaBlog size={12} />
        Blog lesen
      </motion.a>
    );
  }

  if (project.appUrl) {
    buttons.push(
      <motion.a
        key="app"
        href={project.appUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 bg-green-600/20 hover:bg-green-600/30 text-green-300 rounded-lg text-xs border border-green-500/30 transition-colors"
        style={{ pointerEvents: 'auto' }}
        whileHover={{ scale: 1.05, x: 2 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaMobileAlt size={12} />
        App öffnen
      </motion.a>
    );
  }

  if (project.websiteUrl) {
    buttons.push(
      <motion.a
        key="website"
        href={project.websiteUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 rounded-lg text-xs border border-blue-500/30 transition-colors"
        style={{ pointerEvents: 'auto' }}
        whileHover={{ scale: 1.05, x: 2 }}
        whileTap={{ scale: 0.95 }}
      >
        <FaGlobe size={12} />
        Website
      </motion.a>
    );
  }

  return buttons.length > 0 ? buttons : null;
};

const Tab = ({ project, index, scrollProgress, isActive: _isActive, activeIndex, totalTabs }: TabProps) => {
  // Smooth Easing Function (ease-in-out cubic)
  const smoothEase = (t: number) => {
    return t < 0.5 
      ? 4 * t * t * t 
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };
  
  // Berechne slideProgress außerhalb, damit wir es für pointer-events verwenden können
  const slideInStart = index * (1.5 / totalTabs); // 1.5x länger für mehr Abstand
  const slideInEnd = slideInStart + (0.8 / totalTabs); // 80% des Bereichs zum Einsliden
  const slideProgress = Math.max(0, Math.min(1, (scrollProgress - slideInStart) / (slideInEnd - slideInStart)));
  
  const getTabTransform = () => {
    
    // X-Position: Startet von links außerhalb und slidet hinein, dann zentriert
    // Verwende smooth ease für sehr flüssiges slide-in
    const easedSlideProgress = smoothEase(slideProgress);
    const baseX = -1200 + (easedSlideProgress * 1200); // -1200px → 0px
    const x = Math.max(0, baseX); // Nach dem Einsliden bei 0 bleiben (zentriert)
    
    // Glatte Interpolation für aktiven Index (vermeidet Sprünge)
    // Angepasst für längere Abstände (1.5x)
    const smoothActiveIndex = activeIndex + (scrollProgress * totalTabs / 1.5 - activeIndex) * 0.1;
    const relativePosition = index - smoothActiveIndex;
    
    if (Math.abs(relativePosition) < 0.5) {
      // Aktiver Tab: zentriert, deutlich größer skaliert
      const activeProgress = Math.max(0, Math.min(1, 1 - Math.abs(relativePosition) * 2));
      const scale = 0.85 + (activeProgress * 0.20); // 0.85 → 1.05 (deutlich größer)
      const y = relativePosition * 80; // Mehr Abstand vertikal
      const rotation = relativePosition * 2; // -2° → 0° → 2°
      const zIndex = 100 + Math.floor(activeProgress * 50);
      
      // Nur sichtbar, wenn der Tab bereits eingeschliden ist
      const opacity = slideProgress > 0.1 ? 1 : 0;
      
      return {
        x,
        y,
        scale,
        rotate: rotation,
        zIndex,
        opacity,
      };
    } else {
      // Alle inaktiven Tabs: komplett unsichtbar
      const offset = Math.abs(relativePosition);
      const y = relativePosition < 0 ? -80 - (offset * 30) : 80 + (offset * 30);
      const rotation = relativePosition < 0 ? -2 - (offset * 0.5) : 2 + (offset * 0.5);
      const scale = 0.70 - (offset * 0.10);
      
      return {
        x,
        y,
        scale,
        rotate: rotation,
        zIndex: 50 - Math.floor(offset * 10),
        opacity: 0, // Komplett unsichtbar
      };
    }
  };

  const transform = getTabTransform();

  // Verwende useMotionValue und useSpring für ultra-smooth Animationen
  const springConfig = { 
    stiffness: 50,  // Niedriger für smoothere Bewegung
    damping: 30,    // Höher für weniger Wackeln
    mass: 1.2       // Etwas höher für trägere, flüssigere Bewegung
  };

  const xMotion = useMotionValue(transform.x);
  const yMotion = useMotionValue(transform.y);
  const scaleMotion = useMotionValue(transform.scale);
  const rotateMotion = useMotionValue(transform.rotate);
  const opacityMotion = useMotionValue(transform.opacity);

  const x = useSpring(xMotion, springConfig);
  const y = useSpring(yMotion, springConfig);
  const scale = useSpring(scaleMotion, springConfig);
  const rotate = useSpring(rotateMotion, springConfig);
  const opacity = useSpring(opacityMotion, springConfig);

  // Update MotionValues wenn transform sich ändert
  useEffect(() => {
    xMotion.set(transform.x);
    yMotion.set(transform.y);
    scaleMotion.set(transform.scale);
    rotateMotion.set(transform.rotate);
    opacityMotion.set(transform.opacity);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transform.x, transform.y, transform.scale, transform.rotate, transform.opacity]);

  // Bestimme pointer-events basierend auf aktivem Status und slideProgress
  // Nur der aktive Tab sollte klickbar sein
  const isTabActive = Math.abs(index - activeIndex) < 0.5 && slideProgress > 0.1;
  const pointerEvents = isTabActive ? 'auto' : 'none';

  return (
    <div 
      className="absolute left-1/2 -translate-x-1/2 w-full max-w-7xl"
      style={{ pointerEvents }}
    >
      <motion.div
        className="w-full"
        style={{
          x,
          y,
          scale,
          rotate,
          opacity,
          zIndex: transform.zIndex,
          pointerEvents,
        }}
      transition={{
        type: 'spring',
        stiffness: 50,
        damping: 30,
        mass: 1.2,
      }}
    >
      {/* macOS Browser Tab Design */}
      <div 
        className="rounded-t-2xl overflow-hidden border border-white/30 shadow-[0_14px_40px_rgba(0,0,0,0.5)]"
        style={{
          background: 'rgb(2, 6, 23)', // Sehr dunkle, vollständig undurchsichtige Hintergrundfarbe
        }}
      >
        {/* Top Bar - macOS Style */}
        <div className="px-4 py-3 flex items-center gap-3 border-b border-white/20" style={{ background: 'rgb(15, 23, 42)' }}>
          {/* Traffic Lights */}
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-inner" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-inner" />
            <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-inner" />
          </div>
          
          {/* Tab Bar */}
          <div className="flex-1 flex items-center gap-2 px-4 py-1.5 rounded-lg border border-white/20" style={{ background: 'rgb(2, 6, 23)' }}>
            {/* Favicon */}
            <div className="w-4 h-4 rounded bg-primary-500/50 flex items-center justify-center">
              <FaCircle className="text-primary-400 text-xs" />
            </div>
            
            {/* Title */}
            <span className="text-white/90 text-sm font-medium truncate flex-1">
              {project.title}
            </span>
            
            {/* Close Button */}
            <div className="w-3 h-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer" />
          </div>
        </div>

        {/* Content Preview */}
        <div className="p-6" style={{ background: 'rgb(2, 6, 23)', pointerEvents: 'auto' }}>
          {/* Project Image/Preview */}
          <div className="w-full h-48 md:h-56 bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-xl mb-4 flex items-center justify-center overflow-hidden relative group">
            {project.imageUrl ? (
              <img 
                src={project.imageUrl.startsWith('http') ? project.imageUrl : project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            ) : (
              getProjectIcon(project)
            )}
          </div>

          {/* Description */}
          <div className="mb-4">
            <p className="text-white/70 mb-2 text-sm md:text-base leading-relaxed line-clamp-2">
              {project.description}
            </p>
            {project.longDescription && (
              <p className="text-white/60 text-xs leading-relaxed line-clamp-2">
                {project.longDescription}
              </p>
            )}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-xs border border-primary-500/30"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-2 mb-4" style={{ pointerEvents: 'auto' }}>
            {getActionButtons(project)}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between text-xs text-white/50 pt-3 border-t border-white/10">
            <span>{new Date(project.date).toLocaleDateString('de-DE')}</span>
            {project.featured && (
              <span className="px-2 py-1 bg-primary-500/30 text-primary-300 rounded text-xs">
                Featured
              </span>
            )}
          </div>
        </div>
      </div>
      </motion.div>
    </div>
  );
};

export const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const smoothProgressRef = useRef(0);
  const [showScrollHint, setShowScrollHint] = useState(false);
  const inactivityTimerRef = useRef<NodeJS.Timeout | null>(null);
  const lastScrollTimeRef = useRef<number>(Date.now());

  // Scroll Progress Tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Transform scroll progress to 0-1 range for tab animation
  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Dynamische Hintergrundfarben basierend auf Scroll-Progress
  const [bgColor, setBgColor] = useState('rgb(15, 23, 42)');
  const [accentColor, setAccentColor] = useState('rgba(14, 165, 233, 0.1)');

  // Dunklere Farbpaletten für dynamische Änderung - ineinander vermischt
  const colorPalette = [
    { bg: 'rgb(2, 6, 23)', accent: 'rgba(14, 165, 233, 0.08)' }, // sehr dunkel + primary (dunkel)
    { bg: 'rgb(8, 15, 30)', accent: 'rgba(139, 92, 246, 0.08)' }, // dunkel + purple (dunkel)
    { bg: 'rgb(15, 23, 42)', accent: 'rgba(236, 72, 153, 0.08)' }, // slate-900 + pink (dunkel)
    { bg: 'rgb(8, 20, 30)', accent: 'rgba(34, 197, 94, 0.08)' }, // dunkel + green (dunkel)
    { bg: 'rgb(12, 10, 25)', accent: 'rgba(168, 85, 247, 0.08)' }, // dunkel + violet (dunkel)
    { bg: 'rgb(2, 6, 23)', accent: 'rgba(14, 165, 233, 0.08)' }, // zurück zu sehr dunkel + primary
  ];

  useEffect(() => {
    const unsubscribe = progress.on('change', (latest) => {
      // Smoothing für flüssigere Übergänge (Lerp)
      smoothProgressRef.current += (latest - smoothProgressRef.current) * 0.15;
      setScrollProgress(smoothProgressRef.current);
      
      // Berechne aktiven Tab basierend auf Scroll-Progress
      // Angepasst für längere Abstände - jeder Tab hat jetzt 1.5x mehr Raum
      const newActiveIndex = Math.min(
        Math.floor(smoothProgressRef.current * projects.length / 1.5),
        projects.length - 1
      );
      setActiveIndex(newActiveIndex);

      // Dynamische Hintergrundfarben basierend auf Progress
      const totalColors = colorPalette.length - 1;
      const colorProgress = smoothProgressRef.current * totalColors;
      const colorIndex = Math.floor(colorProgress);
      const nextColorIndex = Math.min(colorIndex + 1, totalColors);
      const blendFactor = colorProgress - colorIndex;
      
      // Interpoliere zwischen Farben für smooth Übergang
      const currentColor = colorPalette[colorIndex];
      const nextColor = colorPalette[nextColorIndex];
      
      // Smooth RGB Interpolation mit Easing für besseres Blending
      const interpolateColor = (color1: string, color2: string, factor: number) => {
        // Easing-Funktion für smooth Übergang (ease-in-out)
        const easedFactor = factor < 0.5 
          ? 2 * factor * factor 
          : 1 - Math.pow(-2 * factor + 2, 2) / 2;
        
        const rgb1 = color1.match(/\d+/g)?.map(Number) || [0, 0, 0];
        const rgb2 = color2.match(/\d+/g)?.map(Number) || [0, 0, 0];
        const r = Math.round(rgb1[0] + (rgb2[0] - rgb1[0]) * easedFactor);
        const g = Math.round(rgb1[1] + (rgb2[1] - rgb1[1]) * easedFactor);
        const b = Math.round(rgb1[2] + (rgb2[2] - rgb1[2]) * easedFactor);
        return `rgb(${r}, ${g}, ${b})`;
      };
      
      // Smooth RGBA Interpolation für Accent mit Easing
      const interpolateAccent = (color1: string, color2: string, factor: number) => {
        // Easing-Funktion für smooth Übergang
        const easedFactor = factor < 0.5 
          ? 2 * factor * factor 
          : 1 - Math.pow(-2 * factor + 2, 2) / 2;
        
        const rgba1 = color1.match(/[\d.]+/g)?.map(Number) || [0, 0, 0, 0];
        const rgba2 = color2.match(/[\d.]+/g)?.map(Number) || [0, 0, 0, 0];
        const r = Math.round(rgba1[0] + (rgba2[0] - rgba1[0]) * easedFactor);
        const g = Math.round(rgba1[1] + (rgba2[1] - rgba1[1]) * easedFactor);
        const b = Math.round(rgba1[2] + (rgba2[2] - rgba1[2]) * easedFactor);
        const a = rgba1[3] + (rgba2[3] - rgba1[3]) * easedFactor;
        return `rgba(${r}, ${g}, ${b}, ${a.toFixed(3)})`;
      };
      
      setBgColor(interpolateColor(currentColor.bg, nextColor.bg, blendFactor));
      setAccentColor(interpolateAccent(currentColor.accent, nextColor.accent, blendFactor));
    });

    return () => unsubscribe();
  }, [progress]);

  // Scroll-Hint: Erscheint nach 5 Sekunden Inaktivität
  useEffect(() => {
    const checkInactivity = () => {
      const now = Date.now();
      const timeSinceLastScroll = now - lastScrollTimeRef.current;
      
      if (timeSinceLastScroll >= 5000) {
        setShowScrollHint(true);
      } else {
        setShowScrollHint(false);
        // Setze Timer neu
        if (inactivityTimerRef.current) {
          clearTimeout(inactivityTimerRef.current);
        }
        inactivityTimerRef.current = setTimeout(() => {
          setShowScrollHint(true);
        }, 5000);
      }
    };

    const handleScroll = () => {
      lastScrollTimeRef.current = Date.now();
      setShowScrollHint(false);
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current);
      }
      inactivityTimerRef.current = setTimeout(() => {
        setShowScrollHint(true);
      }, 5000);
    };

    const handleTouch = () => {
      lastScrollTimeRef.current = Date.now();
      setShowScrollHint(false);
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current);
      }
      inactivityTimerRef.current = setTimeout(() => {
        setShowScrollHint(true);
      }, 5000);
    };

    // Initialer Timer
    inactivityTimerRef.current = setTimeout(() => {
      setShowScrollHint(true);
    }, 5000);

    // Event Listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('touchstart', handleTouch, { passive: true });
    window.addEventListener('touchmove', handleTouch, { passive: true });
    window.addEventListener('wheel', handleScroll, { passive: true });

    return () => {
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchstart', handleTouch);
      window.removeEventListener('touchmove', handleTouch);
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <section 
      id="projects" 
      className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900"
    >
      {/* Scroll Container für Animation - erhöhte Scrollgeschwindigkeit */}
      <div 
        ref={containerRef}
        className="relative"
        style={{ height: `${projects.length * 200}vh` }}
      >
        {/* Background with texture - sticky */}
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Dynamischer Hintergrund - smooth blending */}
          <motion.div 
            className="absolute inset-0 transition-colors duration-700 ease-in-out"
            style={{
              backgroundColor: bgColor,
            }}
          />
          <motion.div 
            className="absolute inset-0 transition-all duration-700 ease-in-out"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${accentColor} 0%, ${accentColor} 30%, transparent 70%)`,
              opacity: 0.5,
            }}
          />
          {/* Zusätzliche Gradient-Overlays für besseres Blending */}
          <motion.div 
            className="absolute inset-0 transition-all duration-700 ease-in-out"
            style={{
              background: `linear-gradient(135deg, ${accentColor} 0%, transparent 50%, ${accentColor} 100%)`,
              opacity: 0.3,
            }}
          />
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          <div className="container mx-auto px-6 relative z-10 h-full flex flex-col">
            {/* Header - kompakter */}
            <motion.div
              className="text-center pt-16 pb-4"
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-2">
                <span className="gradient-text">Meine</span>{' '}
                <span className="text-white">Projekte</span>
              </h2>
              <p className="text-lg text-white/70 max-w-2xl mx-auto">
                Eine Auswahl meiner besten Projekte und Arbeiten
              </p>
              <p className="text-xs text-white/50 mt-2">
                Scrollen Sie, um durch die Projekte zu navigieren
              </p>
            </motion.div>

            {/* Tab Stack Container - angepasste Höhe für Bildschirm */}
            <div className="relative flex-1 flex items-center justify-center py-4">
              <div className="relative w-full max-w-7xl h-[600px] md:h-[700px] lg:h-[750px] mx-auto flex items-center justify-center">
                <div className="relative w-full h-full">
                  {projects.map((project, index) => (
                    <Tab
                      key={project.id}
                      project={project}
                      index={index}
                      scrollProgress={scrollProgress}
                      isActive={index === activeIndex}
                      activeIndex={activeIndex}
                      totalTabs={projects.length}
                    />
                  ))}
                </div>
              </div>

              {/* Scroll Hint Symbol */}
              <AnimatePresence>
                {showScrollHint && (
                  <motion.div
                    className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      className="flex flex-col items-center gap-3 text-white/60"
                      animate={{ y: [0, 10, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <div className="text-sm font-medium mb-1">Weiter scrollen</div>
                      <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <FaChevronDown size={24} className="text-primary-400" />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Scroll Indicator */}
            <motion.div
              className="pb-8 flex justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <motion.div
                  className="w-32 h-1 bg-white/10 rounded-full overflow-hidden"
                  initial={{ opacity: 0.5 }}
                >
                  <motion.div
                    className="h-full bg-primary-500 rounded-full"
                    style={{ width: `${scrollProgress * 100}%` }}
                  />
                </motion.div>
                <span>{Math.round(scrollProgress * 100)}%</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
