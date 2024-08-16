import React from 'react';
import ServiceCard from './ServiceCard'; // Adjust the import path as necessary

const Services = () => {
    return (
        <div className="p-6 lg:p-12">
            <h6 className="text-sx font-semibold text-gray-600 mb-2">
                Services
            </h6>

            <div className="flex items-center mb-4">
                <h2 className="text-3xl font-bold text-gray-900 mr-6">
                    Make Your Life Comfortable
                </h2>
                <img
                    className="object-cover"
                    src="images/services-shade.png"
                    alt="Dreams"
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <ServiceCard
                    title="Wall Painting"
                    description="Lorem ipsum dolor sit amet consectetur."
                    imageUrl="images/ser-picture.png"
                    bgColor="#FFE710"
                />
                <ServiceCard
                    title="Water Solution"
                    description="Lorem ipsum dolor sit amet consectetur."
                    imageUrl="images/ser-wall.png"
                    bgColor="#FFE710"
                />
                <ServiceCard
                    title="Painting"
                    description="Lorem ipsum dolor sit amet consectetur."
                    imageUrl="images/ser-light.png"
                    bgColor="#FFE710"
                />
            </div>
        </div>
    );
};

export default Services;
