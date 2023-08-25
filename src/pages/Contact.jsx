import React, { useRef, useState} from "react";
import emailjs from "@emailjs/browser";
import emailP from "../images/email.svg"
import { GoIssueClosed } from "react-icons/go";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Contact = () => {
  const form = useRef();
  const [message_, SetMessage] = useState("");
  const [is_mes, SetMes] = useState(false);
  const [icon, SetIcon] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    if (/^\w+(\.-?\w+)*@\w+(\.-?\w+)*(\.\w{2,3})+$/.test(email))
    {
          emailjs
            .sendForm(
              "service_hl79fth",
              "template_9gxl16b",
              form.current,
              "_N723zTp2MALZ5zGf"
            )
            .then(
              (result) => {
               SetMes(true);
               SetIcon(false)
               SetMessage("Your message was sent successfully");
               setTimeout(()=>{SetMes(false)},4000);
               form.current.reset();
              },
              (error) => {
                SetMes(true);
                SetIcon(false);
                SetMessage("error message was not sent successfully");
                setTimeout(()=>{SetMes(false)},4000);
               form.current.reset();
              }
            );
    }else{
        SetIcon(true);
        SetMes(true);
        SetMessage("Your message was not sent successfully");
        setTimeout(()=>{SetMes(false)},4000);
        form.current.reset();
    }
    //Your message was sent successfully
  };

  return (
    <div
      id="contact"
      className="xl:h-full h-screen w-full flex flex-col justify-center items-center xl:mt-0"
    >
      {is_mes ? (
        <div className="absolute transition duration-300 ease-in-out xl:w-[500px] w-[350px] rounded-xl flex justify-center items-center h-16 bg-white right-5  top-10 ">
          <h1 className="xl:text-xl font-semibold mr-2">{message_}</h1>
          {icon ? (
            <AiOutlineCloseCircle
              className=""
              style={{ fontSize: "50px", color: "red" }}
            />
          ) : (
            <GoIssueClosed
              className=""
              style={{ fontSize: "50px", color: "green" }}
            />
          )}
        </div>
      ) : (
        <div></div>
      )}

      <form
        className="xl:w-[1200px] xl:h-[700px]  xl:grid xl:grid-cols-2 flex justify-center items-start "
        onSubmit={sendEmail}
        ref={form}
      >
        <div className="xl:block hidden">
          <img className="w-[700px] scale-125" src={emailP} alt="" />
        </div>
        <div className="xl:bg-gradient-to-tl from-zinc-800 to-indigo-900 xl:shadow-2xl xl:h-full xl:w-full w-[360px] h-[500px]  text-white rounded-3xl grid content-start justify-items-center">
          <h1 className="xl:text-4xl text-2xl font-semibold xl:mt-20 mt-5">
            Contact Me
          </h1>
          <div className="flex flex-col xl:mt-10 mt-3">
            <label className="xl:text-2xl mb-2">Name</label>
            <input
              className="formc focus:outline-none focus:shadow-outline"
              type="text"
              name="from_name"
            />
          </div>
          <div className="flex flex-col my-4 ">
            <label className="xl:text-2xl mb-2">Email</label>
            <input
              className="formc focus:outline-none focus:shadow-outline"
              type="email"
              id="email"
              name="from_email"
            />
          </div>
          <div className="flex flex-col">
            <label className="xl:text-2xl mb-2">Message</label>
            <textarea
              className="formc focus:outline-none focus:shadow-outline "
              name="message"
              rows={4}
            />
          </div>
          <button
            type="submit"
            onSubmit={sendEmail}
            className="h-12 w-28 rounded-lg font-semibold text-xl bg-slate-600 mt-10 transition duration-300 ease-in-out hover:bg-opacity-80 hover:scale-105"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact