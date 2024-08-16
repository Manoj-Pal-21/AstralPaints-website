import React from 'react';
import Carousel from '../../component/Carousel/Carousel';
import About from '../../component/About/About';
import Category from '../../component/Category/Category';
import Services from '../../component/Services/Services';
import Journey from '../../component/Journey/Journey';
import Blog from '../../component/Blog/Blog';
import Colours from '../../component/Colours/Colours';

const Home = () => {
  return (
    <div className="relative">
      {/* Vertical Rainbow Gradient Line */}
      <div
        className="absolute left-0 top-0 h-full bg-gradient-to-b from-red-500 via-green-500 to-blue-500"
        style={{ width: '15px' }}
      ></div>
      <Carousel />
      <About />
      <Category />
      <Services />
      <Colours />
      <Journey />
      <Blog />
    </div>
  );
};

export default Home;
