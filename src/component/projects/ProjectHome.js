// import { Button1, Button2 } from "../constants/btn/Button";

// import projects from "../../data.json";
import ProjectFeactured from "../constants/projectFeactured";

const ProjectHome = () => {
  return (
    <section className="px-5 md:px-12 lg:px-32 mb-20">
      <div>
        <h2 className=" text-center mb-8 text-xl before:content-[''] before:h-[2px] before:block before:bg-gray-main after:content-[''] after:h-[2px] after:block after:bg-gray-main grid grid-cols-3 items-center gap-2 md:gap-0">
          <span>
            <span className="text-pink-main">#</span>
            Featured Projects
          </span>
        </h2>
      </div>

      <ProjectFeactured />
    </section>
  );
};

export default ProjectHome;
