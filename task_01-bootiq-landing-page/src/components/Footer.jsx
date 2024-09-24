import React from 'react';
import Logo from '@/components/ui/header/Logo';
import HighlightText2 from '@/components/ui/HighlightText2';

const Footer = () => {
  return (
    <>
      {/*<footer*/}
      {/*  className="footer h-56 items-center bg-gray-900 text-base-100 px-10 snap-start sm:snap-align-none md:snap-start">*/}
      <footer
        className="footer bg-base-100 container mx-auto text-base-content p-10 snap-start sm:snap-align-none md:snap-start flex flex-wrap justify-center sm:justify-between w-full">
        <aside>
          <Logo/>
          <p>
            <HighlightText2>BootiQ</HighlightText2>Fashion Store
            <br />
            Providing reliable and affordable fashion products
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Shop</h6>
          <a className="link link-hover">Men</a>
          <a className="link link-hover">Women</a>
          <a className="link link-hover">Kids</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <footer>
        
        </footer>
      </footer>
      <aside className="footer footer-center bg-neutral text-white p-4">
        <p>Copyright © {new Date().getFullYear()} - All right reserved by BootiQ Fashion Store</p>
      </aside>
    </>
  );
};
export default Footer;
