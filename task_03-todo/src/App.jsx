import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Important from '@/pages/Important.jsx';
import Tasks from '@/pages/Tasks.jsx';
import MyDay from '@/pages/MyDay.jsx';
import { Layout } from '@/pages/layout.jsx';
import useResetMyDay from '@/hooks/useResetMyDay.js';

const App = () => {
  const {resetMyDayAtMidnight} = useResetMyDay();
  resetMyDayAtMidnight();
  return (
    <>
      <Layout >
        <Routes>
          <Route path="/" element={<MyDay />} />
          <Route path="/important" element={<Important />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </Layout>
    </>
  );
};
export default App;
