import React from "react";
import SideMenu from "@/components/ui/header/SideMenu";
import Logo from "@/components/ui/header/Logo";
import CartUi from "@/components/ui/header/CartUi";
import Navbar from "@/components/ui/header/Navbar";
import ProfileUi from "@/components/ui/header/ProfileUi";

const Header = () => {
  return (
    <>
      <section className="navbar bg-transparent p-0 absolute px-2 lg:px-4 z-[999] ">
        <SideMenu />
        <Logo />
        <div className="navbar-end lg:navbar-center lg:w-fit lg:flex-1 gap-2 lg:gap-6 -z-10 ">
          <Navbar />
          <CartUi />
          <ProfileUi />
        </div>
      </section>
    </>
  );
};
export default Header;
