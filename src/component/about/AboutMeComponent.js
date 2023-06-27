import React from "react";
import myimage from "../../assets/myphoto.jpeg";
import data from "../../data.json";
import PageSection from "../constants/PageSection";

//* Framer Motion Aninamtion
import { motion } from "framer-motion";

const AboutMeComp = () => {
  return (
    <PageSection>
      <div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h2 className="text-white text-xl text-center mb-5">
            <span className="text-pink-main">/</span>About Me
          </h2>
        </motion.div>

        <div className="mt-20">
          {/* !fix md and lg display and change*/}
          <div className="mb-12 md:flex md:gap-5 md:flex-row-reverse  md:items-center md:justify-center lg:gap-8">
            {/* mb-12 md:flex md:gap-5 md:items-center md:justify-center */}
            {/* md:grid md:gap-5 md:grid-cols-2 md:items-center md:justify-center */}
            <motion.div
              className="mb-5 w-full"
              // using motion from framer motion for aninamation
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <img
                className="border-4 rounded-full w-[200px] m-auto border-pink-main md:min-w-[250px] md:rounded-full lg:rounded-lg lg:w-[300px] lg:rotate-3  lg:hover:rotate-0 transition-all duration-300 ease-in-out lg:shadow-lg lg:shadow-white "
                // md:w-full  lg:w-[300px] lg:hover:rotate-3 transition-all duration-300 ease-in-out rounded-md
                src={myimage}
                alt=""
              />
            </motion.div>
            <motion.div
              className="text-center md:text-start"
              // using motion from framer motion for aninamation
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p>Hi there 👋,</p>
              <p className="mb-5">
                My name is Godfrey Bongomin but I grew up being called Bongo, so
                this is my way of telling you that you can call me BONGO!
              </p>
              <p className="mb-5 ">
                I have 8 years of experience working in production, logistics,
                customer service, and management in a multi-cultural setting.
                Having already earned a BBA from a globally accredited
                university, I graduated from UW Coding Bootcamp in August 2022,
                an intensive six-month certificate program. I am now searching
                for a web development position with a company I am passionate
                about.
              </p>
              <p className="">
                Currently I am building my skillset by working on frontend
                mentor challenges and i am open to work freelance or full-time
                position
              </p>
            </motion.div>
          </div>
          <div className="mt-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.32, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: -100 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <h2 className="text-white text-xl  text-center mb-5">
                <span className="text-pink-main">#</span>Skills
              </h2>
            </motion.div>

            <div className="">
              <div className="w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide  flex gap-2 md:justify-center md:gap-5 ">
                {data.skills &&
                  data.skills.map((skill) => (
                    <motion.div
                      key={skill.title}
                      className="border border-gray-main  w-[200px] cursor-pointer lg:cursor-default"
                      // using motion from framer motion for aninamation
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{ delay: 0.4, duration: 0.5 }}
                      variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <div className="border-b border-b-gray-main">
                        <h3 className="text-lg px-5 py-2 text-pink-main capitalize">
                          {skill.title}
                        </h3>
                      </div>

                      <ul className="pl-5 py-3 ">
                        {skill.skillArrs &&
                          skill.skillArrs.map((skillArr) => (
                            <li className="mb-2" key={skillArr}>
                              {skillArr}
                            </li>
                          ))}
                      </ul>
                    </motion.div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default AboutMeComp;
