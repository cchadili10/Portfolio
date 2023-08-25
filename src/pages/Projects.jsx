import React from 'react'
import chat from "../images/project/chat.png";
import time from "../images/project/time.png";
import stor from "../images/project/store.png";
import khyati from "../images/project/khyati.png";

const Projects = () => {
  return (
    <div className="h-full w-full flex items-center justify-center xl:mt-0">
      <div className="flex flex-col xl:w-[1300px] h-[800px] items-center justify-center">
        <h1 className=" text-white text-6xl font-thin xl:mb-20 mb-5">Projects</h1>
        <section className="grid xl:grid-cols-2 content-center justify-items-center">
          <div className="box overflow-hidden">
            <a
              href="https://github.com/cchadili10/Chat_App"
              className="flex text-white w-full overflow-hidden"
            >
              <img
                className="h-full scale-150 ml-[-2px]"
                src={chat}
                alt=""
              />
              <div className="w-full ">
                <h1 className="text-center text-2xl my-5">Chat Website</h1>
                <p className="textpro">
                  allows you to communicate with frends in web chat. It enables
                  you to send and receive messages.
                </p>
              </div>
            </a>
          </div>

          <div className="box overflow-hidden">
            <a
              href="https://github.com/cchadili10/time_App"
              className="flex text-white w-full overflow-hidden"
            >
              <img className="h-full scale-125 ml-[-2px]" src={time} alt="" />
              <div className="w-full">
                <h1 className="text-center text-2xl my-5">Time App</h1>
                <p className="textpro">
                  time_app app show you time in different countries
                </p>
              </div>
            </a>
          </div>

          <div className="box overflow-hidden">
            <a
              href="https://github.com/cchadili10/eCommerce_Website"
              className="flex text-white w-full overflow-hidden"
            >
              <img className="h-full scale-125" src={stor} alt="" />
              <div className="w-full">
                <h1 className="text-center text-2xl my-5">eCommerce <span className='xl:block hidden'>Website</span></h1>
                <p className="textpro">
                  is an online store where you can buy or sell shoes product
                  online.
                </p>
              </div>
            </a>
          </div>
          <div className="box overflow-hidden">
            <a
              href="https://github.com/cchadili10/khyati_app"
              className="flex text-white w-full overflow-hidden"
            >
              <img className="h-full scale-125" src={khyati} alt="" />
              <div className="w-full">
                <h1 className="text-center text-2xl my-5">Khyati App</h1>
                <p className="textpro">
                  khyati_app is app helps Tailor to save customer sizes
                </p>
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Projects