import ReactMarkdown from "react-markdown";
import { domain } from "../../utils/endpoints";
import style from "./style";

type Prop = {
  hero: string;
  title: string;
  description: string;
  studio?: string;
};

export default function WorkHeader(props: Prop) {
  const { hero, title, description } = props;
  return (
    <>
      <div id="work-page-header-outer">
        <div id="work-page-header-container">
          <div className={`spacer bottom left`}></div>
          <div className={`spacer bottom middle`}></div>
          <div className={`spacer bottom right`}></div>

          <div className="left-col">
            <img
              className="hero-img"
              src={`${domain}${hero}`}
              alt={`Hero image for ${title}`}
            />
          </div>
          <div className="right-col">
            <h2>{title}</h2>
            <ReactMarkdown
              className="work-page-header-markdown"
              source={description}
            />
          </div>
        </div>
      </div>
      <style jsx>{style}</style>
    </>
  );
}
