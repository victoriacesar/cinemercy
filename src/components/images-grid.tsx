import Image from 'next/image';

interface ImageGridProps {
  images: {
    alt: string;
    url: string;
  }[];
}

const ImageGrid = ({ images }: ImageGridProps) => {
  const renderImages = (startIndex: number, endIndex: number) => {
    return images.slice(startIndex, endIndex).map((image, index) => (
      <div key={index} className="relative h-56 w-36">
        <Image
          src={`https://image.tmdb.org/t/p/w500${image.url}`}
          alt={image.alt || `Image ${startIndex + index}`}
          fill
          className="object-cover rounded-lg"
        />
      </div>
    ));
  };

  return (
    <div className="flex gap-3">
      <div className="flex flex-col gap-4">
        {renderImages(0, 3)}
      </div>
      <div className="flex flex-col gap-4 mb-36 -mt-32">
        {renderImages(3, 7)}
      </div>
      <div className="flex flex-col gap-4">
        {renderImages(7, 10)}
      </div>
      <div className="flex flex-col gap-4 mb-36 -mt-32">
        {renderImages(10, 14)}
      </div>
    </div>
  );
};

export default ImageGrid;
