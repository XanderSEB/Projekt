import { useState } from 'react';
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


