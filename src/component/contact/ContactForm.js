import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser";
// import { useForm } from "react-hook-form";
// import * as yup from "yup";

// import { yupResolver } from "@hookform/resolvers/yup";

import { SlLocationPin, SlEnvolope } from "react-icons/sl";
import { Button4 } from "../constants/btn/Button";

const ContactForm = () => {
  // const schema = yup.object().shape({
  //   fullName: yup.string().required(),
  //   email: yup.string().email().required(),
  //   message: yup.string().required,
  // });

  // const { register, handleSubmit } = useForm({
  //   resolver: yupResolver(schema),
  // });

  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageSent, setMessageSent] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
    console.log(name);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
    console.log(message);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_YOUR_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log(result);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setMessageSent(true);
    setTimeout(() => {
      setMessageSent(false);
    }, 3000);

    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <section>
      <div className="md:grid md:grid-cols-2 lg:px-32">
        <div className="mb-10">
          <div className="flex items-center gap-5 mb-5">
            <div className="bg-white text-bg-main rounded-full p-2 ">
              <SlLocationPin className="h-10 w-10 lg:h-12 lg:w-12" />
            </div>
            <div>
              <h5 className="text-lg text-white font-semibold lg:text-xl">
                Location
              </h5>
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
              <h5 className="text-lg text-white font-semibold lg:text-xl">
                Email Address
              </h5>
              <p className="text-gray-main font-light italic lg:text-lg ">
                gobongomin@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div>
          <form id="contact_form" onSubmit={sendEmail} ref={form}>
            <input
              className="mb-5 bg-bg-main border-2 border-gray-main p-2 w-full focus:bg-white active:border-none focus:text-gray-main"
              type="text"
              id="name"
              value={name}
              onChange={handleName}
              placeholder="Name"
              // {...register("fullName")}
            />
            <input
              className="mb-5 bg-bg-main border-2 border-gray-main p-2 w-full  focus:bg-white focus:border-none focus:text-gray-main"
              type="text"
              id="email"
              value={email}
              placeholder="Email"
              // {...register("email")}
              onChange={handleEmail}
            />
            <textarea
              className=" bg-bg-main border-2 mb-3 border-gray-main p-2 w-full  focus:bg-white focus:border-none focus:text-gray-main"
              // name="message"
              type="text"
              id="message"
              // {...register("message")}
              value={message}
              placeholder="Message here...!"
              onChange={handleMessage}
            ></textarea>
            {messageSent && (
              <span className=" text-pink-main italic mb-5">
                Message sent successfully!
              </span>
            )}
            <Button4>send</Button4>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
