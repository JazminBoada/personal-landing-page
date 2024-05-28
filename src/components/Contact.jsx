import React from "react";
import { VscSend } from "react-icons/vsc";

const Contact = () => {
  return (
    <section className="bg-beige-light">
      <div className="flex flex-col items-center justify-center md:max-w-lg md:mx-auto">
        <div className="text-center">
          <h1 className="text-xl md:text-2xl pb-4 mt-4 mb-2 tracking-wide relative group">
            Contáctame
            <span className="absolute bottom-3 left-0 w-12 h-1 bg-beige-regular transition-all duration-300 group-hover:w-24"></span>
          </h1>
        </div>

        <form className="flex flex-col space-y-2 mb-10 w-full px-8 pb-10">
          <input
            className="p-2 outline-none overflow-hidden rounded-md shadow-sm"
            type="text"
            placeholder="Nombre"
          />
          <input
            className="p-2 outline-none overflow-hidden rounded-md shadow-sm"
            type="email"
            placeholder="Email"
          />
          <textarea
            className="resize-none h-40 p-2 outline-none overflow-hidden rounded-md shadow-sm"
            type="text"
            placeholder="Escribe tu mensaje"
          ></textarea>

          <div className="flex justify-center">
            <button className="flex flex-row items-center justify-center gap-2 w-3/4 text-sm md:text-lg border-none cursor-pointer bg-beige-regular rounded-full text-white py-1 mt-2 hover:bg-brown transition-all duration-300 shadow-sm">
              <VscSend /> Enviar Mensaje
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
