import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ASAISGroupPage } from './pages/ASAISGroupPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { SkillsetPage } from './pages/SkillsetPage';
import { ImpressumPage } from './pages/ImpressumPage';
import { DatenschutzPage } from './pages/DatenschutzPage';
import { ScrollToTop } from './components/ScrollToTop';
import { CookieBanner } from './components/CookieBanner';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <CookieBanner />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/asais-group" element={<ASAISGroupPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/skillset" element={<SkillsetPage />} />
          <Route path="/impressum" element={<ImpressumPage />} />
          <Route path="/datenschutz" element={<DatenschutzPage />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
