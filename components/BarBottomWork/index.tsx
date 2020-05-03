import { useState, useEffect } from "react";
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
  const [showMiddle, setShowMiddle] = useState(true);
  const handleSpacers = () => {
    if (
      window.innerWidth <= 850 &&
      ((leftLink && !rightLink) || (!leftLink && rightLink))
    ) {
      setShowMiddle(false);
    } else {
      setShowMiddle(true);
    }
  };

  useEffect(() => {
    handleSpacers();
    window.addEventListener("resize", handleSpacers);
    return () => {
      window.removeEventListener("resize", handleSpacers);
    };
  }, []);

  return (
    <>
      <div id="bar-bottom">
        <BarSpacers
          location="bottom"
          showMiddle={showMiddle}
          middleHeight="half"
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
