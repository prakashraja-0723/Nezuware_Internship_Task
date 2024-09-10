import React from "react";
import { FaClockRotateLeft } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { IoCloseOutline } from "react-icons/io5";

const CalcHistory_ui = ({ children, styles = "" }) => {
  const history = useSelector((state) => state.calc_history);
  const calc = history.length === 0;
  return (
    <ul
      className={`menu relative overflow-y-scroll overflow-x-clip w-full flex flex-col flex-nowrap gap-4 h-full pb-8  ${styles}`}
    >
      {calc && (
        <span
          className={`absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-[25%] w-full hover:bg-transparent text-center text-primary-content text-3xl font-barlow font-semibold flex`}
        >
          <FaClockRotateLeft />
          &nbsp;No History
        </span>
      )}
      {history.map((item, index) => (
        <li key={index} className={`text-lg`}>
          <a
            className={`flex flex-col items-end w-full text-wrap font-barlow text-xl font-semibold`}
          >
            {item.input}
            <span
              className={`text-white font-barlow-condensed text-4xl font-bold`}
            >
              {item.result}
            </span>
          </a>
        </li>
      ))}
      {children}
    </ul>
  );
};
export default CalcHistory_ui;
