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
        about="After completing my Diploma in Electrical & Electronics Engineering, I transitioned into software development as a self-taught MERN Stack Developer. I've built and deployed URBANIQ, a full-stack eCommerce platform with live payments, inventory management, and an admin dashboard, along with smaller frontend projects on GitHub. I'm now looking for opportunities with product companies and startups across Kerala."
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