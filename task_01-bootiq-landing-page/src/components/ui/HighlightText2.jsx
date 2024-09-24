import React from 'react';

const HighlightText2 = ({ children,textStyles="" }) => {
  return (
    <>
      <span
        className={`font-bold uppercase tracking-wide bg-gradient-to-r from-pink-500 to-rose-600 2xl:bg-gradient-to-r 2xl:from-pink-400 2xl:to-rose-400 bg-clip-text text-transparent pr-1 font-barlow-condensed ${textStyles}`}
      >
        {children}
      </span>
    </>
  );
};
export default HighlightText2;
