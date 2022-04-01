import React from "react";

const HomeMain = () => {
  return (
    <div className="bg-red-200 h-screen container mx-auto flex flex-col items-center">
      <h1 className="text-lg text-white font-semibold">
        Most up to date Covid-19 statistics!
      </h1>
      <div className="w-16 h-16 bg-[url('./images/background.jpg')] bg-center bg-cover"></div>
    </div>
  );
};

export default HomeMain;
