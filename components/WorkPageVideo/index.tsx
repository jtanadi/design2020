import { domain } from "../../utils/endpoints";
import style from "./style";

export type Video = {
  url: string;
};

export default ({ video }) => {
  const { url } = video;
  return (
    <div className="video-wrapper">
      <video autoPlay={true} muted={true} loop={true} controls={false}>
        <source src={`${domain}${url}`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <style jsx>{style}</style>
    </div>
  );
};
