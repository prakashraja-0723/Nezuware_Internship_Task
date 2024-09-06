import React from "react";
import { FaRegClock } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import CalcHistoryBtn from "../ui/CalcHistoryBtn.jsx";
import CalcHistorySideBar from "../ui/CalcHistorySideBar.jsx";
import useCalculator from "../hooks/UseCalculator.jsx";

const CalcHistory = () => {
  const {input,clear} = useCalculator()
  return (
    <>
      <div className="drawer">
        <CalcHistoryBtn />
        <CalcHistorySideBar input={input} clear={clear}/>
      </div>
    </>
  );
};
export default CalcHistory;
