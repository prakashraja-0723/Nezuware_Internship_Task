import React from 'react';
import Link from 'next/link';

const SideMenu = () => {
  return (
    <>
      <div className="drawer navbar-start lg:hidden">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="my-drawer" className="drawer-button cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-100 uppercase text-lg min-h-full w-80 p-4 font-semibold tracking-widest font-barlow-semi-condensed">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="relative py-6 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </label>
            <li>
              <Link href={'/'}>shop</Link>
            </li>
            <li>
              <Link href={'/'}>men</Link>
            </li>
            <li>
              <Link href={'/'}>women</Link>
            </li>
            <li>
              <Link href={'/'}>kids</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default SideMenu;
