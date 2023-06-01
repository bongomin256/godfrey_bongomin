import React from "react";
// import Logo from "../logo/Logo";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiUpwork } from "react-icons/si";

const Footer = () => {
  return (
    <section className="px-5 py-20 border-t-2 border-pink-main text-center mt-28 md:px-12 lg:px-20">
      <div className="mb-8 md:flex md:justify-between ">
        <div className="mb-8 md:text-start">
          <h3 className="text-2xl text-white mb-2">Godfrey (Bongo) Bongomin</h3>
          <p className="text-pink-main italic capitalize">
            front-end / web developer
          </p>
        </div>
        <div className="flex  justify-center gap-10 text-4xl text-pink-main lg:">
          <BsGithub />
          <BsLinkedin />
          <SiUpwork />
        </div>
      </div>
      <p className="text-white  text-md"> &copy;2023. Made by Bongo</p>
    </section>
  );
};

export default Footer;
