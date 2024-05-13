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

export const ContentCertImgLoading = styled.img`
  /* justify-content: center; */
  height: auto;
  width: auto;
  z-index: 7;
  max-height: 120px;
  max-width: 120px;
  opacity: 0.35;
  padding: 0px 20px 0px 20px;
  -webkit-animation-name: blink;
  -webkit-animation-iteration-count: infinite;
  animation-direction: alternate-reverse;
  -webkit-animation-timing-function: cubic-bezier(0.2, 0, 0.2, 0);
  -webkit-animation-duration: 2s;
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
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition-duration: 0.5s;
  }
`;

export const ContentArtImg = styled.img`
  /* justify-content: center; */
  height: 500px;
  width: auto;
  object-fit: contain;
  z-index: 7;
  max-width: 90vw;
  opacity: 1;
  padding: 10px 20px 10px 20px;
  @media only screen and (max-width: 550px) {
    height: 300px;
  }
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
        <ContentCertImg src={props.imgsrc3} alt="" />
        <ContentCertImgLoading src={props.imgsrc4} alt="" />
        <ContentCertImgLoading src={props.imgsrc5} alt="" />
      </div>
    </ContentCentered>
  );
}

export function ContentProjects(props) {
  return (
    <ProjectContentCentered>
      <h2>{props.heading}</h2>
      <div className="Project-container">
        <div className="Project-item">
          <a
            href="https://github.com/benjaminhuang13/reddit2twitter_cats/tree/main"
            target="_blank"
          >
            <ContentProjImg src={props.imgsrc1} alt="Cat Twitter" />
          </a>
          <p className="caption">Auto Cat Twitter Page</p>
        </div>
        <div className="Project-item">
          <a
            href="https://github.com/benjaminhuang13/SNKRScraper-GoogleCal"
            target="_blank"
          >
            <ContentProjImg src={props.imgsrc2} alt="SNKR Scraper" />
          </a>
          <p className="caption">SNKR Bot Scraper</p>
        </div>
        <div className="Project-item">
          <a
            href="https://github.com/benjaminhuang13/vulnerability_assessment/blob/main/Vuln_Scanning_Report.pdf"
            target="_blank"
          >
            <ContentProjImg
              src={props.imgsrc3}
              alt="Vulnerability Assessment"
            />
          </a>
          <p className="caption">Homelab Vulnerability Assessment Report</p>
        </div>
        <div className="Project-item">
          <a
            href="https://github.com/benjaminhuang13/discord_bot_pesk/tree/main"
            target="_blank"
          >
            <ContentProjImg src={props.imgsrc4} alt="Discord Bot" />
          </a>
          <p className="caption">Discord Bot Uplifter</p>
        </div>
        <div className="Project-item">
          <a href="https://longwave-technologies.github.io/" target="_blank">
            <ContentProjImg src={props.imgsrc5} alt="Small Business Website" />
          </a>
          <p className="caption">React Website 4 Local Copier Biz</p>
        </div>
        <div className="Project-item">
          <a
            href="https://github.com/benjaminhuang13/ultimate_budget_spreadsheet"
            target="_blank"
          >
            <ContentProjImg src={props.imgsrc6} alt="Ult Budget Sheet" />
          </a>
          <p className="caption">Ultimate Budget Sheet</p>
        </div>
        <div className="Project-item">
          <a
            href="https://benjaminhuang13.github.io/chess-app/"
            target="_blank"
          >
            <ContentProjImg src={props.imgsrc7} alt="React Chess App" />
          </a>
          <p className="caption">Chess App (WIP)</p>
        </div>
      </div>
    </ProjectContentCentered>
  );
}

export function ContentArtGallery(props) {
  return (
    <ProjectContentCentered>
      <h2>{props.heading}</h2>
      <ContentArtImg src={props.imgsrc1} alt="Cat Twitter" />
      <ContentArtImg src={props.imgsrc2} alt="SNKR Scraper" />
      <ContentArtImg src={props.imgsrc3} alt="Cat Yoga" />
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
    padding: 0px 0px 30px 0px;
  `}
`;

export const ContentFooter = styled.div`
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
