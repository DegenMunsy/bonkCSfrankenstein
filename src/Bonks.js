import React, { useState } from "react";

const Bonks = () => {
  const [currentTab, setCurrentTab] = useState("Mint");

  return (
    <>
      {currentTab === "Mint" ? (
        <div className="mt-4 xl:mt-8 w-full px-4 max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-x-8">
          <div className="w-full mb-3 lg:mb-0 lg:w-1/3 shrink-0" style={{}}>
        
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Bonks;
