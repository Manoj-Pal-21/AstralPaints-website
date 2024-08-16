import React from 'react';

const colors = [
    { name: 'Light Peach', code: '#FAE0B2' },
    { name: 'Pale Pink', code: '#FBC9C3' },
    { name: 'Sky Blue', code: '#00C1DE' },
    { name: 'Royal Blue', code: '#0060AF' },
    { name: 'Dark Red', code: '#800404' },
    { name: 'Golden Yellow', code: '#ECA628' }
];


const Colours = () => {
    return (
        <div className="p-6 lg:p-12">
            <h6 className="text-sx font-semibold text-gray-600 mb-2">
                Colors
            </h6>

            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                    <h2 className="text-3xl font-bold text-gray-900 mr-6">
                        Popular Colours
                    </h2>
                    <img
                        className="object-cover"
                        src="images/color-shade.png"
                        alt="Dreams"
                    />
                </div>
                <button
                    className="bg-transparent border-2 border-[#00AE44] text-[#00AE44] px-4 py-2 rounded-full hover:bg-[#00AE44] hover:text-white transition-colors duration-300"
                >
                    Explore More
                </button>
            </div>
            <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {colors.map((color, index) => (
                    <div
                        key={index}
                        className="relative flex flex-col items-center p-4 transition-all duration-300 ease-in-out rounded-lg border-2 border-white hover:border-transparent hover:outline hover:outline-2 hover:outline-blue-500 w-full h-full"
                    >
                        <div
                            className="w-full h-32 sm:h-40 lg:h-48"
                            style={{ backgroundColor: color.code }}
                        />
                        <div className="flex-1 flex flex-col justify-end mt-2 text-center">
                            <p className="text-sm">Color Code</p>
                            <p className="text-xs text-gray-500">{color.code}</p>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                            <p className="text-lg font-semibold">{color.name}</p>
                        </div>
                    </div>
                ))}
            </div>






        </div>
    );
};

export default Colours;
