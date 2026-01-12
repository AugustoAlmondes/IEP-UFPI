import React, { useRef, useState } from "react";
import { FaUpload } from "react-icons/fa";

const ImageUpload: React.FC = () => {
  const [fileName, setFileName] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setImageUrl(URL.createObjectURL(file));
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div
      className={`border-2 border-dashed rounded-xl px-5 py-10 text-center cursor-pointer bg-[var(--color-gray2)] mb-5 transition-colors duration-300 ${
        imageUrl ? "border-pink-500" : "border-[var(--color-gray)]"
      }`}
      onClick={handleClick}
    >
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
        accept="image/*"
      />
      <div className="flex flex-col items-center gap-2.5">
        <FaUpload className="text-2xl text-gray-500" />
        <span className="text-base font-semibold text-gray-700">
          {fileName || "Carregar imagem"}
        </span>
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Preview"
            className="mt-2 max-h-40 rounded-lg object-contain"
          />
        )}
        <p className="text-sm text-gray-500 m-0">
          Clique para selecionar uma imagem (JPG, PNG ou GIF)
        </p>
        <button
          type="button"
          className="bg-pink text-white px-4 py-2 rounded-lg text-sm font-medium mt-2 cursor-pointer transition-colors duration-300 hover:bg-darkpink"
        >
          Carregar
        </button>
      </div>
    </div>
  );
};

export default ImageUpload;