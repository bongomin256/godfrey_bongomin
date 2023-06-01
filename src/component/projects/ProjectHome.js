import React from "react";
// import myphoto from "../../assets/myphoto.jpeg";
import audiophile from "../../assets/featured/audiophile.png";
import Button from "../btn/Button";

const ProjectHome = () => {
  return (
    <section className="px-5 md:px-12 lg:px-20">
      <h2>
        <span>#</span>Projects
      </h2>
      <div className="bg-bg-modal p-4 rounded-lg text-center">
        <div className="mb-5">
          <img className="rounded-lg" src={audiophile} alt="" />
        </div>

        <div>
          <h3 className="mb-5 text-pink-main text-xl">audiophile</h3>
          <div>
            <p className="mb-5">
              This is an eCommerce website that allows user to view the optimal
              layout for the site depending on their device's screen size, add
              to cart and checkout
            </p>
            <div>
              <Button>Github</Button>
              <Button>Live</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectHome;
