import React from "react";

const Button = ({ title, icon }) => {
  return (
    <div>
      <button className="flex items-center justify-center bg-beige-regular rounded-full py-1 px-2 text-brown  text-sm font-semibold shadow-sm cursor-none">
        {icon && <span className="mr-1 text-lg">{icon}</span>}
        {title}
      </button>
    </div>
  );
};

export default Button;
