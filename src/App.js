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
        color="green"
        viewBox="0 0 32 32"
        svgPath="M17.504 26.025l.001-14.287 6.366 6.367L26 15.979 15.997 5.975 6 15.971 8.129 18.1l6.366-6.368v14.291z"
      />
    </div>
  );
}

export default App;
