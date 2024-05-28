import React from "react";
import profileImage from "../assets/profile.jpg";
import { Link } from "react-scroll";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

const Profile = () => {
  return (
    <section className="bg-beige-light text-neutral-600">
      <div className="custom-container">
        <div className=" flex flex-col items-center justify-center py-10 md:flex-row-reverse md:justify-between">
          <div>
            <img src={profileImage} alt="profile" className="w-56 h-56 my-4" />
          </div>

          <article>
            <div>
              <h1 className="font-semibold text-3xl">Jazmin Boada</h1>
              <h2 className="font-semibold text-xl">Front-End Developer</h2>
            </div>

            <div className="flex flex-row justify-center items-center gap-2 my-2 pb-4">
              <Link
                to="contactame"
                spy={true}
                smooth={true}
                duration={600}
                className="bg-beige-regular tracking-wider rounded-full p-2 text-white  text-md  shadow-sm hover:bg-brown transition-all cursor-pointer"
              >
                Contáctame
              </Link>

              <div className="flex flex-row gap-2 cursor-pointer">
                <a
                  href="https://github.com/JazminBoada"
                  target="_black"
                  rel="noopener noreferrer"
                  className="text-[#7D6C5B] hover:scale-110 transform transition-transform duration-300"
                >
                  <AiFillGithub size={27} />
                </a>
                <a
                  href="https://www.linkedin.com/in/jazmin-boada-b99b21306/"
                  target="_black"
                  rel="noopener noreferrer"
                  className="text-[#7D6C5B] hover:scale-110 transform transition-transform duration-300"
                >
                  <AiFillLinkedin size={27} />
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Profile;
