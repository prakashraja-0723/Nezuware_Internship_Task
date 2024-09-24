import React from 'react';

const HighlightText3 = ({ children, textStyles = '' }) => {
  return (
    <>
      <span
        className={`font-bold uppercase tracking-wide bg-gradient-to-br from-rose-600 to-rose-300 bg-clip-text text-transparent pr-1 font-barlow-condensed ${textStyles}`}
      >
        {children}
      </span>
    </>
  );
};
export default HighlightText3;
