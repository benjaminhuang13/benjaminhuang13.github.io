//libraries
import React, { useState, useEffect } from "react";
import "../styles/frontpage.css";
import "../styles/font/stylesheet.css";
import "../styles/glitch.scss";
import "../styles/radar.css";
import Pdf from "../docs/Resume_BenjaminHuang.pdf";
import {
  Paneldiv,
  Iconholder,
  Linkedin,
  Github,
  Youtube,
  Instagram,
  Resume,
  Twitter,
} from "../styles/panelstyle.js";

//inspo: https://yellowimages.com/stock/control-panels-spaceship-59697

export default function Frontpanel() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = (e) => {
    const el = e.target.documentElement;
    const bottom = el.scrollHeight - el.scrollTop <= el.clientHeight;
    if (bottom) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // const scrollToTop = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <Paneldiv>
      <Iconholder>
        <a
          href="https://www.linkedin.com/in/benjaminhuang3/"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin />
        </a>
        <a href={Pdf} target="_blank" rel="noreferrer">
          <Resume />
        </a>
        <a
          href="https://github.com/benjaminhuang13"
          target="_blank"
          rel="noreferrer"
        >
          <Github />
        </a>
        <a
          href="https://www.instagram.com/benyelloo/"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram />
        </a>
        <a
          href="https://www.youtube.com/channel/UCWuNQ9eDfrbNIZBS2nJxBiw"
          target="_blank"
          rel="noreferrer"
        >
          <Youtube />
        </a>
        <a
          href="https://twitter.com/employedcats"
          target="_blank"
          rel="noreferrer"
        >
          <Twitter />
        </a>
      </Iconholder>

      {/* <Radar>
          <div>
            <div class="ringbase ring0"></div>
            <div class="ringbase ring1"></div>
            <div class="ringbase ring2"></div>
            <div class="pulse"></div>
            <div class="pointer">
              <div></div>
            </div>
            <div class="dot pos1"></div>
            <div class="dot pos2"></div>
          </div>
        </Radar> */}
      {/* </ScreenMiddle> */}
    </Paneldiv>
  );
}
