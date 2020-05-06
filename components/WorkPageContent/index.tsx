import style from "./style";

import WorkPageImage, { Image } from "../WorkPageImage";

export default ({ images }) => {
  return (
    <>
      <div id="work-page-content">
        {images.map((image: Image, i: number) => (
          <WorkPageImage key={`img-${i}`} image={image} />
        ))}
      </div>
      <style jsx>{style}</style>
    </>
  );
};
