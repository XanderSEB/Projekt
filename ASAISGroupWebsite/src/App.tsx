import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ASAISGroupContent } from './components/ASAISGroupContent';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <ASAISGroupContent />
      </main>
      <Footer />
    </div>
  );
}

export default App;




