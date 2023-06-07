import React from "react";
import { HiOutlineExternalLink } from "react-icons/hi";

const Button = ({ children }) => {
  return <button className="border-2 px-4 py-1">{children}</button>;
};

const Button1 = ({ children }) => {
  return (
    <button className="bg-pink-main text-white px-4 py-1 flex items-center gap-2 lg:px-6 lg:py-2 lg:text-lg">
      {children} <HiOutlineExternalLink />
    </button>
  );
};
const Button2 = ({ children }) => {
  return (
    <button className="bg-white text-bg-modal px-4 py-1 flex items-center gap-2 lg:px-6 lg:py-2 lg:text-lg">
      {children}
      <HiOutlineExternalLink />
    </button>
  );
};

const Button3 = ({ children }) => {
  return (
    <button className="bg-pink-main text-white px-4 py-1 flex items-center gap-2 lg:px-6 lg:py-2 lg:text-lg">
      {children}
    </button>
  );
};

export { Button, Button1, Button2, Button3 };
