import React from 'react'
import { useState } from 'react';
import {
  BsGithub,
  BsLinkedin,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";
import { BiLogoInstagramAlt } from "react-icons/bi";

const Floating = () => {
  const [isTogle, setIsTogle] = useState(false);
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <div>
        {isTogle ? (
          <a href="https://www.instagram.com/hamza_chadili2043/">
            <BiLogoInstagramAlt
              className="btn rounded-full duration-300 scale-125"
              style={{ color: "white", fontSize: "40px" }}
            />
          </a>
        ) : (
          <BiLogoInstagramAlt
            style={{ color: "white", fontSize: "0px" }}
          />
        )}
      </div>
      <div className="mt-5">
        {isTogle ? (
          <a href="https://github.com/cchadili10">
            <BsGithub
              className="btn duration-300"
              style={{ color: "white", fontSize: "40px" }}
            />
          </a>
        ) : (
          ""
        )}
      </div>
      <div className="mt-5">
        {isTogle ? (
          <a href="https://www.linkedin.com/in/hamza-chadili-5509731a6/">
            <BsLinkedin
              className="btn duration300 rounded-2xl"
              style={{ color: "white", fontSize: "40px" }}
            />
          </a>
        ) : (
          ""
        )}
      </div>
      <div
        className="mt-5"
        onClick={() => {
          isTogle === false ? setIsTogle(true) : setIsTogle(false);
        }}
      >
        {isTogle ? (
          <BsFillArrowUpCircleFill
            className="cursor-pointer rotate-180 "
            style={{ color: "white", fontSize: "40px" }}
          />
        ) : (
          <BsFillArrowUpCircleFill
            className="cursor-pointer  animate-bounce"
            style={{ color: "white", fontSize: "40px" }}
          />
        )}
      </div>
    </div>
  );
}

export default Floating