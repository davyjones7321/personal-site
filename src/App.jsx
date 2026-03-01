import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0 60px' }}>
          <a href="/Resume.docx" download="Abdul_Khader_Resume.docx" className="cv-btn-projects">
            Here is my CV
          </a>
        </div>
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
