import React from 'react';

const Blog = () => {
    return (
        <div className="p-6 lg:p-12">
            <h6 className="text-sx font-semibold text-gray-600 mb-2">
                Our Blog
            </h6>

            <div className="flex items-center mb-4">
                <h2 className="text-3xl font-bold text-gray-900 mr-6">
                    Latest
                </h2>
                <img
                    className="object-cover"
                    src="images/blog-shade.png"
                    alt="Dreams"
                />
            </div>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
                {/* Left Side Images */}
                <div className="flex flex-col gap-4 lg:w-1/3">
                    <div className="relative w-full h-48 bg-gray-300">
                        <img
                            src="images/blog-sofa.png"
                            alt="Blog Image 1"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-[#00000080]"></div>
                        <div className="absolute bottom-0 left-0 p-2 text-white">
                            <p className="text-[10px] leading-[22px]">10 Jan 2024</p>
                            <p className="text-[15px] leading-[22px]">How to choose the perfect</p>
                            <p className="text-[15px] leading-[22px]">wallcolour for your office</p>
                        </div>
                    </div>
                    <div className="relative w-full h-48 bg-gray-300">
                        <img
                            src="images/blog-bad.png"
                            alt="Blog Image 2"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-[#00000080]"></div>
                        <div className="absolute bottom-0 left-0 p-2 text-white">
                            <p className="text-[10px] leading-[22px]">10 Jan 1524</p>
                            <p className="text-[15px] leading-[22px]">How to choose the perfect</p>
                            <p className="text-[15px] leading-[22px]">wallcolour for your office</p>
                        </div>
                    </div>
                </div>

                {/* Center Image */}
                <div className="relative w-full lg:w-1/3 h-100 bg-gray-300">
                    <img
                        src="images/blog-door.png"
                        alt="Blog Image Center"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#00000080]"></div>
                    <div className="absolute bottom-0 left-0 p-2 text-white">
                        <p className="text-[10px] leading-[22px]">20 Jan 1524</p>
                        <p className="text-[15px] leading-[22px]">10 stylish cream colour</p>
                        <p className="text-[15px] leading-[22px]">combination for your home</p>
                        <button className="mt-2 px-4 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-gray-100">
                            Read More
                        </button>
                    </div>
                </div>

                {/* Right Side Images */}
                <div className="flex flex-col gap-4 lg:w-1/3">
                    <div className="relative w-full h-48 bg-gray-300">
                        <img
                            src="images/blog-tv.png"
                            alt="Blog Image 3"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-[#00000080]"></div>
                        <div className="absolute bottom-0 left-0 p-2 text-white">
                            <p className="text-[10px] leading-[22px]">10 Jan 1524</p>
                            <p className="text-[15px] leading-[22px]">How to choose the perfect</p>
                            <p className="text-[15px] leading-[22px]">wallcolour for your office</p>
                        </div>
                    </div>
                    <div className="relative w-full h-48 bg-gray-300">
                        <img
                            src="images/blog-sofa2.png"
                            alt="Blog Image 4"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-[#00000080]"></div>
                        <div className="absolute bottom-0 left-0 p-2 text-white">
                            <p className="text-[10px] leading-[22px]">10 Jan 1524</p>
                            <p className="text-[15px] leading-[22px]">How to choose the perfect</p>
                            <p className="text-[15px] leading-[22px]">wallcolour for your office</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
