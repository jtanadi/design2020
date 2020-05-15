import style from "./style";

import WorkPageImage, { Image } from "../WorkPageImage";
import WorkPageVideo, { Video } from "../WorkPageVideo";

export default ({ content }) => {
  return (
    <>
      <div id="work-page-content">
        <div id="content-wrapper">
          {content.map((contentItem: Image | Video, i: number) => {
            if (i === 0) return null;

            return contentItem.url.endsWith(".mp4") ? (
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
