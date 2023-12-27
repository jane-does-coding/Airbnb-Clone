import React, { useEffect, useState } from "react";

const TextField = () => {
  return (
    <>
      <input
        type="text"
        placeholder="Take a note..."
        className=" p-6 py-4 h-fit w-[60%] mx-[20%] bg-gray-900 rounded-md outline-none text-lg text-white shadow-lg "
      />

      {/* Modal */}
      {/* Overlay */}
      <div>
        <div className="w-full h-screen bg-black/50 fixed top-0 left-0 backdrop-blur-sm z-10"></div>
      </div>
    </>
  );
};

export default TextField;
