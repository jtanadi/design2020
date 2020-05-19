import { useState, useEffect } from "react";

import style from "./style";
import BarSpacers from "../BarSpacers";

/*
interface PropsInterface {
  scrollTarget: HTMLElement
  offsetElement?: HTMLElement
}
 */

enum Direction {
  UP,
  DOWN,
}

const getDocHeight = () => {
  const body = document.body;
  const html = document.documentElement;

  return Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );
};

export default function BarBottom() {
  const [docHeight, setDocHeight] = useState(0);
  const handleWindowResize = (): void => {
    setDocHeight(getDocHeight());
  };

  const [atBottom, setAtBottom] = useState(false);
  const [direction, setDirection] = useState(Direction.DOWN);
  const handleScroll = (): void => {
    const scrollBottom = Math.round(window.innerHeight + window.scrollY);
    setAtBottom(scrollBottom >= docHeight);

    const offsetHeight: number = document.getElementById("bar-top")
      .clientHeight;
    const targetLocation: number =
      document.getElementById("work-container").offsetTop - offsetHeight;
    if (window.scrollY >= targetLocation) {
      setDirection(Direction.UP);
    } else {
      setDirection(Direction.DOWN);
    }
  };

  useEffect(() => {
    handleWindowResize();
    handleScroll();
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [docHeight]);

  const [buttonText, setButtonText] = useState("");
  const [mouseOver, setMouseOver] = useState(false);
  useEffect(() => {
    if (!mouseOver) {
      setButtonText(direction === Direction.DOWN ? "Projects" : "About");
    } else {
      setButtonText(direction === Direction.DOWN ? "▼" : "▲");
    }
  }, [direction, mouseOver]);

  const handleMouseOver = (): void => setMouseOver(true);
  const handleMouseLeave = (): void => setMouseOver(false);

  const handleClick = (): void => {
    const offsetHeight: number = document.getElementById("bar-top")
      .clientHeight;
    const targetLocation: number =
      document.getElementById("work-container").offsetTop - offsetHeight;
    const scrollLocation: number =
      direction === Direction.DOWN ? targetLocation : 0;
    window.scroll({
      top: scrollLocation,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div id="bar-bottom" style={{ zIndex: atBottom ? 98 : null }}>
        <BarSpacers location="bottom" />
        <div id="button-container">
          <button
            onClick={handleClick}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
          >
            {buttonText}
          </button>
        </div>
      </div>
      <style jsx>{style}</style>
    </>
  );
}
