import Link from "next/link";
import ReactMarkdown from "react-markdown";

import ButtonLink, { LinkInterface } from "../ButtonLink";
import Tag from "../Tag";

import style from "./style";

export interface WorkInterface {
  id: string;
  title: string;
  description: string;
  image: string;
  links?: LinkInterface[];
  tags?: string[];
}

export default function WorkCard(props: { work: WorkInterface }) {
  const {
    work: { id, title, description, image, links, tags },
  } = props;
  return (
    <>
      <Link href={`/work/${id}`}>
        <a className="card-link">
          <div className="card-container">
            <div className="spacer top-left"></div>
            <div className="spacer top-right"></div>
            <div className="spacer bottom-left"></div>
            <div className="spacer bottom-right"></div>

            <h2>{title}</h2>

            <div className="left-container">
              {image ? <img src={`data:image/*;base64,${image}`} /> : null}
              <ul className="tag-container">
                {tags ? tags.map((tag, i) => <Tag key={i} text={tag} />) : null}
              </ul>
            </div>

            <div className="right-container">
              <ReactMarkdown
                className="work-description"
                source={description}
              />
              <ul className="button-container">
                {links
                  ? links.map((link, i) => (
                      <ButtonLink key={i} link={link} target="_blank" />
                    ))
                  : null}
              </ul>
            </div>
          </div>
        </a>
      </Link>
      <style jsx>{style}</style>
    </>
  );
}
