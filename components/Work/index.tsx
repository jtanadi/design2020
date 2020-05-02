import ReactMarkdown from "react-markdown";

import style from "./style";

type WorkType = {
  heroImg: string;
  description: string;
};

export default function Work(props: { work: WorkType }) {
  const { work } = props;
  return (
    <>
      <div className="bio-outer-container">
        <div className="bio-content-container">
          <div className="left-col">
            <img src={work.heroImg} />
          </div>
          <div className="right-col">
            {/* Style has to be specified globally for some reason */}
            <ReactMarkdown className="bio-markdown" source={work.description} />
          </div>
        </div>
      </div>
      <style jsx>{style}</style>
    </>
  );
}
