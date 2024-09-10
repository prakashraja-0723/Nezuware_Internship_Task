import React from "react";
import CalcFrame from "../ui/CalcFrame.jsx";
import CalcDisplay from "../ui/CalcDisplay.jsx";
import CalcButtons from "../ui/CalcButtons.jsx";
import CalcHistory from "../components/CalcHistory.jsx";
import UseCalculator from "../hooks/UseCalculator.jsx";
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
    calc,history
  } = UseCalculator();
  return (
    <>
      <main
        className={`flex items-center justify-center flex-col gap-8 h-screen`}
      >
        <div
          className={`fixed top-8 right-8 font-barlow-condensed transition-all duration-300 ease-in-out z-50`}
        >
          <CalcHistory/>
        </div>
        <CalcFrame>
          <CalcDisplay
            input={input}
            handleKeyDown={handleKeyDown}
            isKeydownEnabled={isKeydownEnabled}
            calc={calc}
            history={history}
            clear={clear}
          />
          <CalcButtons
            clear={clear}
            handleClick={handleClick}
            calculate={calculate}
          />
        </CalcFrame>
        <ToastMsg setToastMsg={setToastMsg} toastMsg={toastMsg}/>
      </main>
    </>
  );
};
export default Calculator;
