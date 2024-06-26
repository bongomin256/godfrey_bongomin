// import { useState } from "react";

//! importing the constants
import { Button, Button3 } from "../constants/btn/Button";
import projects from "../../data.json";

//* Framer Motion Aninamtion
import { motion } from "framer-motion";

import PageSection from "../constants/PageSection";
import ProjectFeactured from "../constants/projectFeactured";

const ProjectComponent = () => {
  // const [fullDescription, setFullDescription] = useState(false);

  // let otherProjects = projects.others;
  // console.log(otherProjects);

  // let otherProDescription = otherProjects.map((project) => project.description);

  // if (!fullDescription) {
  //   otherProDescription = otherProDescription.slice(0, 100) + "...";
  // }
  return (
    <PageSection>
      <motion.div
        className="mb-20 "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -100 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <h2 className="text-xl text-center text-white capitalize">
          <span className="text-pink-main">/</span>projects
        </h2>
      </motion.div>

      <ProjectFeactured />

      <div className="mt-20 ">
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.32, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h3 className="text-xl text-center text-white capitalize">
            <span className="text-pink-main">#</span>other projects
          </h3>
        </motion.div>

        <div className="flex w-full gap-4 overflow-x-scroll scroll scroll-smooth scrollbar-hide">
          {projects.others &&
            projects.others.map((other) => (
              <motion.div
                key={other.id}
                className="border-2 border-gray-main"
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
                <div className="text-center border-b border-b-gray-main">
                  <h3 className="py-1 text-lg capitalize text-pink-main">
                    {other.appName}
                  </h3>
                </div>

                <div className="px-5 py-3">
                  <div className="mb-5">{other.description}</div>
                  {/* <div className="mb-5">{otherProDescription}</div> */}
                  <div className="flex gap-4 lg:justify-center lg:gap-8">
                    <motion.a
                      href={other.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      // using motion from framer motion for aninamation
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{ delay: 0.45, duration: 0.5 }}
                      variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                      }}
                    >
                      <Button3>Github</Button3>
                    </motion.a>
                    <motion.a
                      href={other.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      // using motion from framer motion for aninamation
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{ delay: 0.45, duration: 0.5 }}
                      variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 },
                      }}
                    >
                      <Button>Live</Button>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </PageSection>
  );
};

export default ProjectComponent;
