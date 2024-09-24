import React from 'react';
import useThemes from '@/hooks/useThemes.js';
import TopBar from '@/Components/top_side-bar/TopBar.jsx';
import MenuSideBar from '@/Components/top_side-bar/MenuSideBar.jsx';
import Header from '@/Components/ui/Header.jsx';
import InputBox from '@/Components/ui/inputBox.jsx';

export const Layout = ({ children }) => {
  const {
    pathname,
    defaultTheme: { myDay_theme, tasks_theme, important_theme },
  } = useThemes();

  const pageTitle =
    pathname === '/' || pathname === ''
      ? 'my day'
      : pathname === '/important'
      ? 'important'
      : 'tasks';
  const pageName =
    pathname === '/' || pathname === ''
      ? 'myDay'
      : pathname === '/important'
      ? 'important'
      : 'tasks';
  return (
    <section
      className={`w-screen h-dvh bg-[var(--dark-300)] overflow-clip flex flex-col`}
    >
      <TopBar />
      <main
        className={`w-full h-[var(--h-fit)] flex items-center justify-between relative`}
      >
        <MenuSideBar />
        <div
          className={`bg-[var(--dark-400)] absolute top-0 left-14 md:left-16 lg:left-80 flex-1 rounded-tl-lg lg:rounded-tl-xl px-2 py-4 md:p-5 lg:p-8 flex flex-col w-[var(--fit)] md:w-[var(--md-fit)] lg:w-[var(--lg-fit)] h-full`}
          style={{
            color:
              pathname === '/' || pathname === ''
                ? myDay_theme
                : pathname === '/important'
                ? important_theme
                : tasks_theme,
          }}
        >
          <Header>{pageTitle}</Header>
          {children}
          <InputBox name={pageName} />
        </div>
      </main>
    </section>
  );
};
