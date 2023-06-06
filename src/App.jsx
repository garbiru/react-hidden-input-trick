import { useRef, useState } from "react";
import { PhotoIcon } from "@heroicons/react/24/solid";

import "./App.css";

function App() {
	const [image, setImage] = useState(null);
	const imageRef = useRef();

	return (
		<>
			<header>
				<div className="flex justify-center items-center h-24 bg-gradient-to-r from-sky-500 to-indigo-500 p-16">
					<h1 className="text-white uppercase text-7xl font-bold">
						INPUT FILE HIDDEN
					</h1>
				</div>
			</header>

			<div className="max-w-2xl mx-auto">
				<div className="flex flex-col gap-3 mx-auto mt-20 border rounded shadow-lg p-5">
					<h3 className="text-lg font-medium leading-6 text-gray-900 pb-2">
						Add info
					</h3>

					<input
						type="text"
						placeholder="Enter something"
						className="w-full border border-gray-300 rounded-md outline-none p-5"
					/>

					<button
						type="button"
						className="w-full flex-1 border border-gray-300 rounded outline-none p-5 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
						onClick={() => {
							imageRef.current.click();
						}}
					>
						<PhotoIcon className="h-6 w-6 mr-2 inline-block" />
						Upload Image
					</button>

					{image && (
						<img
							src={URL.createObjectURL(image)}
							height={200}
							width={200}
							alt="Upload Image"
							className="w-full h-44 object-cover filter hover:grayscale transition-all duration-150 cursor-not-allowed"
							onLoad={() => {
								URL.revokeObjectURL(image);
							}}
							onClick={() => {
								imageRef.current.value = null;
								setImage(null);
							}}
						/>
					)}

					<input
						ref={imageRef}
						onChange={(e) => {
							setImage(e.target.files[0]);
						}}
						type="file"
						hidden
					/>
				</div>
			</div>
		</>
	);
}

export default App;
