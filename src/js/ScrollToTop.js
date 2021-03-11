// import React, { Component } from "react";
import redbtn from "../images/redbtn.png";
import React, { useEffect, useState } from "react";
import "../styles/frontpage.css";
import "../styles/font/stylesheet.css";
import styled from "styled-components";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  // Show button when page is scorlled upto given distance
  // const toggleVisibility = () => {
  //   if (window.pageYOffset > 2300) {
  //     setIsVisible(true);
  //   } else {
  //     setIsVisible(false);
  //   }
  // };

  // Shows button when page is scrolled to the bottom of the page
  const handleScroll = (e) => {
    const el = e.target.documentElement;
    const bottom = el.scrollHeight - el.scrollTop <= el.clientHeight;
    if (bottom) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  // old useEffect function
  // useEffect(() => {
  //   window.addEventListener("scroll", toggleVisibility);
  // }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <Scrolltotop>
      {/* {isVisible && ( */}
      <div onClick={scrollToTop}>
        <img src={redbtn} alt="Go into orbit" className="redbtnimage" />
      </div>
      )
    </Scrolltotop>
  );
}

const Scrolltotop = styled.div`
  cursor: pointer;
  position: relative;
  width: 2rem;
  z-index: 5;
  div:hover {
    transform: scale(1.05);
  }
  img {
    width: 100%;
  }
`;
