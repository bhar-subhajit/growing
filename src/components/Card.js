import React from "react";

function Card({ icon, title }) {
  return (
    <div className="w-48 h-36 rounded-2xl shadow-card py-7 flex flex-col justify-between cursor-pointer">
      <div className="ml-4">
        <img src={icon} width="49" height="49" alt="LOB" />
      </div>
      <div className="font-semibold ml-6">{title}</div>
    </div>
  );
}

export default Card;
