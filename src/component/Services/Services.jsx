import React from 'react';
import ServiceCard from './ServiceCard';
import { AstralPaints } from '../../common/AstralPaints';

const Services = () => {
    return (
        <div className="p-6 lg:p-12">
            <AstralPaints
                title="Services"
                subtitle=" Make Your Life Comfortable"
                imageSrc="images/services-shade.png"
                altText="Dreams"
            />

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
