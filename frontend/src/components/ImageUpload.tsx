import React, { useRef, useState, useEffect } from "react";
import { FaUpload } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { toast } from "react-toastify";

interface ImageUploadProps {
  onFileChange?: (file: File | null) => void;
  initialImage?: string | null;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onFileChange, initialImage }) => {
  const [fileName, setFileName] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(initialImage || null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (initialImage) {
      setImageUrl(initialImage);
    }
  }, [initialImage]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;
    if (file) {
      if (
        file.name.includes(".jpg") ||
        file.name.includes(".jpeg") ||
        file.name.includes(".png") ||
        file.name.includes(".gif")) {
        setFileName(file.name);
        setImageUrl(URL.createObjectURL(file));
        onFileChange?.(file);
      } else {
        toast.error("Tipo de imagem não suportado");
        setFileName(null);
        setImageUrl(null);
        onFileChange?.(null);
      }
    } else {
      setFileName(null);
      setImageUrl(null);
      onFileChange?.(null);
    }
    event.target.value = "";
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div
      className={`border-2 border-dashed rounded-xl px-5 py-10 text-center cursor-pointer bg-gray2 mb-5 transition-colors duration-300 ${imageUrl ? "border-pink-500" : "border-gray"
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
        {!fileName && !imageUrl &&
          <FaUpload className="text-2xl text-gray-500" />
        }
        <span className="text-base font-semibold text-gray-700">
          {fileName || (!imageUrl ? "Carregar imagem" : "Imagem selecionada")}
        </span>
        {imageUrl && (
          <div className="w-max h-max relative">
            <IoClose
              onClick={() => {
                setFileName(null);
                setImageUrl(null);
                onFileChange?.(null);
              }}
              size={25}
              className="absolute top-[-3px] -right-1.5 bg-darkpink text-white cursor-pointer hover:bg-pink transition rounded-xl" />
            <img
              src={imageUrl}
              alt="Preview"
              className="mt-2 max-h-40 rounded-lg object-contain"
            />
          </div>
        )}
        {
          !fileName && !imageUrl &&
          <p className="text-sm text-gray-500 m-0">
            Clique para selecionar uma imagem (JPG, PNG ou GIF)
          </p>
        }
        {!imageUrl &&
          <button
            type="button"
            className="btn-lightpink">
            Carregar
          </button>
        }
      </div>
    </div>
  );
};

export default ImageUpload;
