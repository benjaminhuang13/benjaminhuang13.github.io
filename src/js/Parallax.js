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

import Content from "../styles/frontpagestyles.js";

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
    <BackgroundDiv
      style={{ transform: `translateY(-${props.offsetY * 0.1}px)` }}
    >
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
        <div className="aboutme">
          <div className="astrodiv">
            {/* <Astronaut></Astronaut> */}
            <Headshot>
              <img
                className="headshotimg"
                src={Headshotpng}
                alt="oops monki cant find"
              ></img>
            </Headshot>
          </div>
          <AboutMe
            text="An engineer passionate about cybersecurity, programming, and space exploration. I also
              love running, calisthenics, and investing in the stock market. Goals for this year include completing
               the Security+ certification and running a marathon!"
          ></AboutMe>
        </div>
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
  /* width: 100px; */
  width: 100%;
  padding-right: 30%;
`;

export function AboutMe(props) {
  return (
    <AboutMeText>
      <div>{props.text}</div>
    </AboutMeText>
  );
}
export const AboutMeDiv = styled.div`
  float: left;
  position: relative;
  left: 40%;
  width: 60%;
  margin-bottom: 150px;
  top: 100vh;
`;
export const AboutMeText = styled.div`
  letter-spacing: 1px;
  width: 100%;
  height: 300px;
  margin-right: 3%;
  font-family: "lcd_solidregular", sans-serif;
  font-size: 1.1rem;
  color: rgba(0, 255, 0, 0.75);
  line-height: 1.3rem;
  display: flex;
  justify-content: center; /* align horizontal */
  align-items: center; /* align vertical */
`;
