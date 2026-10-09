import Navbar from "./components/Navbar/Navabar";
import Hero from "./components/Hero/Hero"
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import LearningJourney from "./components/LearningJourney/LearningJourney";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero
        name="Adwaid Krishna"
        role="Full Stack MERN Developer"
        about="I build full-stack web applications using React, Node.js, Express.js, and MongoDB. My projects include URBANIQ, an e-commerce and inventory management platform, and SupportDesk, a real-time support system. I'm looking for junior full-stack or software developer opportunities in Kerala and across India."
      />
      <About />
      <Skills />
      <LearningJourney />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App;