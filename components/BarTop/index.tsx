import { useState, useEffect, useRef } from "react";
import ButtonLinkFlex from "../ButtonLinkFlex";

import style from "./style";
import BarSpacers from "../BarSpacers";

export type LinkProp = {
  url: string;
  name: string;
  icon?: string;
  target?: string;
};

export type Props = {
  leftLink?: LinkProp;
  rightLink?: LinkProp;
  workPage?: boolean;
};

function renderButton(link: LinkProp) {
  if (link) {
    return (
      <ButtonLinkFlex
        link={{ url: link.url, name: link.name, icon: link.icon }}
        target={link.target || "_self"}
      />
    );
  }

  return null;
}

export default function BarTop(props: Props) {
  const { leftLink, rightLink, workPage } = props;

  const barTop = useRef(null);

  const [middleHeight, setMiddleHeight] = useState("full");
  const [showMiddle, setShowMiddle] = useState(true);
  if (workPage) {
    const handleSpacers = () => {
      if (
        window.innerWidth <= 850 &&
        ((leftLink && !rightLink) || (!leftLink && rightLink))
      ) {
        setShowMiddle(false);
      } else {
        setShowMiddle(true);
      }

      const workContent = document.getElementById("work-page-content");

      if (
        window.scrollY + barTop.current.clientHeight >=
        workContent.offsetTop
      ) {
        setMiddleHeight("half");
      } else {
        setMiddleHeight("full");
      }
    };

    useEffect(() => {
      handleSpacers();
      window.addEventListener("scroll", handleSpacers);
      window.addEventListener("resize", handleSpacers);

      return () => {
        window.removeEventListener("scroll", handleSpacers);
        window.removeEventListener("resize", handleSpacers);
      };
    }, []);
  }

  return (
    <>
      <div id="bar-top" ref={barTop}>
        <BarSpacers
          location="top"
          showMiddle={showMiddle}
          middleHeight={middleHeight}
        />
        <div id="buttons-container">
          {renderButton(leftLink)}
          {renderButton(rightLink)}
        </div>
      </div>
      <style jsx>{style}</style>
    </>
  );
}
