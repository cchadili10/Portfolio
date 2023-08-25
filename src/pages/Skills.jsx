import React from 'react'
import por from "../images/skills/skills2.png";
import des from "../images/skills/skills1.png";
import tec from "../images/skills/skills3.png";


const Skills = () => {
  return (
    <div
      id="skills"
      className="flex h-full flex-col justify-center xl:py-16 items-center  xl:mt-0  mt-28"
    >
      <h1 className="text-white text-6xl font-thin mb-16 ">Skills</h1>
      <section className="flex xl:flex-row flex-col justify-center">
        <div className="card">
          <div className="h-20 w-full flex justify-center">
            <img className="h-full  mt-[-40px]" src={por} alt="" />
          </div>
          <h1 className="text-3xl font-semiboldtext-zinc-900 text-center mt-[-8px] mb-10">
            Professional
          </h1>
          <ul className="list-s">
            <li>Communication</li>
            <li>Problem-solving</li>
            <li>Teamwork</li>
            <li>Leadership</li>
            <li>Creativity</li>
            <li>Flexibility</li>
          </ul>
        </div>
        <div className="card xl:mx-12 xl:my-0 my-14">
          <div className="h-20 w-full flex justify-center">
            <img className="h-full  mt-[-40px]" src={des} alt="" />
          </div>
          <h1 className="text-3xl font-semibold  text-center mt-[-8px] mb-10">
            Technical
          </h1>
          <ul className="list-s">
            <li>JavaScript(jQuery-React)</li>
            <li>Node js(Express)</li>
            <li>PHP(Laravel)</li>
            <li>Python</li>
            <li>flutter</li>
            <li>SQL(MySQL-SQl Server)</li>
            <li>NoSQL(MongoDB)</li>
          </ul>
        </div>
        <div className="card">
          <div className="h-20 w-full flex justify-center">
            <img className="h-full  mt-[-40px]" src={tec} alt="" />
          </div>
          <h1 className="text-3xl font-semibold  text-center mt-[-8px] mb-10">
            Design
          </h1>
          <ul className="list-s">
            <li>HTML - CSS</li>
            <li>Photoshop</li>
            <li>Illustrator</li>
            <li>UX/UI design</li>
            <li>After Effects</li>
            <li>Adobe Premiere Pro</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Skills