import React from 'react';

const HighlightText1 = ({ children , textStyles=""}) => {
  return (
    <>
      <span
        className={`font-bold text-2xl uppercase tracking-wide bg-gradient-to-r from-pink-500 to-rose-600 2xl:bg-gradient-to-r 2xl:from-pink-400 2xl:to-rose-400 bg-clip-text text-transparent pr-2 font-barlow-condensed transition-all ${textStyles}`}
      >
        {children}
      </span>
    </>
  );
};
export default HighlightText1;
