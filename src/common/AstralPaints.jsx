export const AstralPaints = ({ title, subtitle, imageSrc, altText }) => {
    return (
        <div>
            <h6 className="text-sx font-semibold text-gray-600 mb-2">{title}</h6>
            <div className="flex items-center mb-4">
                <h2 className="text-3xl font-bold text-gray-900 mr-6">{subtitle}</h2>
                <img className="object-cover" src={imageSrc} alt={altText} />
            </div>
        </div>
    );
};

