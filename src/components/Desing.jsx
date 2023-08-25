import React from 'react'
import { useCallback } from "react";
import Particles from "react-particles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim";

const Desing = () => {
     const particlesInit = useCallback(async (engine) => {
       console.log(engine);
       // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
       // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
       // starting from v2 you can add only the features you need reducing the bundle size
       //await loadFull(engine);
       await loadSlim(engine);
     }, []);

     const particlesLoaded = useCallback(async (container) => {
       await console.log(container);
     }, []);
  return (
    <div>
      {" "}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            // color: {
            //   value: "#0d47a1",
            // },
          },
          fpsLimit: 100,
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 1,
              },
              repulse: {
                distance: 100,
                duration: 0.5,
              },
            },
          },
          particles: {
            color: {
              value: "#FFFFFF",
            },
            links: {
              color: "#FFFFFF",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 0.5,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 3000,
              },
              value: 70,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "triangle",
            },
            size: {
              value: { min: 1, max: 4},
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}

export default Desing