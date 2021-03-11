import styled, { keyframes } from "styled-components";

import { ReactComponent as Githubicon } from "../images/icons/github.svg";
import { ReactComponent as Instagramicon } from "../images/icons/instagram.svg";
import { ReactComponent as Linkedinicon } from "../images/icons/linkedin.svg";
import { ReactComponent as Youtubeicon } from "../images/icons/youtube.svg";
import { ReactComponent as Resumeicon } from "../images/icons/resume.svg";

const ScreenGlow = keyframes`  
    from {
      box-shadow: 0 0 100px 0 rgb(135, 211, 124,0.8);   }
  to {
    box-shadow: 0 0 90px 0 rgb(135, 211, 124,0.90);  }
	}
`;

export const Paneldiv = styled.div`
  /* height: 13vw; */
  position: relative;
  /* top: 11%; */
  /* left: 50%; */
  padding: 40px 0 0 0;
  left: 50%;
  transform: translateX(-50%);
  width: 350px;
  /* height: 100px; */
  /* background-color: white; */
  /* padding: 50px; */
  /* left: 50%; */
  /* transform: translateX(-50%); */
  z-index: 5;
  /* margin: auto; */
  /* transition: all 1.4s ease-in-out; */
  /* animation: ${ScreenGlow} 0.5s infinite alternate; */
`;

// const ScreenGlow = keyframes`
//  from {
//   box-shadow: 0 0 4rem .7rem rgb(103, 255, 77, .6);
//   }
//   to {
//     box-shadow: 0 0 4rem 1rem rgb(103, 255, 77), .7;
//   }
// `;

export const ScreenMiddle = styled.div`
  /* position: absolute; */
  /* width: 100%; */
  /* height: AUTO; */
  /* padding-top: 56.25%; */
  /* top: 0;
  bottom: 0;
  left: 0;
  right: 0; */
  /* width: 100%; */
  /* background: #86df86; */
  /* border-radius: 2%; */
  /* text-align: center; */
  /* box-shadow: 0 0 5vw 1px #39ff14; */
  /* border: 0.8vw solid rgba(105, 105, 105); */
`;

export const Iconholder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  /* margin: 15% 5% 0 5%; */
  width: auto;
  a {
    width: 15%;
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
