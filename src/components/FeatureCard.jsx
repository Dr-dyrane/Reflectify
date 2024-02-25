// src/components/FeatureCard.jsx
import React from 'react';

const FeatureCard = ({ title, description, imageUrl }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            {imageUrl && <img src={imageUrl} alt={title} className="w-12 h-12 mx-auto mb-4" />}
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default FeatureCard;
