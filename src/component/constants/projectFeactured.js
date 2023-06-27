// import { Button, Button1, Button2, Button3 } from "../constants/btn/Button";
import { Button1, Button2 } from "./btn/Button";
import projects from "../../data.json";

//* Framer Motion Aninamtion
import { motion } from "framer-motion";

const ProjectFeactured = () => {
  return (
    <div>
      {projects.featured &&
        projects.featured.map((project) => (
          <motion.div
            key={project.id}
            className="project_layout bg-bg-modal p-4 rounded-lg text-center lg:grid lg:grid-cols-2 lg:gap-10 lg:items-center  lg:px-8 mb-8"
            // using motion from framer motion for aninamation
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <motion.div
              className="project_img mb-5 md:mb-5 lg:mb-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <img
                className="rounded-lg  hover:scale-105 opacity-40 hover:opacity-100 ease-in-out duration-300"
                src={project.images}
                alt=""
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <h3 className="mb-5 text-pink-main text-xl md:text-start ">
                {project.appName}
              </h3>
              <div>
                <p className="mb-5 text-gray-main md:text-start">
                  {project.description}
                </p>
                <motion.div
                  className="flex justify-center gap-5 mb-5 md:gap-12 md:justify-start"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: 0.35, duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 100 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <Button1>Github </Button1>
                  </a>
                  <a href={project.liveUrl} target="_blank" rel="noreferrer">
                    <Button2>Live</Button2>
                  </a>
                </motion.div>
                <div className="border-t-2 border-gray-main">
                  <ul className="flex justify-center flex-wrap gap-2 pt-2 text-pink-main font-light md:justify-start">
                    {project.techs &&
                      project.techs.map((tech) => (
                        <li key={tech}>
                          <span className="text-white">-</span>
                          {tech}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
    </div>
  );
};

export default ProjectFeactured;
