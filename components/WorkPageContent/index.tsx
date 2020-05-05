import { domain } from "../../utils/endpoints";
import style from "./style";

export default ({ images }) => {
  return (
    <>
      <div id="work-page-content">
        {images.map((image: string, i: number) => (
          <img key={`img-${i}`} src={`${domain}/${image}`} />
        ))}
      </div>
      <style jsx>{style}</style>
    </>
  );
};
