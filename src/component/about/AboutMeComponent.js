import React from "react";
import myimage from "../../assets/myphoto.jpeg";
import data from "../../data.json";

const AboutMeComp = () => {
  return (
    <section className="px-5 md:px-12 lg:px-32">
      <div>
        <h2 className="text-xl text-center mb-5">
          <span className="text-pink-main">/</span>About Me
        </h2>
        <div>
          <div className="mb-12 md:grid md:grid-cols-2 gap-5 md:items-center">
            <div className="mb-5">
              <img className="" src={myimage} alt="" />
            </div>
            <div>
              <p className="mb-5 text-center md:text-start">
                My name is Godfrey Bongomin but I grew up being called Bongo, so
                this is my way of telling you that you can call me BONGO!
              </p>
              <p className="mb-5 text-center md:text-start">
                I have 8 years of experience working in production, logistics,
                customer service, and management in a multi-cultural setting.
                Having already earned a BBA from a globally accredited
                university, I graduated from UW Coding Bootcamp in August 2022,
                an intensive six-month certificate program. I am now searching
                for a web development position with a company I am passionate
                about.
              </p>
              <p className="text-center md:text-start">
                Currently I am building my skillset by working on frontend
                mentor challenges and i am open to work freelance or full-time
                position
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-xl text-center mb-5">
              <span className="text-pink-main">#</span>Skills
            </h2>
            <div className="md:grid md:grid-cols-4 gap-2">
              {data.skills &&
                data.skills.map((skill) => (
                  <div
                    key={skill.title}
                    className="border border-gray-main mb-5 "
                  >
                    <div className="border-b border-b-gray-main">
                      <h3 className="text-lg pl-5 py-2 text-pink-main capitalize">
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
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeComp;
