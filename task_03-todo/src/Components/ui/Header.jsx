import React from 'react';
import { FaRegStar } from 'react-icons/fa6';
import { BiHomeAlt } from 'react-icons/bi';
import SelectThemes from '@/Components/ui/selectThemes.jsx';
import { FiSun } from 'react-icons/fi';

const Header = ({ children }) => {
  return (
    <div className={`flex items-center justify-between w-full min-h-[4rem] `}>
      <div className={`w-full`}>
        <h1
          className={`text-2xl md:text-3xl lg:text-4xl flex items-center capitalize font-semibold`}
        >
          {children === 'my day' ? (
            <FiSun className={`text-xl md:text-3xl`} />
          ) : children === 'important' ? (
            <FaRegStar className={`text-xl md:text-3xl `} />
          ) : (
            <BiHomeAlt className={`text-xl md:text-3xl `} />
          )}
          &nbsp;{children}
        </h1>
        {children === 'my day' && (
          <p>
            {new Date().toLocaleString('en-us', {
              weekday: 'long',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        )}
      </div>
      <SelectThemes />
    </div>
  );
};
export default Header;
