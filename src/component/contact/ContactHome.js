import React from "react";

import { SlLocationPin, SlEnvolope } from "react-icons/sl";
import { Button3 } from "../btn/Button";

const contactHome = () => {
  return (
    <section className="px-5 md:px-12 lg:px-32">
      <h2 className=" text-center mb-8 text-xl before:content-[''] before:h-[2px] before:block before:bg-gray-main after:content-[''] after:h-[2px] after:block after:bg-gray-main grid grid-cols-3 items-center gap-2 md:gap-0">
        <span>
          <span className="text-pink-main">#</span>
          Contact
        </span>
      </h2>
      <div>
        <h4 className="text-center mb-5 md:mb-10 lg:mb-16">Get in Touch</h4>
        <div className="md:grid md:grid-cols-2 lg:px-32">
          <div className="mb-10">
            <div className="flex items-center gap-5 mb-5">
              <div className="bg-white text-bg-main rounded-full p-2 ">
                <SlLocationPin className="h-10 w-10 lg:h-12 lg:w-12" />
              </div>
              <div>
                <h5 className="text-lg font-semibold lg:text-xl">Location</h5>
                <p className="text-gray-main font-light italic lg:text-lg">
                  Seattle, WA
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="bg-white text-bg-main rounded-full p-2">
                <SlEnvolope className="h-10 w-10 lg:h-12 lg:w-12" />
              </div>
              <div>
                <h5 className="text-lg font-semibold lg:text-xl">
                  Email Address
                </h5>
                <p className="text-gray-main font-light italic lg:text-lg ">
                  gobongomin@gmail.com
                </p>
              </div>
            </div>
          </div>
          <div>
            <input
              className="mb-5 bg-bg-main border-2 border-gray-main p-2 w-full active:bg-white active:border-none active:text-gray-main"
              type="text"
              placeholder="Name"
            />
            <input
              className="mb-5 bg-bg-main border-2 border-gray-main p-2 w-full  active:bg-white active:border-none active:text-gray-main"
              type="text"
              placeholder="Email"
            />
            <textarea
              className=" bg-bg-main border-2 mb-3 border-gray-main p-2 w-full  active:bg-white active:border-none active:text-gray-main"
              name=""
              id=""
              cols="20"
              rows="10"
              placeholder="Message here...!"
            ></textarea>
            <Button3>send</Button3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default contactHome;
