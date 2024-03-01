import React from "react";
import { SiAddthis } from "react-icons/si";
import ImageApi from "../../api/ImageApi";

function ImageInput({ setImage, entryData }) {
	const handleImageChange = (e) => {
		const file = e.target.files[0];
		const reader = new FileReader();

		reader.onload = (event) => {
			const imageData = event.target.result;
			// Create new image entry using API
			ImageApi.createImage(imageData);

			// Set the image data directly as the URL
			setImage(imageData);
		};

		// Read the file as a data URL
		reader.readAsDataURL(file);
	};
	return (
		<div className="relative w-full mb-8">
			<img
				src={entryData.image}
				alt="Entry Image"
				className="w-full h-48 object-cover mb-4 rounded-[32px] z-10"
			/>
			<label
				htmlFor="imageInput"
				className="absolute bottom-0 right-0 cursor-pointer text-golden"
			>
				<SiAddthis size={40} />
				<input
					type="file"
					id="imageInput"
					accept="image/*"
					className="hidden"
					onChange={handleImageChange}
				/>
			</label>
		</div>
	);
}

export default ImageInput;
