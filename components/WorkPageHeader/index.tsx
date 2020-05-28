import ReactMarkdown from "react-markdown";

import style from "./style";
import ButtonLink, { LinkInterface } from "../ButtonLink";

export type HeaderData = {
  hero: string;
  title: string;
  description: string;
};

export default function WorkHeader({ headerData }) {
  const {
    hero,
    heroFit,
    title,
    description,
    links,
    awards,
    footnotes,
  } = headerData;

  const renderButtons = () => {
    return links ? (
      <>
        <div className="buttons-container">
          {links.map((link: LinkInterface, i: number) => (
            <ButtonLink key={`link-${i}`} link={link} />
          ))}{" "}
        </div>
        <style jsx>{style}</style>
      </>
    ) : null;
  };

  const renderAwards = () => {
    return awards ? (
      <>
        <ul>
          {awards.map((award: string, i: number) => (
            <li key={`award-${i}`}>
              <ReactMarkdown
                className="work-page-header-award"
                source={award}
              />
            </li>
          ))}
        </ul>
        <style jsx>{style}</style>
      </>
    ) : null;
  };

  const renderFootnotes = () => {
    return footnotes ? (
      <>
        <ul>
          {footnotes.map((footnote: string, i: number) => (
            <li key={`footnote-${i}`}>
              <ReactMarkdown
                className="work-page-header-footnote"
                source={footnote}
              />
            </li>
          ))}
        </ul>
        <style jsx>{style}</style>
      </>
    ) : null;
  };

  return (
    <>
      <div id="work-page-header-outer">
        <div id="work-page-header-container">
          <div className={`spacer bottom left`}></div>
          <div className={`spacer bottom middle`}></div>
          <div className={`spacer bottom right`}></div>

          <div className="left-col">
            <img
              className={`hero-img img-fit-${heroFit ? heroFit : "cover"}`}
              src={`${hero}`}
              alt={`Hero image for ${title}`}
            />
          </div>
          <div className="right-col">
            <h2>{title}</h2>
            <ReactMarkdown
              className="work-page-header-description"
              source={description}
            />
            {renderButtons()}
            {renderAwards()}
            {renderFootnotes()}
          </div>
        </div>
      </div>
      <style jsx>{style}</style>
    </>
  );
}
