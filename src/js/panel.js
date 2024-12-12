//libraries
import React, { useState, useEffect } from "react";
import "../styles/frontpage.css";
import "../styles/font/stylesheet.css";
import "../styles/glitch.scss";
import "../styles/radar.css";
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
        <a
          href="https://github.com/benjaminhuang13"
          target="_blank"
          rel="noreferrer"
        >
          <Github />
        </a>
      </Iconholder>
    </Paneldiv>
  );
}