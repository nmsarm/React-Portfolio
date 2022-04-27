import './App.scss';

// Components
import NavBar from './components/NavBar';
import Home from './pages/Home';
import LatestWork from './pages/LatestWork';
import AboutMe from './pages/AboutMe';
import AboutSkills from './pages/AboutSkills';
import Projects from './pages/Projects';
import OtherProjects from './pages/OtherProjects';
import Contact from './pages/Contact';
import Footer from './components/Footer';

import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <div className="App">
      <NavBar />
     <main> 
       <section className="home-section" id="home">
        <Home />
       </section>
       <section className="latestwork-section anchor" id="latest-work">
        <LatestWork/>
       </section>
       <section className="about-section anchor" id="about">
        <AboutMe />
        <AboutSkills />
       </section>
       <section className="works-section anchor" id="works">
        <Projects/>
        <OtherProjects />
       </section>
       <section className="contact-section anchor" id="contact">
        <Contact />
       </section>
     </main>
     <Footer />
     <ScrollToTop 
        smooth
      />
    </div>
  );
}

export default App;
