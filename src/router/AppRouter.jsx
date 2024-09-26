import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '@/pages/LandingPage';

const AppRouter = () => {
  let a = 1;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
