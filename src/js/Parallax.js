import React, { useState, useEffect } from "react";
import {
  ForegroundDiv,
  ParallaxDiv,
  BackgroundDiv,
  MidgroundDiv,
} from "../styles/Paralaxstyle.js";
import "../styles/effects/twinklestyles.scss";

import Twinkle from "../styles/effects/twinkle.js";
import Moon from "../styles/effects/moon.png";
import Mars from "../styles/effects/mars.png";
import Spacestation from "../styles/effects/spacestation.png";
import ShootingStars from "../styles/effects/shootingstar.js";
import Headshotpng from "../images/headshot.png";
import styled from "styled-components";
import "../styles/frontpage.css";
//import theme
import Media from "../styles/theme.js";

import Panel from "./panel";

export default function App() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const renderContent = () => <></>;

  return (
    <section className="Parallax">
      <ParallaxDiv>
        <Foreground offsetY={offsetY}></Foreground>
        <Background offsetY={offsetY}></Background>
        <Midground offsetY={offsetY}></Midground>
      </ParallaxDiv>
    </section>
  );
}

function Background(props) {
  return (
    <BackgroundDiv style={{ transform: `translateY(-${props.offsetY * 0}px)` }}>
      <Twinkle></Twinkle>
      <ShootingStars></ShootingStars>
    </BackgroundDiv>
  );
}

function Midground(props) {
  return (
    <MidgroundDiv
      style={{ transform: `translateY(-${props.offsetY * 0.5}px)` }}
    >
      <img class="moonpng" src={Moon} alt="oopsie monki can't find"></img>
      <img class="marspng" src={Mars} alt="oopsie monki can't find"></img>
      <img
        class="spacestationpng"
        src={Spacestation}
        alt="oopsie monki can't find"
      ></img>
      <AboutMeDiv>
        <Headshot>
          <img
            className="headshotimg"
            src={Headshotpng}
            alt="oops monki cant find"
          ></img>
        </Headshot>
        <AboutMe
          text="An engineer passionate about cyber security, automation, and space exploration. 
              I enjoy learning about cyber security because it is ever evolving, requires collaboration, and out-of-the-box thinking to successfully protect our systems.
              I also love running, calisthenics, juggling, painting, video games, and financial literacy."
        ></AboutMe>
      </AboutMeDiv>
    </MidgroundDiv>
  );
}

function Foreground(props) {
  return (
    <ForegroundDiv style={{ transform: `translateY(-${props.offsetY * 1}px)` }}>
      <div className="name">
        BEN HUANG &nbsp;
        <div className="border"></div>
      </div>
      <Panel></Panel>
    </ForegroundDiv>
  );
}

export const Headshot = styled.div`
  height: auto;
  width: 30vw;
  min-width: 350px;
  max-width: 450px;
`;

export function AboutMe(props) {
  return (
    <AboutMeText>
      <div>{props.text}</div>
    </AboutMeText>
  );
}
export const AboutMeDiv = styled.div`
  position: relative;
  width: 100%;
  top: 100vh;
  position: relative;
  z-index: 5;
  display: grid;
  justify-items: center;
  justify-content: center;
  vertical-align: middle;
  ${Media.mobile`
      grid-template-columns: minmax(300px, 400px);
      grid-auto-rows: minmax(250px, auto);

   `}
  ${Media.desktop`
   grid-template-columns: minmax(300px, 600px) minmax(300px, 600px);
      grid-auto-rows: minmax(200px, auto);
      grid-column-gap: 15vw;

   `}
`;
export const AboutMeText = styled.div`
  letter-spacing: 1px;
  width: 90%;
  padding-top: 10px;
  font-family: "lcd_solidregular", sans-serif;
  font-size: 1.1rem;
  color: rgba(0, 255, 0, 0.75);
  line-height: 1.3rem;
  display: flex;
  justify-content: center; /* align horizontal */
  align-items: center;
  ${Media.mobile`
    padding-top: 50px;
  `}
`;
