import styled from "styled-components";

import React, {
  useState,
  useRef,
  useMemo,
  Fragment,
  useLayoutEffect,
} from "react";

import { ReactComponent as Rocketsvg } from "../images/icons/rocket.svg";
import { ReactComponent as Rocketwindowsvg } from "../images/icons/window.svg";
//import theme
import Media from "../styles/theme.js";

export default () => {
  const [hideOnScroll, setHideOnScroll] = useState(true);

  useScrollPosition(
    ({ currPos }) => {
      // const isShow = currPos.y < prevPos.y;
      const isShow = currPos.y > -100;
      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
    },
    [hideOnScroll],
    false,
    false,
    false
  );

  return useMemo(
    () => (
      <Fragment>
        <Rocketwindow show={hideOnScroll} />
        <Rocket show={hideOnScroll}></Rocket>
      </Fragment>
    ),
    [hideOnScroll]
  );
};

//Rocket responding to scrolling https://dev.to/n8tb1t/tracking-scroll-position-with-react-hooks-3bbj
//var to check if DOM is ready
const isBrowser = typeof window !== `undefined`;
function getScrollPosition({ element, useWindow }) {
  if (!isBrowser) return { x: 0, y: 0 };

  const target = element ? element.current : document.body; //check if user requested the scroll position of entire page or specific element
  const position = target.getBoundingClientRect(); //gets size and position of elements/ boudning box, relative to viewport

  return useWindow //returns scroll position
    ? { x: window.scrollX, y: window.scrollY }
    : { x: position.left, y: position.top };
}

export function useScrollPosition(effect, deps, element, useWindow, wait) {
  const position = useRef(getScrollPosition({ useWindow })); //store current position coordinates

  let throttleTimeout = null;

  const callBack = () => {
    const currPos = getScrollPosition({ element, useWindow });
    effect({ prevPos: position.current, currPos });
    position.current = currPos;
    throttleTimeout = null;
  };

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callBack, wait);
        }
      } else {
        callBack();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, deps);
}

const Rocket = styled(Rocketsvg)`
  height: 30vh;
  top: -30vh;
  margin: 0 auto;
  position: fixed;
  z-index: 2;
  transition: all 600ms ${(props) => (props.show ? "ease-out" : "ease-out")};
  transform: ${(props) => (props.show ? "none" : " translate(0vw, 47vh) ")};
`;

const Rocketwindow = styled(Rocketwindowsvg)`
  width: auto;
  height: 4.2vh;
  background: black;
  border-radius: 50%;
  position: fixed;
  z-index: 2;
  opacity: 0;
  top: 41.9vh;
  transition: all 1000ms ${(props) => (props.show ? "ease-out" : "ease-out")};

  opacity: ${(props) => (props.show ? null : 1)};
`;
