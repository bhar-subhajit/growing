import React from "react";
import Card from "./Card";
import FD_ICON from "../assets/icons/fd_icon.svg";
import IPO_ICON from "../assets/icons/ipo_icon.svg";
import MF_ICON from "../assets/icons/mutual_fund_icon.svg";
import OPTION_ICON from "../assets/icons/options_icon.svg";
import STOCK_ICON from "../assets/icons/stocks_icon.svg";
import US_STOCK_ICON from "../assets/icons/us_stocks_icon.svg";

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
      <div className="grid grid-cols-2 gap-x-11 gap-y-6 py-16">
        <Card icon={MF_ICON} title={"Mutual Funds"} />
        <Card icon={STOCK_ICON} title={"Stocks"} />
        <Card icon={OPTION_ICON} title={"Futures & Options"} />
        <Card icon={US_STOCK_ICON} title={"US Stocks"} />
        <Card icon={IPO_ICON} title={"IPO"} />
        <Card icon={FD_ICON} title={"Fixed Deposits"} />
      </div>
    </div>
  );
}

export default Dashboard;
