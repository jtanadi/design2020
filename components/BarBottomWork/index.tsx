import { useState, useEffect, useRef } from "react";
import style from "./style";

import ButtonLinkFlex from "../ButtonLinkFlex";
import BarSpacers from "../BarSpacers";
import { LinkProp, Props } from "../BarTop";

function renderButton(id: string, link: LinkProp) {
  if (link) {
    return (
      <ButtonLinkFlex
        id={id}
        link={{ url: link.url, name: link.name, icon: link.icon }}
        target={link.target || "_self"}
      />
    );
  }

  return null;
}

export default function BarBottom(props: Props) {
  const { leftLink, rightLink } = props;

  const barRef = useRef(null);
  const [showMiddle, setShowMiddle] = useState(true);
  const [middleHeight, setMiddleHeight] = useState("full");
  const handleSpacers = () => {
    if (
      window.innerWidth <= 850 &&
      ((leftLink && !rightLink) || (!leftLink && rightLink))
    ) {
      setShowMiddle(false);
    } else {
      setShowMiddle(true);
    }

    const headerElmt = document.getElementById("work-header-outer");
    const barBottomPos = window.scrollY + barRef.current.offsetTop;

    if (barBottomPos >= headerElmt.offsetTop + headerElmt.clientHeight) {
      setMiddleHeight("half");
    } else {
      setMiddleHeight("full");
    }
  };

  useEffect(() => {
    handleSpacers();
    window.addEventListener("resize", handleSpacers);
    window.addEventListener("scroll", handleSpacers);
    return () => {
      window.removeEventListener("resize", handleSpacers);
      window.removeEventListener("scroll", handleSpacers);
    };
  }, []);

  return (
    <>
      <div id="bar-bottom" ref={barRef}>
        <BarSpacers
          location="bottom"
          showMiddle={showMiddle}
          middleHeight={middleHeight}
        />
        <div id="buttons-container">
          {renderButton("left-button", leftLink)}
          {renderButton("right-button", rightLink)}
        </div>
      </div>
      <style jsx>{style}</style>
    </>
  );
}
