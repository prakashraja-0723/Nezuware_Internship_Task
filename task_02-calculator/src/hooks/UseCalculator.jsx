import { useEffect, useState } from "react";

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

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      calculate();
    } else if (event.key === "Escape") {
      clear();
      setToastMsg([{}]);
    } else if (event.key === "Backspace") {
      setInput(input.slice(0, -1));
      setToastMsg([{}]);
    } else if (event.key === "0" || (event.key >= 1 && event.key <= 9)) {
      setInput(input + event.key);
      setToastMsg([{}]);
    } else if (event.key === ".") {
      setInput(input + event.key);
      setToastMsg([{}]);
    }
    // If the key pressed is a number, add it to the input
    else if (
      [
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
      ].includes(event.key)
    ) {
      setInput((prevInput) => prevInput + event.key);
    }
    // If the key pressed is a letter, show an error message
    else if (event.key.match(/[a-zA-Z]/)) {
      setInput("");
      setToastMsg([
        {
          alert_style: "alert-error",
          message: "Only Numbers and Arithmetic operators are allowed",
          toast: true,
        },
      ]);
    }
  };

  const handleClick = (value) => {
    setInput(input + value);
    setToastMsg([{}]);
  };

  const clear = () => {
    setInput("");
    setToastMsg([{}]);
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("");
      setToastMsg([
        {
          alert_style: "alert-error",
          message: "Invalid expression",
          toast: true,
        },
      ]);
    }
  };

  const toggleKeyDown = () => {
    setIsKeydownEnabled(!isKeydownEnabled);
    if (!isKeydownEnabled) {
      setIsKeydownEnabled(!isKeydownEnabled);
      setToastMsg([
        {
          alert_style: "alert-success ",
          message: "KeyBoard Enabled",
          toast: true,
        },
      ]);
    } else {
      setIsKeydownEnabled(!isKeydownEnabled);
      setToastMsg([
        {
          alert_style: "alert-info",
          message: "KeyBoard Disabled",
          toast: true,
        },
      ]);
    }
  };
  console.log(isKeydownEnabled);
  return {
    input,
    handleClick,
    clear,
    calculate,
    handleKeyDown,
    toastMsg,
    setToastMsg,
    isKeydownEnabled,
    toggleKeyDown,
  };
};
export default UseCalculator;
