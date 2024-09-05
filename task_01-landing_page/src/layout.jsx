import React from "react";
import NavBar from "./components/NavBar.jsx";
import UseStickyBar from "./hooks/UseStickyBar.js";

const Layout = ({ children }) => {
  const { stickyBarHandler, stickyBar } = UseStickyBar();
  window.addEventListener("scroll", stickyBarHandler);
  return (
    <div className={`container mx-auto min-h-screen 2xl:max-w-[1980px] text-black`}>
      <section
        className={`fixed z-40 w-full flex items-center transition-all duration-500 text-white ${
          !stickyBar ? "h-32 justify-center shadow-none" : `h-16 justify-center shadow backdrop-blur `
        }`}
      >
        <NavBar stickyBarHandler={stickyBarHandler} stickyBar={stickyBar} />
      </section>
      {children}
    </div>
  );
};
export default Layout;
