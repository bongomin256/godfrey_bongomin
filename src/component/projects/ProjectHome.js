import ProjectFeactured from "../constants/projectFeactured";

//* Framer Motion Aninamtion
import { motion } from "framer-motion";

const ProjectHome = () => {
  return (
    <section className="px-5 md:px-12 lg:px-32 mb-48">
      <motion.div
        // using motion from framer motion for aninamation
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <h2 className=" text-center mb-8 text-xl before:content-[''] before:h-[2px] before:block before:bg-gray-main after:content-[''] after:h-[2px] after:block after:bg-gray-main grid grid-cols-3 items-center gap-2 md:gap-0">
          <span>
            <span className="text-pink-main">#</span>
            Featured Projects
          </span>
        </h2>
      </motion.div>

      <ProjectFeactured />
    </section>
  );
};

export default ProjectHome;
