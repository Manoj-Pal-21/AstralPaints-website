import React from 'react';
import { AstralPaints } from '../../common/AstralPaints';

const About = () => {
    return (
        <div className="flex flex-col items-center px-4">
            <div className="container mx-auto flex flex-col lg:flex-row-reverse items-center">

                {/* Right side image */}
                <div className="lg:w-1/2 flex justify-center mb-8 lg:mb-0">
                    <img
                        className="w-full h-auto shadow-lg"
                        src="images/sofa3.png"
                        alt="Astral Paints"
                    />
                </div>

                {/* Left side content */}
                <div className="lg:w-1/2 flex flex-col items-start p-6 lg:p-12">
                    <AstralPaints
                        title="About Astral Paints"
                        subtitle="Bringing your dreams to life"
                        imageSrc="images/about-shade.png"
                        altText="Dreams"
                    />

                    <p className="text-gray-700 mb-6">
                        Lorem ipsum dolor sit amet consectetur. Placerat elementum lobortis phasellus porttitor amet odio tempor. Ac molestie fames id urna dui posuere ultricies aliquam. Gravida et ac ac donec. Lacus est diam at in pharetra velit luctus id pellentesque.
                    </p>
                    <p className="text-gray-700 mb-6">
                        Lorem ipsum dolor sit amet consectetur. Placerat elementum lobortis phasellus porttitor amet odio tempor. Ac molestie fames id urna dui posuere ultricies aliquam. Gravida et ac ac donec. Lacus est diam at in pharetra velit luctus id pellentesque.
                    </p>
                    <a
                        href="#"
                        className="inline-block px-6 py-3 border-2 border-orange-500 rounded-full text-orange-500 hover:bg-orange-500 hover:text-white transition duration-300"
                    >
                        Read More
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;
