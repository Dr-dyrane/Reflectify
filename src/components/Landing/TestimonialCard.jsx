import React from "react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="max-w-lg mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 mb-8">
      <div className="flex items-center mb-4">
        <img
          src={`/testimonials/${testimonial.image}`}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
            {testimonial.name}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            {testimonial.position}
          </p>
        </div>
      </div>
      <p className="text-gray-700 dark:text-gray-300">{testimonial.text}</p>
    </div>
  );
};

export default TestimonialCard;
