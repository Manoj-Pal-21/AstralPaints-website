import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';
import "./App.css"

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
