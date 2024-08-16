import React, { useState } from 'react';

const slides = [
  { id: 1, image: 'images/sofa.png', title: 'Interior Emulsions', description: 'Excellent fungal resistance | Smooth finish' },
  { id: 2, image: 'images/sofa2.png', title: 'Interior Emulsions', description: 'Excellent fungal resistance | Smooth finish' },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={slides[currentSlide].image}
            alt="Carousel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-start p-8 bg-gradient-to-r from-black via-transparent to-transparent">
            <div className="text-white max-w-lg">
              <h1 className="text-4xl font-bold mb-4">{slides[currentSlide].title}</h1>
              <p className="mb-6">{slides[currentSlide].description}</p>
              <button className="bg-white text-black py-2 px-4 rounded-full">Read More</button>
            </div>
          </div>
        </div>
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl bg-black p-2 rounded-full"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl bg-black p-2 rounded-full"
        >
          &gt;
        </button>
      </div>
      {/* <div className="">
        <img
          src="images/rambo.png"
          alt="rambo"
        />
      </div> */}
    </>
  );
};

export default Carousel;
