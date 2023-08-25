import React from "react";
import gif from "../images/Developer.png";
//import bg from "../images/Artificial.png";
//import SvgComponent from "../components/SvgComponent";
//import {useRef} from "react";
//import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const Home = () => {
  const contact = ()=>{
    const element = document.getElementById("contact");
    if(element)
    {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <div className=" text-white xl:h-full xl:grid xl:grid-cols-2 flex flex-col-reverse">
      <div className="flex flex-col justify-center items-center xl:text-start text-center ">
        <div className="xl:mt-0 mt-20" >
          <h1 className="xl:text-6xl text-4xl mb-6">Hamza Chadili</h1>
          <h1 className="xl:text-5xl text-3xl mb-4 text-zinc-900 font-semibold">
            I'M A DEVELOPER
          </h1>
          <p className="xl:w-[400px] w-[350px] opacity-80 text-xl">
            Create and design full website , Android applications, as well as
            editing photos and videos.
          </p>
          <button onClick={contact} className="ab xl:h-16 xl:w-40 h-12 w-36 mt-10 rounded-xl shadow-lg  hover:bg-slate-800 bg-slate-900 transition duration-300">
            <a href="#contact">Contact Me</a>
          </button>
        </div>
      </div>

      <div className="flex flex-col xl:h-[95%]  mt-10 rounded-tl-full rounded-b-full  justify-center items-center bg-opacity-100 ">
        <img className="xl:w-[650px] w-[320px] rounded-full  bg-white shadow-xl" src={gif} alt="" />
      </div>
    </div>
  );
};

export default Home;
