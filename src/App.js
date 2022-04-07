import './App.css';

// Components
import NavBar from './components/NavBar';
import Home from './pages/Home';
import LatestWork from './pages/LatestWork';
import AboutMe from './pages/AboutMe';
import AboutSkills from './pages/AboutSkills';
import Works from './pages/Works';
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
       <section className="latestwork-section" id="latest-work">
        <LatestWork/>
       </section>
       <section className="about-section" id="about">
        <AboutMe />
        <AboutSkills />
       </section>
       <section className="works-section" id="works">
        <Works />
       </section>
       <section className="contact-section" id="contact">
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
