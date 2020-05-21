import { useState, useEffect } from "react";
import { domain } from "../../utils/endpoints";

import style from "./style";

export type Image = {
  url: string;
  detailUrl?: string;
};

export default ({ image }) => {
  const [imgSrc, setImgSrc] = useState(image.url);
  const [showDetail, setShowDetail] = useState(false);

  useEffect(() => {
    // Preload detail image
    if (image.detailUrl) {
      const img = new Image();
      img.src = `${image.detailUrl}`;
    }
  }, []);

  useEffect(() => {
    if (showDetail) {
      setImgSrc(image.detailUrl);
    } else {
      setImgSrc(image.url);
    }
  }, [showDetail]);

  const handleOnClick = () => {
    if (!image.detailUrl) return;
    setShowDetail((prev) => !prev);
  };

  return (
    <>
      <img
        className={image.detailUrl ? "detailable" : ""}
        src={`${imgSrc}`}
        onClick={handleOnClick}
      />
      <style jsx>{style}</style>
    </>
  );
};
