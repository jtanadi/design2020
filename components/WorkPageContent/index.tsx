import style from "./style";

import WorkPageImage, { Image } from "../WorkPageImage";
import WorkPageVideo, { Video } from "../WorkPageVideo";

export default ({ content }) => {
  return (
    <>
      <div id="work-page-content">
        <div id="content-wrapper">
          {content.map((contentItem: Image | Video, i: number) => {
            return /\.mp4/.test(contentItem.url) ? (
              <WorkPageVideo key={`vid-${i}`} video={contentItem} />
            ) : (
              <WorkPageImage key={`img-${i}`} image={contentItem} />
            );
          })}
        </div>
        <style jsx>{style}</style>
      </div>
    </>
  );
};
