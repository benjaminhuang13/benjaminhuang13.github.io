import styled from "styled-components";

import "../styles/frontpage.css";
import "../styles/font/stylesheet.css";
import { ReactComponent as Launchpadsvg } from "../images/icons/launchpad.svg";

export const Div = styled.div`
  transform: translateX(${({ animate }) => (animate ? "0" : "-100vw")});
  transition: transform 1s;
  padding-top: 100px;
  opacity: ${({ animatePercent }) =>
    animatePercent ? `${animatePercent / 100}` : `1`};
  position: relative;
`;

// export const Astronaut = styled(Astronautsvg)`
//   height: auto;
//   width: 70%;
//   fill: rgba(0, 255, 0, 0.75);
//   /* position: relative; */
//   /* z-index: 5; */
//   transition: all 0.2s ease-in-out;
//   &:hover {
//     fill: red;
//     transform: scale(1.1);
//   }
//   padding-right: 30%;
// `;

export const ContentText = styled.div`
  font-family: "lcd_solidregular", sans-serif;
  letter-spacing: 1px;
  line-height: 1.4;

  font-size: 1.1rem;
  color: rgb(49, 39, 39);
  z-index: 6;
  /* display: flex; */
  justify-content: center; /* align horizontal */
  align-items: center; /* align vertical */
  text-align: left;
  padding-top: 10%;
  h3 {
    margin: 0;
  }
`;
export const ContentImg = styled.img`
  justify-content: center;
  height: auto;
  width: auto;
  z-index: 6;
  max-height: 200px;
  max-width: 200px;
  opacity: 0.85;
`;

export function Content(props) {
  return (
    <ContentText>
      <h3>{props.heading}</h3>
      {props.text} <ContentImg src={props.imgsrc} alt=""></ContentImg>
    </ContentText>
  );
}

export const Luanchpad = styled(Launchpadsvg)`
  width: 500px;
  position: relative;
  bottom: 0px;
  z-index: 6;
  margin-left: -100px;
`;

// const Tvflicker = keyframes`
//     from {
//       box-shadow: 0 0 100px 0 rgb(135, 211, 124,0.8);   }
//   to {
//     box-shadow: 0 0 90px 0 rgb(135, 211, 124,0.90);  }
// 	}
// `;
