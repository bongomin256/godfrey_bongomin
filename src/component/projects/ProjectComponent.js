//! importing the constants
import { Button, Button3 } from "../constants/btn/Button";
import projects from "../../data.json";

import PageSection from "../constants/PageSection";
import ProjectFeactured from "../constants/projectFeactured";

const ProjectComponent = () => {
  return (
    <PageSection>
      <h2 className="text-white text-xl text-center mb-5 capitalize">
        <span className="text-pink-main">/</span>projects
      </h2>
      <div>
        <ProjectFeactured />
      </div>
      <h3 className="text-white text-xl text-center mb-5 capitalize">
        {" "}
        <span className="text-pink-main">#</span>other projects
      </h3>
      <div className=" overflow-x-scroll scroll scroll-smooth scrollbar-hide flex gap-4 w-full ">
        {projects.others &&
          projects.others.map((other) => (
            <div key={other.id} className="border-2 border-gray-main">
              <div className="border-b border-b-gray-main text-center">
                <h3 className="text-lg  py-1 text-pink-main capitalize">
                  {other.appName}
                </h3>
              </div>

              <div className="px-5 py-3">
                <div className="mb-5">{other.description}</div>
                <div className="flex gap-4 lg:justify-center lg:gap-8">
                  <a
                    href={other.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button3>Github</Button3>
                  </a>
                  <a
                    href={other.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button>Live</Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </PageSection>
  );
};

export default ProjectComponent;
