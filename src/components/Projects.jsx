import React from "react";
import ProjectsCards from "../layouts/ProjectsCards";
import img1 from "../assets/img/img1.png";
import img2 from "../assets/img/img2.png";
import img3 from "../assets/img/img3.png";
import img4 from "../assets/img/img4.png";
import img5 from "../assets/img/img5.png";
import img6 from "../assets/img/img6.png";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandReact } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";

const Projects = () => {
  return (
    <section id="Proyectos" className="mt-16  text-neutral-600 ">
      <div className="custom-container">
        <h1 className="text-xl md:text-2xl font-semibold pb-4 relative group ">
          Proyectos
          <span className="absolute bottom-3 left-0  w-9 h-1 bg-beige-regular transition-all duration-300 group-hover:w-20"></span>
        </h1>

        <div className="flex flex-col mb-8 ">
          <ProjectsCards
            key={1}
            image={img1}
            title="Login Web App"
            text="Responsive Login and Registration Form"
            buttons={[
              { title: "HTML5", icon: <FaHtml5 /> },
              { title: "CSS", icon: <FaCss3Alt /> },
              { title: "JavaScript", icon: <IoLogoJavascript /> },
            ]}
            appLink="#"
            sourceLink="#"
          />

          <ProjectsCards
            key={2}
            image={img2}
            title="Login Web App"
            text="Responsive Login and Registration Form"
            buttons={[
              { title: "HTML5", icon: <FaHtml5 /> },
              { title: "React", icon: <TbBrandReact /> },
              { title: "Tailwind", icon: <RiTailwindCssFill /> },
            ]}
            appLink="#"
            sourceLink="#"
          />

          <ProjectsCards
            key={3}
            image={img3}
            title="TODO List App"
            text="TODO list web app to manage your daily tasks"
            buttons={[
              { title: "HTML5", icon: <FaHtml5 /> },
              { title: "CSS", icon: <FaCss3Alt /> },
              { title: "JavaScript", icon: <IoLogoJavascript /> },
            ]}
            appLink="#"
            sourceLink="#"
          />

          <ProjectsCards
            key={4}
            image={img4}
            title="Restaurant Web App"
            text="Responsive Restaurant App"
            buttons={[
              { title: "HTML5", icon: <FaHtml5 /> },
              { title: "React", icon: <TbBrandReact /> },
              { title: "Tailwind", icon: <RiTailwindCssFill /> },
            ]}
            appLink="#"
            sourceLink="#"
          />

          <ProjectsCards
            key={5}
            image={img5}
            title="Weather App"
            text="Web application to see weather variations"
            buttons={[
              { title: "HTML5", icon: <FaHtml5 /> },
              { title: "CSS", icon: <FaCss3Alt /> },
              { title: "React", icon: <TbBrandReact /> },
            ]}
            appLink="#"
            sourceLink="#"
          />

          <ProjectsCards
            key={6}
            image={img6}
            title="Translator App"
            text="Web application to make language translations"
            buttons={[
              { title: "HTML5", icon: <FaHtml5 /> },
              { title: "CSS", icon: <FaCss3Alt /> },
              { title: "JavaScript", icon: <IoLogoJavascript /> },
            ]}
            appLink="#"
            sourceLink="#"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
