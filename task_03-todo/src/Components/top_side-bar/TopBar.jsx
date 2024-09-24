import React from 'react';
import Logo from '@/Components/ui/top-bar/logo.jsx';
import Time from '@/Components/ui/top-bar/time.jsx';

const TopBar = () => {
  return (
    <>
      <header
        className={`flex items-center justify-between w-full h-10 px-4 md:px-6 lg:px-8 bg-inherit text-[var(--clr-1)]`}
      >
        <Logo />
        <Time />
      </header>
    </>
  );
};
export default TopBar;
