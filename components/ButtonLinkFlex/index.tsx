import { useState } from "react";
import { LinkInterface } from "../ButtonLink";

import style from "./style";

export default function ButtonLinkFlex(props: {
  link: LinkInterface;
  target?: string;
  id?: string;
}) {
  const { link, target, id } = props;

  const [buttonText, setButtonText] = useState(
    link.icon ? link.icon : link.name
  );
  const handleMouseEnter = () => setButtonText(link.name);
  const handleMouseLeave = () =>
    setButtonText(link.icon ? link.icon : link.name);

  return (
    <>
      <div id={id} className="button-container">
        <a href={link.url} target={target ? target : ""}>
          <button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {buttonText}
          </button>
        </a>
      </div>

      <style jsx>{style}</style>
    </>
  );
}
