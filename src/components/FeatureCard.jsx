// src/components/FeatureCard.jsx
import React from 'react';

const FeatureCard = ({ title, description, imageUrl }) => {
    return (
        <div className="dark:bg-metal bg-white-coco p-8 rounded-[32px] shadow-sm">
            {imageUrl && <img src={imageUrl} alt={title} className="mx-auto mb-4 rounded-3xl" />}
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-slate-700 dark:text-slate-300 font-light">{description}</p>
        </div>
    );
};

export default FeatureCard;
