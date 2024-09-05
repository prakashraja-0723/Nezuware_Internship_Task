import React from "react";
import {CgClose} from "react-icons/cg";

const ToastMsg = ({ toastMsg, setToastMsg }) => {
  return (
    <>
      {toastMsg.map((msg, index) => {
        return (
          <div
            className={`toast toast-bottom toast-end ${
              !msg.toast ? "hidden" : "block"
            }`}
            key={index}
          >
            <div className={`alert text-white  text-2xl uppercase px-6 py-6 ${msg.alert_style}`} role="alert">
              {msg.message}
              <button
                className="btn bg-slate-200 text-neutral  float-right  rounded-full "
                aria-label="Close"
                onClick={() => setToastMsg([])}
              ><CgClose/></button>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default ToastMsg;
