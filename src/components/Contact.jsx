import React from "react";
import { useState } from "react";
import { VscSend } from "react-icons/vsc";

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://formspree.io/f/mjvnqbbk", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("¡Mensaje enviado con éxito!");
      setFormData({
        nombre: "",
        email: "",
        mensaje: "",
      });
    } else {
      setStatus("Error al enviar el mensaje.");
    }
  };

  return (
    <section className="bg-beige-light">
      <div className="flex flex-col items-center justify-center md:max-w-lg md:mx-auto">
        <div className="text-center">
          <h1 className="text-xl md:text-2xl pb-4 mt-4 mb-2 tracking-wide relative group">
            Contáctame
            <span className="absolute bottom-3 left-0 w-12 h-1 bg-beige-regular transition-all duration-300 group-hover:w-24"></span>
          </h1>
        </div>

        <form
          action="https://formspree.io/f/mjvnqbbk"
          method="POST"
          className="flex flex-col space-y-2 mb-10 w-full px-8 pb-10"
        >
          <input
            className="p-2 outline-none overflow-hidden rounded-md shadow-sm"
            name="nombre"
            type="text"
            placeholder="Nombre"
          />
          <input
            className="p-2 outline-none overflow-hidden rounded-md shadow-sm"
            name="email"
            type="email"
            placeholder="Email"
          />
          <textarea
            className="resize-none h-40 p-2 outline-none overflow-hidden rounded-md shadow-sm"
            name="mensaje"
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
