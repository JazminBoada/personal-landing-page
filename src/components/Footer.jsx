import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-beige-regular flex flex-row items-center justify-center">
      <div className="flex flex-row gap-1 cursor-pointer py-2">
        <AiFillGithub
          size={20}
          className="text-[#7D6C5B] hover:scale-110 transform transition-transform duration-300"
        />
        <AiFillLinkedin
          size={20}
          className="text-[#7D6C5B] hover:scale-110 transform transition-transform duration-300"
        />
        <AiFillMail
          size={20}
          className="text-[#7D6C5B] hover:scale-110 transform transition-transform duration-300"
        />
      </div>
    </div>
  );
};

export default Footer;
