import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CursorTracker } from '../components/CursorTracker';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Projects } from '../components/Projects';
import { Skills } from '../components/Skills';
import { Education } from '../components/Education';
import { Techstack } from '../components/Techstack';
import { ASAISGroupReference } from '../components/ASAISGroupReference';
import { Footer } from '../components/Footer';
import { LoadingScreen } from '../components/LoadingScreen';

export const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // Stelle Scroll-Position wieder her, wenn von Blog-Post zurückgekehrt
  useEffect(() => {
    if (!isLoading && location.pathname === '/') {
      const savedScrollPosition = sessionStorage.getItem('projectsScrollPosition');
      if (savedScrollPosition) {
        // Warte kurz, damit die Seite geladen ist
        setTimeout(() => {
          window.scrollTo({
            top: parseInt(savedScrollPosition, 10),
            behavior: 'smooth'
          });
          // Entferne gespeicherte Position nach Wiederherstellung
          sessionStorage.removeItem('projectsScrollPosition');
        }, 100);
      }
    }
  }, [isLoading, location.pathname]);

  return (
    <div className="App">
      <CursorTracker />
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <>
          <Header />
          <main>
            <Hero />
            <Projects />
            <Skills />
            <Education />
            <ASAISGroupReference />
            <Techstack />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};


