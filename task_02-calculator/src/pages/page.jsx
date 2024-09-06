import React, { useState } from "react";
import { FaRegClock } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import CalcFrame from "../ui/CalcFrame.jsx";
import CalcDisplay from "../ui/CalcDisplay.jsx";
import CalcButtons from "../ui/CalcButtons.jsx";
import CalcTitle from "../ui/CalcTitle.jsx";
import CalcHistory from "../components/CalcHistory.jsx";
import UseCalculator from "../hooks/UseCalculator.jsx";
import { getKeyValue } from "eslint-plugin-react/lib/util/ast.js";
import ToastMsg from "../ui/ToastMsg.jsx";

const Calculator = () => {
  const {
    input,
    calculate,
    clear,
    handleKeyDown,
    handleClick,
    toastMsg,
    setToastMsg,
    isKeydownEnabled,
    toggleKeyDown,
  } = UseCalculator();
  return (
    <>
      <main
        className={`flex items-center justify-center flex-col gap-8 h-screen`}
      >
        <div
          className={`fixed top-8 right-8 font-barlow-condensed transition-all duration-300 ease-in-out z-50`}
        >
          <CalcHistory />
        </div>
        <CalcFrame>
          <CalcDisplay input={input} handleKeyDown={handleKeyDown} isKeydownEnabled={isKeydownEnabled}/>
          <CalcButtons
            clear={clear}
            handleClick={handleClick}
            calculate={calculate}
          />
        </CalcFrame>
        <ToastMsg setToastMsg={setToastMsg} toastMsg={toastMsg} />
      </main>
    </>
  );
};
export default Calculator;
