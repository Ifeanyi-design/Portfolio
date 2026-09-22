import Header from './components/Header';
import Hero from './components/Hero';
import WorkSection from './components/WorkSection';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Leadership from './components/Leadership';
import Recognition from './components/Recognition';
import Focus from './components/Focus';
import Services from './components/Services';
import Process from './components/Process';
import About from './components/About';
import Opportunity from './components/Opportunity';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * One-page flow, restructured for recruiters and placement coordinators:
 *
 *   identity → proof (work) → capability (skills) → experience → education →
 *   team work → recognition → current focus → services (secondary) →
 *   how a project runs → the person → availability → contact.
 *
 * The freelance offer still exists, but it now sits *after* the professional
 * credibility. The two scrolling technology marquees that used to repeat the
 * same list twice are gone — that content lives in the grouped Skills section.
 */
export default function App() {
  return (
    <div className="bg-surface min-h-screen">
      <Header />
      <main>
        <Hero />
        <WorkSection />
        <Skills />
        <Experience />
        <Education />
        <Leadership />
        <Recognition />
        <Focus />
        <Services />
        <Process />
        <About />
        <Opportunity />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
