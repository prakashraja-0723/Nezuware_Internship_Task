import React from "react";
import Header from "@/components/Header";
import Footer from '@/components/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <div
        className={`container max-w-full 2xl:max-w-[1980px]  mx-auto relative h-screen scroll-smooth snap-y snap-mandatory overflow-y-scroll transition-all scrollBar`}
      >
        <Header />
        {children}
        <Footer/>
      </div>
    </>
  );
};
export default Layout;
