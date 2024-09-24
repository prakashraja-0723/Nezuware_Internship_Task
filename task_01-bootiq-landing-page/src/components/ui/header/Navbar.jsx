import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="form-control hidden lg:block">
        <input
          type="text"
          placeholder="Search"
          className="input focus:outline-none focus:border-pink-300 bg-base-100 w-24 md:w-[350px] md:h-fit py-[.5rem] input-bordered border-pink-300 focus:shadow focus:shadow-pink-300"
        />
      </div>
      <ul
        className={`hidden lg:flex menu-horizontal menu-md text-4xl tracking-wider font-semibold uppercase leading-[.6rem]`}
      >
        <li>
          <Link href={"/"}>shop</Link>
        </li>
        <li>
          <Link href={"/"}>men</Link>
        </li>
        <li>
          <Link href={"/"}>women</Link>
        </li>
        <li>
          <Link href={"/"}>kids</Link>
        </li>
      </ul>
    </>
  );
};
export default Navbar;
