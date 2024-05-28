import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { SiGitconnected } from "react-icons/si";

const Button = ({ title, icon }) => {
  return (
    <button className="flex items-center justify-center bg-beige-regular rounded-full py-1 px-2 text-brown text-sm font-semibold shadow-sm">
      {icon && <span className="mr-1 text-lg">{icon}</span>}
      {title}
    </button>
  );
};

const ProjectsCards = ({
  image,
  title,
  text,
  appLink,
  sourceLink,
  buttons,
}) => {
  return (
    <div className="w-full overflow-hidden mb-4 flex flex-col items-center md:flex-row md:space-x-4">
      <img className="w-60" src={image} alt={title} />
      <div>
        <div className="md:mt-10">
          <h2 className="font-bold text-xl">{title}</h2>
          <p className="text-gray-400">{text}</p>

          <div className="flex flex-row gap-2 mt-2">
            {buttons.map((button, index) => (
              <Button key={index} icon={button.icon} title={button.title} />
            ))}
          </div>

          <div className="flex flex-row pt-2 gap-4">
            <a
              href={appLink}
              className="text-gray-700 underline inline-flex items-center hover:text-brown"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGitconnected className="mr-1" />
              App
            </a>

            <a
              href={sourceLink}
              className="text-gray-700 underline inline-flex items-center hover:text-brown"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub className="mr-1" />
              Código fuente
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCards;
