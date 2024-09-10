import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToHistory } from "../redux/features/calculator_history/calcHistorySlice.js";

const UseCalculator = () => {
  const [input, setInput] = useState("");
  const [isKeydownEnabled, setIsKeydownEnabled] = useState(false);
  const [toastMsg, setToastMsg] = useState([
    { alert_style: "alert-error", message: "", toast: false },
  ]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [input]);

  const dispatch = useDispatch();

  const keys = [
    "*",
    "/",
    "+",
    "-",
    ".",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];
  let result;

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      calculate();
    } else if (event.key === "Escape") {
      clear();
    } else if (event.key === "Backspace") {
      setInput(input.slice(0, -1));
    } else if (event.key === "0" || (event.key >= 1 && event.key <= 9)) {
      setInput(input + event.key);
    } else if (event.key === ".") {
      setInput(input + event.key);
    }
    // If the key pressed is a number, add it to the input
    else if (keys.includes(event.key)) {
      setInput((prevInput) => prevInput + event.key);
    }
  };

  const handleClick = (value) => {
      if (input === "0" || input === "ERROR"){
        setInput("");
      }
    if (value === "BackSpace"){
        setInput(input.slice(0, -1));
    }else{
    setInput(input + value);
    }
  };

  const clear = () => {
    setInput("");
  };

  const calculate = () => {
    try {
      result = parseFloat(eval(input).toFixed(2)).toString();
      setInput(result);
      dispatch(addToHistory({ input: input, result }));
    } catch (error) {
      setInput("ERROR");
      setToastMsg([
        {
          alert_style: "alert-error",
          message: "Invalid expression",
          toast: true,
        },
      ]);
    }
  };
  return {
    input,
    handleClick,
    clear,
    calculate,
    handleKeyDown,
    toastMsg,
    setToastMsg,
    isKeydownEnabled,
    result,
  };
};
export default UseCalculator;
