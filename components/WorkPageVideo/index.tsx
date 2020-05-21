import { useEffect, useRef } from "react"
import style from "./style";

export type Video = {
  url: string;
};

export default ({ video }) => {
  const { url } = video;

  return (
    <div className="video-wrapper">
      <video autoPlay={true} muted={true} loop={true} controls={false} playsInline={true}>
        <source src={`${url}`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <style jsx>{style}</style>
    </div>
  );
};
