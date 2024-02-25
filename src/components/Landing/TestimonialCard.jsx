import React from "react";

const TestimonialCard = ({ testimonial }) => {
	return (
		<div className="max-w-lg mx-auto bg-white dark:bg-gray-900 rounded-[32px] shadow-lg p-8 mb-8">
			<div className="flex flex-col items-center mb-4 space-y-4">
				<img
					src={`/testimonials/${testimonial.image}`}
					alt={testimonial.name}
					className="rounded-full"
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
			<p className="text-gray-700 dark:text-gray-300 font-thin">
				"{testimonial.text}"
			</p>
		</div>
	);
};

export default TestimonialCard;
