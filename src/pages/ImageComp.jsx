/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import imageCompression from "browser-image-compression";
import { IoChevronBackCircleOutline } from "react-icons/io5";

const ImageComp = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [processImage, setProcessImage] = useState(null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        setSelectedImage(file);
    };

    const handleImageResize = async () => {
        if (selectedImage) {
            try {
                const options = {
                    maxSizeMB: 50,
                    maxWidthOrHeight: 300,
                    useWebWorker: true,
                };
                const compressedImage = await imageCompression(selectedImage, options);
                setProcessImage(compressedImage);
            } catch (error) {
                console.log(error);
            }
        }
    };

    const handleDownloadImage = () => {
        const url = URL.createObjectURL(processImage);
        const link = document.createElement("a");
        link.href = url;
        link.download = "resized_image.jpg";
        link.click();
        URL.revokeObjectURL(url);
    };

    return (
        <div className="">
            <div className="flex justify-center items-center p-6 bg-blue-600 relative">
                <h1 className="text-3xl text-white font-bold">Image Processing</h1>
                <IoChevronBackCircleOutline onClick={() => window.history.back()} className="absolute top-1/2 -translate-y-1/2 left-4 text-white text-5xl cursor-pointer" />
            </div>

            <div className="p-10 rounded-lg shadow-lg">
                <h3 className="mb-1 text-2xl text-blue-500">Image Processing</h3>
                <input type="file" accept="image/*" onChange={handleImageUpload} />
                <button onClick={handleImageResize} className="py-2 px-6 bg-blue-300 rounded-md">Resize this Image</button>
                <hr className="my-4 border-blue-500" />
                {processImage && (
                    <div>
                        <h4 className="my-2">Process Image</h4>
                        <img src={URL.createObjectURL(processImage)} alt="Result" />
                        <button onClick={handleDownloadImage} className="py-2 px-6 bg-blue-300 rounded-md">Download this Image</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ImageComp