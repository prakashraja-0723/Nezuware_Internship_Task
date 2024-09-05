import React, { useState } from "react";
import UseCalculator from "../hooks/UseCalculator.jsx";

const CalcDisplay = ({ input, handleKeyDown, isKeydownEnabled }) => {
  return (
    <>
      {isKeydownEnabled ? (
        <div
          className={`w-96 h-16 bg-gray-500 text-3xl text-secondary-content px-4 flex items-center justify-end rounded-xl overflow-clip shadow-inner shadow-neutral`}
          onKeyDown={(e) => {
            handleKeyDown(e);
          }}
        >
          {input || "0"}
        </div>
      ) : (
        <div
          className={`w-96 h-16 bg-gray-500 text-3xl text-secondary-content px-4 flex items-center justify-end rounded-xl overflow-clip shadow-inner shadow-neutral`}
        >
          {input || "0"}
        </div>
      )}
    </>
  );
};
export default CalcDisplay;
