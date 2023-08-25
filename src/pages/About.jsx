import React from 'react'
import img from '../images/Problem1.png'

const About = () => {
  return (
    <div className="h-full flex justify-center text-white ">
      <div className="xl:w-[1200px] xl:h-[70%] h-full w-full rounded-3xl bg-opacity-100  xl:grid xl:grid-cols-2 flex flex-col ">
        <div className="flex w-full justify-center items-center  ">
          <img
            className="xl:scale-125 xl:h-full h-[400px] "
            src={img}
            alt=""
          />
        </div>

        <div className=" items-center flex flex-col justify-evenly   xl:bg-zinc-800 xl:shadow-2xl xl:rounded-3xl ">
          <div>
            <h1 className="text-4xl font-thin text-center">About Me</h1>
          </div>

          <p className="xl:text-2xl text-xl xl:w-[500px] w-[350px] xl:mt-0 mt-10 xl:text-start text-center font-light">
            I am a talented , ambitious and hardworking individual , with broad
            skills Create and design full website , Android apps , also editing
            videos .
          </p>
          <p className="xl:text-2xl text-xl xl:w-[500px] z-20  w-[350px] xl:text-start text-center mt-10  xl:mt-[-60px] font-light">
            Furthermore , I am adept at handling multiple tasks on a daily basis
            Competently and at working well under pressure .
          </p>
        </div>
      </div>
    </div>
  );
}

export default About