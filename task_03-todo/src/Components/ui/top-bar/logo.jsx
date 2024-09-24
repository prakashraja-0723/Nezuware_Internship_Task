import React from 'react';
import { SiTicktick } from 'react-icons/si';

const Logo = () => {
  return (
    <span
      className={`flex items-center justify-center gap-1 text-base font-medium`}
    >
      <SiTicktick />
      To Do
    </span>
  );
};
export default Logo;
