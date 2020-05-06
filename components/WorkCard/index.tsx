import Link from "next/link";
import ReactMarkdown from "react-markdown";

import Tag from "../Tag";
import { domain } from "../../utils/endpoints";

import style from "./style";

export interface WorkInterface {
  id: string;
  title: string;
  description: string;
  hero?: string;
  tags?: string[];
}

export default function WorkCard(props: { work: WorkInterface }) {
  const {
    work: { id, title, description, hero, tags },
  } = props;
  return (
    <>
      <Link href={`/work/${id}`}>
        <a className="card-link">
          <div className="spacer top-left"></div>
          <div className="spacer top-right"></div>
          <div className="spacer bottom-left"></div>
          <div className="spacer bottom-right"></div>

          <div className="card-container">
            <h2>{title}</h2>

            <div className="left-container">
              {hero ? <img src={`${domain}${hero}`} /> : null}
              <ul className="tag-container">
                {tags ? tags.map((tag, i) => <Tag key={i} text={tag} />) : null}
              </ul>
            </div>

            <div className="right-container">
              {description ? (
                <ReactMarkdown
                  className="work-description"
                  source={description}
                />
              ) : null}
            </div>
          </div>
        </a>
      </Link>
      <style jsx>{style}</style>
    </>
  );
}
