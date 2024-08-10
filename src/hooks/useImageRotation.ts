import * as React from "react";

interface ImageObject {
  src: string;
  gallery_alt_text: string;
}
export function useImageRotation(
  images: ImageObject[],
  interval: number = 5000
) {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  React.useEffect(() => {
    if (images.length === 0) return;

    // Only rotate if there are 3 or more images
    const rotationCount = Math.min(3, images.length);

    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % rotationCount);
    }, interval);

    return () => clearInterval(imageInterval);
  }, [images, interval]);

  return images[currentImageIndex];
}
