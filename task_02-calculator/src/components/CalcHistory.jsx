import React from "react";
import { FaRegClock } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";
import CalcHistoryBtn from "../ui/CalcHistoryBtn.jsx";
import CalcHistorySideBar from "../ui/CalcHistorySideBar.jsx";

const CalcHistory = () => {
  return (
    <>
      <div className="drawer">
        <CalcHistoryBtn />
        <CalcHistorySideBar />
      </div>
    </>
  );
};
export default CalcHistory;
