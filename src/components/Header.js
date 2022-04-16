import React, { useState } from "react";

function Header() {
  const [searchKey, setSearchKey] = useState("");
  const searchStock = (e) => {
    setSearchKey(e.target.value);
  };

  return (
    <nav className="flex flex-row justify-between max-h-36 py-4 items-center">
      <div className="flex flex-row items-center">
        <img
          src="https://android25.com/wp-content/uploads/2020/09/stocks-demat-mutual-fund-sip-groww.png"
          alt="logo"
          className="max-h-12"
        />
        <span className="font-mono text-2xl font-bold">Growing</span>
      </div>
      <div className="relative text-gray-600">
        <span className="absolute inset-y-0 left-0 flex pl-2">
          <button className="p-1 cursor-default">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              className="w-4 h-4"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
        </span>
        <input
          className="h-9 rounded-lg pl-8 w-[calc(30vw)] text-sm shadow-[0_0_3px_#a3a098] outline-0"
          placeholder="What are you looking for today?"
          value={searchKey}
          onChange={searchStock}
        ></input>
        {searchKey && (
          <span className="absolute inset-y-0 right-0 flex pr-2">
            <button className="p-1" onClick={() => setSearchKey("")}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                height="18"
                width="18"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
              </svg>
            </button>
          </span>
        )}
      </div>
      <button className="bg-primaryClr rounded min-w-fit h-9 px-8 text-white font-medium">
        Login/Register
      </button>
    </nav>
  );
}

export default Header;
