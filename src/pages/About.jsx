import React from 'react'
import img from '../images/Problem1.png'

const About = () => {
  return (
    <div className="h-full flex justify-center  mt-[-120px] xl:text-zinc-950 text-white ">
      <div className="xl:w-[1200px] xl:h-[70%] h-full w-full rounded-3xl bg-opacity-100 xl:shadow-2xl xl:bg-white xl:grid xl:grid-cols-2 flex flex-col ">
        <div className="flex w-full justify-center items-center  xl:border-r-2">
          <img
            className="xl:scale-150 xl:h-full h-[400px] xl:translate-x-[-10px]"
            src={img}
            alt=""
          />
        </div>

        <div className=" items-center flex flex-col justify-around z-50 ">
          <div>
            <h1 className="text-4xl font-thin text-center">About Me</h1>
          </div>

          <p className="text-2xl xl:w-[560px] w-[300px] xl:mt-0 mt-20 xl:text-start text-center font-light">
            I am a talented , ambitious and hardworking individual , with broad
            skills Create and design full website , Android apps , also editing
            videos .
          </p>
          <p className="text-2xl xl:w-[560px]  w-[320px] xl:text-start text-center mt-10  xl:mt-[-60px] font-light">
            Furthermore , I am adept at handling multiple tasks on a daily basis
            Competently and at working well under pressure .
          </p>
        </div>
      </div>
    </div>
  );
}

export default About