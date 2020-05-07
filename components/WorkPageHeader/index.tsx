import ReactMarkdown from "react-markdown";
import { domain } from "../../utils/endpoints";

import style from "./style";
import ButtonLink, { LinkInterface } from "../ButtonLink";

export type HeaderData = {
  hero: string;
  title: string;
  description: string;
};

export default function WorkHeader({ headerData }) {
  const { hero, title, description, links } = headerData;
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
            <ul className="buttons-container">
              {links
                ? links.map((link: LinkInterface, i: number) => (
                    <ButtonLink key={`link-${i}`} link={link} />
                  ))
                : null}
            </ul>
          </div>
        </div>
      </div>
      <style jsx>{style}</style>
    </>
  );
}
