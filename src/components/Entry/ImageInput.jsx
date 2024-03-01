import React from "react";
import { SiAddthis } from "react-icons/si";

function ImageInput({ setImage, entryData }) {
	const handleImageChange = (e) => {
		setImage(URL.createObjectURL(e.target.files[0]));
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
