import React from "react";
import Card from "./Card";

function Dashboard() {
  return (
    <div className="w-full flex justify-between">
      <div className="flex flex-col justify-center font-roboto">
        <div className="tracking-wide text-4xl font-bold mb-5">
          Invest in <span className="text-blue-700 rotate-180">Stocks</span>
        </div>
        <div className="mb-5 text-sm text-subTextClr">
          Trusted by <span className="font-extrabold">Millions</span> of
          Indians. Start investing
          <div>today.</div>
        </div>
        <button className="bg-primaryClr rounded w-fit h-11 px-10 text-white font-medium">
          Get Started
        </button>
      </div>
      <div className="grid grid-cols-2 gap-x-11 gap-y-6">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Dashboard;
