import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ASAISGroupPage } from './pages/ASAISGroupPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { SkillsetPage } from './pages/SkillsetPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/asais-group" element={<ASAISGroupPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/skillset" element={<SkillsetPage />} />
      </Routes>
    </Router>
  );
}

export default App;
