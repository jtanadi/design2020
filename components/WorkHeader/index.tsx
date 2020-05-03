import ReactMarkdown from "react-markdown";
import style from "./style";

type Prop = {
  heroImg: string;
  title: string;
  description: string;
  studio?: string;
};

export default function WorkHeader(props: Prop) {
  const { heroImg, title, description } = props;
  return (
    <>
      <div className="work-outer-container">
        <div className="work-content-container">
          <div className={`spacer bottom left`}></div>
          <div className={`spacer bottom middle`}></div>
          <div className={`spacer bottom right`}></div>

          <div className="left-col">
            <img
              className="hero-img"
              src={`data:image/*;base64,${heroImg}`}
              alt={`Hero image for ${title}`}
            />
          </div>
          <div className="right-col">
            <h2>{title}</h2>
            <ReactMarkdown className="work-header" source={description} />
          </div>
        </div>
      </div>
      <style jsx>{style}</style>
    </>
  );
}
