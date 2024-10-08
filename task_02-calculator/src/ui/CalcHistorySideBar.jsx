import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { clearHistory } from "../redux/features/calculator_history/calcHistorySlice.js";
import { FaClockRotateLeft } from "react-icons/fa6";
import CalcHistory_ui from "./CalcHistory_ui.jsx";

const CalcHistorySideBar = ({ input, clear }) => {
  const history = useSelector((state) => state.calc_history);
  const dispatch = useDispatch();

  const calc = history.length === 0;
  const deleteHistory = () => {
    clear();
    dispatch(clearHistory());
  };
  return (
    <>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="bg-base-200 text-base-content min-w-80 max-w-fit transition-all max-h-screen p-4 pt-20 flex flex-col flex-nowrap gap-4 font-barlow ">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay text-2xl absolute top-4 right-8 btn hover:bg-transparent rounded-full aspect-square p-0 text-primary-content "
          >
            <IoCloseOutline />
          </label>
          {!calc && (
            <button
              className=" btn-accent absolute top-4 left-8 btn rounded-full aspect-square p-0 text-white text-3xl"
              onClick={deleteHistory}
            >
              <RiDeleteBin6Fill />
            </button>
          )}
          <CalcHistory_ui styles={"h-screen"}/>
        </div>
      </div>
    </>
  );
};
export default CalcHistorySideBar;
