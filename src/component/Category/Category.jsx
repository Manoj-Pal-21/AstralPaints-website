import React from 'react';

const Category = () => {
    return (
        <div className="container mx-auto px-4">
            <div className="lg:w-1/2 flex flex-col items-start p-3 lg:p-6">
                <h6 className="text-sx font-semibold text-gray-600 mb-2">
                    Category
                </h6>

                <div className="flex flex-col lg:flex-row items-center">
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 lg:mb-0 lg:mr-6">
                        Wide range of Colours
                    </h2>
                    <img
                        className="object-cover w-full lg:w-auto"
                        src="images/category-shade.png"
                        alt="Dreams"
                    />
                </div>
            </div>
            <div className="flex flex-col lg:flex-row p-6">
                <div className="flex flex-col lg:flex-row lg:gap-4">
                    {/* Left Side */}
                    <div className="w-full lg:w-1/2 relative mb-4 lg:mb-0">
                        <img
                            src="images/cat-sofa.png"
                            alt="Left Image"
                            className="w-full h-auto object-cover"
                        />
                        <div
                            className="absolute bottom-0 left-0 right-0 p-4 rounded-b-lg flex justify-between items-center"
                            style={{ backgroundColor: '#FF911999' }}
                        >
                            <span className="text-white font-semibold">Interior Paints</span>
                            <a
                                href="#"
                                className="inline-block px-6 py-3 border-2 border-orange-500 rounded-full text-orange-500 bg-white transition duration-300"
                            >
                                Read More
                            </a>

                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
                        <div className="relative group">
                            <img
                                src="images/cat-finishing.png"
                                alt="Right Image 1"
                                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute bottom-4 left-4 right-4 p-2">
                                <p className="text-sm font-semibold text-white">Exterior Paints</p>
                            </div>
                        </div>
                        <div className="relative group">
                            <img
                                src="images/cat-finishing.png"
                                alt="Right Image 2"
                                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute bottom-4 left-4 right-4 p-2">
                                <p className="text-sm font-semibold text-white">Water Proofing</p>
                            </div>
                        </div>
                        <div className="relative group">
                            <img
                                src="images/cat-instrument.png"
                                alt="Right Image 3"
                                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute bottom-4 left-4 right-4 p-2">
                                <p className="text-sm font-semibold text-white">Undercoats</p>
                            </div>
                        </div>
                        <div className="relative group">
                            <img
                                src="images/cat-instrument.png"
                                alt="Right Image 4"
                                className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute bottom-4 left-4 right-4 p-2">
                                <p className="text-sm font-semibold text-white">Painting Tools</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Category;
