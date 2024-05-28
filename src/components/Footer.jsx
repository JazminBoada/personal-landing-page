import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-beige-regular flex flex-row items-center justify-center">
      <div className="flex flex-row gap-1 cursor-pointer py-2">
        <a
          href="https://github.com/JazminBoada"
          target="_black"
          rel="noopener noreferrer"
          className="text-[#7D6C5B] hover:scale-110 transform transition-transform duration-300"
        >
          <AiFillGithub size={20} />
        </a>
        <a
          href="https://github.com/JazminBoada"
          target="_black"
          rel="noopener noreferrer"
          className="text-[#7D6C5B] hover:scale-110 transform transition-transform duration-300"
        >
          <AiFillLinkedin size={20} />
        </a>
        <AiFillMail
          size={20}
          className="text-[#7D6C5B] hover:scale-110 transform transition-transform duration-300"
        />
      </div>
    </div>
  );
};

export default Footer;
