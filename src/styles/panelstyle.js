import styled from "styled-components";

import Githubicon from "../images/icons/github.svg?react";
import Instagramicon from "../images/icons/instagram.svg?react";
import Linkedinicon from "../images/icons/linkedin.svg?react";
import Youtubeicon from "../images/icons/youtube.svg?react";
import Resumeicon from "../images/icons/resume.svg?react";
import Twittericon from "../images/icons/twitter.svg?react";

// const ScreenGlow = keyframes`
//     from {
//       box-shadow: 0 0 100px 0 rgb(135, 211, 124,0.8);   }
//   to {
//     box-shadow: 0 0 90px 0 rgb(135, 211, 124,0.90);  }
// 	}
// `;

export const Paneldiv = styled.div`
  position: relative;
  padding: 40px 0 0 0;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  z-index: 5;
`;

export const Iconholder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;
  /* margin: 15% 5% 0 5%; */
  width: auto;
  a {
    width: 30%;
    /* z-index: 4; */
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    &:hover {
      /* box-shadow: 0 0 0px 4px #39ff14; */
    }
  }
`;

export const Linkedin = styled(Linkedinicon)`
  height: auto;
  width: 100%;
  fill: green;
  transition: all 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    fill: rgba(0, 255, 0, 0.75);
    transform: scale(1.04);
  }
`;
export const Resume = styled(Resumeicon)`
  height: auto;
  width: 100%;
  fill: green;
  transition: all 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    fill: rgba(0, 255, 0, 0.75);
    transform: scale(1.04);
  }
`;
export const Github = styled(Githubicon)`
  height: auto;
  width: 100%;
  fill: green;
  transition: all 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    fill: rgba(0, 255, 0, 0.75);
    transform: scale(1.04);
  }
`;

export const Youtube = styled(Youtubeicon)`
  height: auto;
  width: 100%;
  fill: green;
  transition: all 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    fill: rgba(0, 255, 0, 0.75);
    transform: scale(1.04);
  }
`;

export const Instagram = styled(Instagramicon)`
  height: auto;
  width: 100%;
  fill: green;
  transition: all 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    fill: rgba(0, 255, 0, 0.75);
    transform: scale(1.04);
  }
`;

export const Twitter = styled(Twittericon)`
  height: auto;
  width: 100%;
  fill: green;
  transition: all 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    fill: rgba(0, 255, 0, 0.75);
    transform: scale(1.04);
  }
`;

export const Radar = styled.div`
  position: absolute;
  top: 50%;
  right: 20%;
  padding-bottom: 50%;
  height: 0;
  width: 25%;
  padding-bottom: 25%;
`;

export const ScreenText = styled.div`
  font-family: "lcd_solidregular", sans-serif;
  position: absolute;
  top: 67%;
  left: 5%;
  font-size: 1rem;
  color: #2a2a2a;
  letter-spacing: 1px;
`;
