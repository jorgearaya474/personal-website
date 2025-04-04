import Image from "next/image";
import { ImageGalleryProps } from "@/types/types";

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 auto-rows-[150px] lg:auto-rows-[200px]">
      {images.map((image, index) => (
        <div
          key={index}
          className={`relative ${
            index % 5 === 0 ? "col-span-2 row-span-2" : "col-span-1"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
