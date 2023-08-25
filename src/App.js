
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
        <ParallaxLayer speed={0.8}>
          <Home />
        </ParallaxLayer>
        <ParallaxLayer speed={0.5} offset={1}>
          <About />
        </ParallaxLayer>
        <ParallaxLayer speed={1} offset={2}>
          <Skills />
        </ParallaxLayer>
        <ParallaxLayer speed={0.5} offset={3}>
          <Projects />
        </ParallaxLayer>
        <ParallaxLayer speed={1} offset={4}>
          <Contact />
        </ParallaxLayer>
      </Parallax>
      <Desing className="-z-10" />
    </div>
  );
}

export default App;
