import React, { useState } from "react";
import UseCalculator from "../hooks/UseCalculator.jsx";
import CalcHistory_ui from "./CalcHistory_ui.jsx";
import {useDispatch, useSelector} from "react-redux";
import {RiDeleteBin6Fill} from "react-icons/ri";
import {clearHistory} from "../redux/features/calculator_history/calcHistorySlice.js";

const CalcDisplay = ({ input, handleKeyDown,clear }) => {
  const history = useSelector((state) => state.calc_history);
  const dispatch = useDispatch();
  
  const calc = history.length === 0;
  const deleteHistory = () => {
    clear();
    dispatch(clearHistory());
  };
  return (
    <>
      <div className={`flex flex-col`}>
        <div
          className={`w-full lg:w-96 h-16 md:h-[4.5rem] bg-slate-600 text-3xl text-wrap flex items-center justify-end rounded-xl lg:rounded-bl-none lg:rounded-br-none overflow-clip px-4 text-white font-medium`}
          onKeyDown={(e) => {
            handleKeyDown(e);
          }}
        >
          {input || "0"}
        </div>
        <div className={` hidden lg:block bg-slate-700 flex-1 max-h-[464px] rounded-bl-2xl rounded-br-2xl px-4`}>
          <CalcHistory_ui />
          {!calc && (
            <button
              className=" bg-red-500 absolute top-3 left-8 rounded-full px-3 py-2 text-white text-xl lg:flex items-center justify-center gap-2 hidden font-semibold"
              onClick={deleteHistory}
            >
              <RiDeleteBin6Fill />Delete History
            </button>
          )}
        </div>
      </div>
    </>
  );
};
export default CalcDisplay;
