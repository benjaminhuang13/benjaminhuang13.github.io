import styled from "styled-components";
import Media from "../styles/theme.js";

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
  ${Media.mobile`
    padding: 10px 20px 0px 20px;
  `}

  h3 {
    margin: 0;
  }
`;
export const ContentImg = styled.img`
  /* justify-content: center; */
  height: auto;
  width: auto;
  z-index: 7;
  max-height: 200px;
  max-width: 200px;
  opacity: 0.85;
`;

export const ContentCertImg = styled.img`
  /* justify-content: center; */
  height: auto;
  width: auto;
  z-index: 7;
  max-height: 120px;
  max-width: 120px;
  opacity: 0.85;
  padding: 0px 20px 0px 20px;
`;

export const ContentProjImg = styled.img`
  /* justify-content: center; */
  height: 80px;
  width: auto;
  z-index: 7;
  max-height: 120px;
  max-width: 120px;
  opacity: 0.85;
  padding: 0px 20px 0px 20px;
`;

export function Content(props) {
  return (
    <ContentText>
      <h3>{props.heading}</h3>
      {props.text}
      <ContentImg src={props.imgsrc} alt="" />
      {/* <ContentBkgdImg src={props.imgsrc2} alt="" /> */}
    </ContentText>
  );
}

export function ContentCert(props) {
  return (
    <ContentCentered>
      <h2>{props.heading}</h2>
      <div>
        <ContentCertImg src={props.imgsrc1} alt="" />
        <ContentCertImg src={props.imgsrc2} alt="" />
      </div>
    </ContentCentered>
  );
}

export function ContentProjects(props) {
  return (
    <ProjectContentCentered>
      <h2>{props.heading}</h2>
      <a href="https://benjaminhuang13.github.io/chess-app/">
        <ContentProjImg src={props.imgsrc1} alt="React Chess App" />
      </a>
      <a href="https://github.com/benjaminhuang13/SNKRScraper-GoogleCal/blob/main/google_cal_event.png">
        <ContentProjImg src={props.imgsrc2} alt="SNKR Scraper" />
      </a>
    </ProjectContentCentered>
  );
}

export const ContentCentered = styled.div`
  position: relative;
  font-family: "lcd_solidregular", sans-serif;
  letter-spacing: 1px;
  line-height: 1.4;
  padding-bottom: 10px;
  /* grid-column-start: 1;
  grid-column-end: 2; */
  /* display: grid; */
  width: 100%;
  font-size: 1.1rem;
  color: rgb(49, 39, 39);
  z-index: 7;
  /* display: flex; */
  /* justify-content: center; */
  /* align-content: center; */
  /* text-align: center; */
  /* padding-top: 15px; */
  /* margin-left: 0; */
  ${Media.mobile`
      padding-bottom: 50px;
  `}
`;

export const ProjectContentCentered = styled.div`
  position: relative;
  font-family: "lcd_solidregular", sans-serif;
  letter-spacing: 1px;
  line-height: 1.4;
  padding-bottom: 10px;

  width: 100%;
  font-size: 1.1rem;
  color: rgb(49, 39, 39);
  z-index: 7;
  ${Media.mobile`
      padding-bottom: 200px;
  `}
`;

export const ContentHeading = styled.div`
  position: relative;
  font-family: "lcd_solidregular", sans-serif;
  letter-spacing: 1px;
  line-height: 1.4;
  padding-top: 250px;
  width: 100%;
  font-weight: 900;
  font-size: 1.9rem;
  color: rgb(49, 39, 39);
  z-index: 6;
`;

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
