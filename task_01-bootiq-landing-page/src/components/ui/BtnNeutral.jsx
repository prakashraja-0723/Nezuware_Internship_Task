import React from 'react';
import Link from 'next/link';

const BtnNeutral = ({ btnStyles = '', children, url="/" }) => {
  return (
    <>
      <Link href={url}
        className={`btn btn-neutral tracking-wider text-base-100 ${btnStyles}`}
      >
        {children}
      </Link>
    </>
  );
};
export default BtnNeutral;
