import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

const DynamicImage = ({
  imageName,
  alt,
}: {
  imageName: string;
  alt: string;
}) => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const loadImage = async () => {
      try {
        const image = await import(
          `../../../assets/img/movies/${imageName}.jpg`
        );
        setImageSrc(image.default);
      } catch (error) {
        console.error("Error loading image:", error);
      }
    };

    loadImage();
  }, [imageName]);

  if (!imageSrc) {
    return (
      <div
        style={{ minHeight: "337px", minWidth: "225px" }}
        className="rounded-xl flex justify-center items-center w-full bg-black/50 backdrop-blur-xl text-white text-center"
      >
        <Typography variant="body1" className="m-auto">
          <strong>Loading...</strong>
        </Typography>
      </div>
    );
  }

  return (
    <img
      height={337}
      width={225}
      className="h-full w-full rounded-xl"
      src={imageSrc}
      alt={alt}
      loading="lazy"
    />
  );
};
export default DynamicImage;
