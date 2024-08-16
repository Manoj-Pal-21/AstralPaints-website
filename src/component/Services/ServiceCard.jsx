import React from 'react';

const ServiceCard = ({ title, description, imageUrl, bgColor }) => (
    <div className="relative w-full h-60 overflow-hidden" style={{ backgroundColor: bgColor }}>
        <img
            className="w-full h-full object-cover"
            src={imageUrl}
            alt={title}
        />
        <div className="absolute bottom-4 left-4 bg-yellow-300 text-black p-3">
            <h3 className="text-base font-semibold">{title}</h3>
            <p className="text-xs">{description}</p>
            <a href="#" className="inline-block mt-2 px-3 py-1.5 text-xs font-medium text-yellow-600 bg-white rounded-lg hover:bg-gray-100">
                Read More
            </a>
        </div>
    </div>
);

export default ServiceCard;
