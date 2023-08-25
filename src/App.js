
import "./App.css";
import About from "./pages/About";
import Home from "./pages/Home";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Skills from "./pages/Skills";
import Desing from "./components/Desing";
import Floating from "./components/Floating";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App ">
      <Floating />
      <Parallax
        pages={5}
        className="bg-gradient-to-bl from-purple-600 to-indigo-900  scrollbar-hide"
      >
        <Desing />
        <ParallaxLayer speed={1} factor={0.9}>
          <Home />
        </ParallaxLayer>
        <ParallaxLayer speed={0.1} offset={1}>
          <About />
        </ParallaxLayer>
        <ParallaxLayer speed={0.2} offset={2}>
          <Skills />
        </ParallaxLayer>
        <ParallaxLayer speed={0.2} offset={3}>
          <Projects />
        </ParallaxLayer>
        <ParallaxLayer speed={0.2} offset={4}>
          <Contact />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
