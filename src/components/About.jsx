import React from "react";

function About() {
  return (
    <div>
      <section id="Sobremi" className="mt-16  text-neutral-600">
        <div className="custom-container ">
          <h1 className="text-xl md:text-2xl font-semibold pb-4 relative group ">
            Sobre mi
            <span className="absolute bottom-3 left-0 w-9 h-1 bg-beige-regular transition-all duration-300 group-hover:w-20"></span>
          </h1>

          <div className="text-sm md:text-lg space-y-2 text-justify pt-4 text-neutral-500">
            <p>
              Desarrolladora Front-End con residencia en Buenos Aires,
              Argentina.
            </p>
            <p>
              Apasionada por la creación e implementación de diseños, desde lo
              estético y funcional. Soy una persona responsable y colaborativa,
              motivada a solucionar los problemas que se puedan presentar,
              adquiriendo nuevas habilidades y capacitándome continuamente.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
