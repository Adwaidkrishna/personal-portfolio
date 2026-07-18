import Navbar from "./components/Navbar/Navabar";
import Hero from "./components/Hero/Hero"
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Hero
        name="Adwaid Krishna"
        role="Full Stack MERN Developer"
        about=" I build modern, scalable, and responsive web applications using
                MongoDB, Express.js, React.js, and Node.js. Passionate about solving
                real-world problems through clean and efficient code."
      />
      <About />
      <Skills />
      <Projects />
    </>
  )
}

export default App;