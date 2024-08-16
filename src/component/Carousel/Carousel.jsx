import React, { useState, useEffect } from 'react';

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

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Carousel Container */}
      <div className="relative w-full h-4/5 overflow-hidden">
        <img
          src={slides[currentSlide].image}
          alt={slides[currentSlide].title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-start p-8 z-30">
          <div className="text-white max-w-lg">
            <h1 className="text-4xl font-bold mb-4">{slides[currentSlide].title}</h1>
            <p className="mb-6">{slides[currentSlide].description}</p>
            <button className="bg-white text-black py-2 px-4 rounded-full">Read More</button>
          </div>
        </div>
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl bg-black p-2 rounded-full z-40"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl bg-black p-2 rounded-full z-40"
        >
          &gt;
        </button>
      </div>
      {/* Rambo Image */}
      <div className="absolute bottom-[-100px] left-0 w-full">
        <img
          src="images/rambo.png"
          alt="Rambo"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Carousel;
