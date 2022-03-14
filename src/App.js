import './App.css';

import NavBar from './components/NavBar';
import Home from './sections/Home';
import About from './sections/About';
import Works from './sections/Works';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
     <main> 
       <section className="home-section" id="home">
        <Home />
       </section>
       <section className="about-section" id="about">
        <About />
       </section>
       <section className="works-section" id="works">
        <Works />
       </section>
       <section className="contact-section" id="contact">
        <Contact />
       </section>
     </main>
     <Footer />
    </div>
  );
}

export default App;
