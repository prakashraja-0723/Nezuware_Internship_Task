import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { clearHistory } from "../redux/features/calculator_history/calcHistorySlice.js";
import { FaClockRotateLeft } from "react-icons/fa6";

const CalcHistorySideBar = ({ input,clear }) => {
  const history = useSelector((state) => state.calc_history);
  const dispatch = useDispatch();

  const calc = history.length === 0;
  const deleteHistory = () => {
    clear();
    dispatch(clearHistory());
  };
  console.log(calc);
  return (
    <>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 pt-20 flex flex-col gap-4">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay text-2xl absolute top-4 right-8 btn hover:bg-transparent rounded-full aspect-square p-0 text-primary-content "
          >
            <IoCloseOutline />
          </label>
          {!calc &&
            <button
              className=" btn-accent absolute top-4 left-8 btn rounded-full aspect-square p-0 text-white text-3xl"
              onClick={deleteHistory}
            >
              <RiDeleteBin6Fill />
            </button>
          }
          {calc && (
            <li
              className={`absolute top-1/2 -translate-y-1/2 w-fit pl-8 hover:bg-transparent text-primary-content`}
            >
              <span className={`text-3xl`}>
                <FaClockRotateLeft />
                &nbsp;No History
              </span>
            </li>
          )}
          {history.map((item, index) => (
            <li key={index} className={`text-lg overflow-y-scroll`}>
              <a
                className={`flex flex-col items-end w-full text-wrap font-barlow-semi-condensed text-xl`}
              >
                {item.input}
                <span className={`text-white font-barlow text-3xl`}>
                  {item.result}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default CalcHistorySideBar;
