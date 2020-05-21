import { ReactElement } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

import Tag from "../Tag";
import style from "./style";

export interface WorkInterface {
  id: string;
  title: string;
  description: string;
  hero?: string;
  tags?: string[];
}

function _WorkCard(props: { work: WorkInterface; empty?: boolean }) {
  const {
    work: { title, hero, tags, description },
    empty,
  } = props;

  return (
    <>
      <div className="spacer top-left"></div>
      <div className="spacer top-right"></div>
      <div className="spacer bottom-left"></div>
      <div className="spacer bottom-right"></div>

      <div className={`card-container ${empty ? "empty" : ""}`}>
        <h2>{title}</h2>

        <div className="left-container">
          {hero ? <img src={`${hero}`} /> : null}
          <ul className="tag-container">
            {tags ? tags.map((tag, i) => <Tag key={i} text={tag} />) : null}
          </ul>
        </div>

        <div className="right-container">
          {description ? (
            <ReactMarkdown className="work-description" source={description} />
          ) : null}
        </div>
      </div>
      <style jsx>{style}</style>
    </>
  );
}

function withLink(id: string, Component: ReactElement): ReactElement {
  return (
    <>
      <Link href={`/work/${id}`}>
        <a>{Component}</a>
      </Link>
      <style jsx>{style}</style>
    </>
  );
}

export default function WorkCard(props: { work: WorkInterface }) {
  const { work } = props;
  return (
    <div className="card-link">
      {work.id === "empty" ? (
        <_WorkCard work={work} empty={true} />
      ) : (
        withLink(work.id, <_WorkCard work={work} />)
      )}

      <style jsx>{style}</style>
    </div>
  );
}
