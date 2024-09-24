import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';
import { DataProvider } from './context/DataContext'
import "./App.css"

const App = () => {
  return (
    <>
      <DataProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </DataProvider>
    </>
  );
};

export default App;
