import Header from './components/Header';
import Hero from './components/Hero';
import MarqueeBanner from './components/MarqueeBanner';
import WorkSection from './components/WorkSection';
import Services from './components/Services';
import Process from './components/Process';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

// One-page flow: trust (hero) → proof (work) → offer (services) → how it works
// (process) → person (about) → action (contact).
export default function App() {
  return (
    <div className="bg-surface min-h-screen">
      <Header />
      <main>
        <Hero />
        <MarqueeBanner />
        <WorkSection />
        <MarqueeBanner />
        <Services />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
