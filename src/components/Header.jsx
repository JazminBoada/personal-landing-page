import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="text-neutral-600 bg-beige-regular sticky top-0 z-10">
      <div className="custom-container">
        <div className="flex flex-row items-center justify-center p-2 md:justify-between">
          <Link
            to="perfil"
            spy={true}
            smooth={true}
            duration={300}
            className="hover:underline transition-all cursor-pointer"
          >
            Jazmin Boada
          </Link>

          <div className="hidden md:block md:space-x-4">
            <Link
              to="sobremi"
              spy={true}
              smooth={true}
              duration={300}
              className="hover:underline transition-all cursor-pointer"
            >
              Sobre mi
            </Link>

            <Link
              to="habilidades"
              spy={true}
              smooth={true}
              duration={300}
              className="hover:underline transition-all cursor-pointer"
            >
              Habilidades
            </Link>

            <Link
              to="proyectos"
              spy={true}
              smooth={true}
              duration={300}
              className="hover:underline transition-all cursor-pointer"
            >
              Proyectos
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
