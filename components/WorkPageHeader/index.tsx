import { useRef, useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

import style from "./style";
import ButtonLink, { LinkInterface } from "../ButtonLink";

export type HeaderData = {
  hero: string;
  title: string;
  description: string;
};

export default function WorkHeader({ headerData }) {
  const { hero, title, description, links, awards, footnotes } = headerData;
  const rightColRef = useRef(null);

  const [fixed, setFixed] = useState(true);
  const handleScroll = (ev) => {
    const rightCol = rightColRef.current;
    rightCol.scrollTop = window.scrollY;

    // Scroll until we're at the bottom of rightCol's scrollable area
    if (window.scrollY + rightCol.offsetHeight >= rightCol.scrollHeight) {
      // enable window scrolling here
      setFixed(false);
    } else {
      setFixed(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      <div
        id="work-page-header-outer"
        className={`${fixed ? "fixed" : "unfixed"}`}
      >
        <div id="work-page-header-container">
          <div className={`spacer bottom left`}></div>
          <div className={`spacer bottom middle`}></div>
          <div className={`spacer bottom right`}></div>

          <div className="left-col">
            <img
              className="hero-img"
              src={`${hero}`}
              alt={`Hero image for ${title}`}
            />
          </div>
          <div className="right-col" ref={rightColRef}>
            <div className="right-col-interior">
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
      </div>
      <style jsx>{style}</style>
    </>
  );
}
