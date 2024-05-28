import React from "react";

const Skills = () => {
  return (
    <div>
      <section id="Habilidades" className="mt-16 text-neutral-600">
        <div className="custom-container">
          <h1 className="text-xl md:text-2xl font-semibold pb-4 relative group">
            Habilidades
            <span className="absolute bottom-3 left-0 w-9 h-1 bg-beige-regular transition-all duration-300 group-hover:w-24"></span>
          </h1>

          <div className="text-sm md:text-lg pt-4 text-neutral-500">
            <ul className="space-y-2">
              <li>Frontend | HTML5, CSS, JavaScript, Reactjs, TailwindCSS.</li>
              <li>UI Design | Figma</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
