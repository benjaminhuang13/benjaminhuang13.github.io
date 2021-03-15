//libraries
import React, { useState, useEffect } from "react";
import styled from "styled-components";
//styles and images
import "../styles/frontpage.css";
import "../styles/font/stylesheet.css";
import { Content } from "../styles/frontpagestyles.js";
import Cloud2 from "../images/clouds/cloud2.png";
import Cloud1 from "../images/clouds/cloud1.png";
import Cloud4 from "../images/clouds/cloud4.png";
import Bgcloud1 from "../images/clouds/bgcloud1.png";
import Bgcloud2 from "../images/clouds/bgcloud2.png";
import Bgcloud3 from "../images/clouds/bgcloud3.png";
import Boeing from "../images/boeing.png";
import Mufg from "../images/mufg.png";
import Jobtracking from "../images/jobtracking.png";
import Stonybrook from "../images/stonybrook.png";
//import theme
import Media from "../styles/theme.js";
//add custom components
import ScrollToTop from "./ScrollToTop.js";
import Parallax from "./Parallax";
import Scrollzoom from "./scrollzoom";

function Frontpage() {
  return (
    <div className="main">
      <Parallax></Parallax>
      <div className="bodybackground">
        <Scrollzoom></Scrollzoom>
        <CloudFunc></CloudFunc>
        <Whitebackground>
          <Content imgsrc={Boeing}></Content>
          <Content
            heading="System Security Engineer, Product Security"
            text="Responsible for assessing product risk before it is deployed. In addition, consult with cross disciplinary product owners to mitigate associated risks."
          ></Content>

          <Content imgsrc={Jobtracking}></Content>
          <Content
            heading="Frontend Developer"
            text="Utilizing React, Redux, HTML, and CSS to create a job application tracking platform. Currently, in an Accelerator Startup program to launch beta."
          ></Content>

          <Content imgsrc={Mufg}></Content>
          <Content
            heading="Technology Solutions Analyst"
            text="Leveraged data to develop tools that improve internal audit processes."
          ></Content>

          <Content imgsrc={Stonybrook}></Content>
          <Content
            heading="IT Coordinator"
            text="Launched and managed new team workflow that improved incident response time by 90%."
          ></Content>
        </Whitebackground>
      </div>

      <div className="footer">
        <ScrollToTop />
        <div className="footertextdiv">
          <span dangerouslySetInnerHTML={{ __html: "&copy;" }} /> Benjamin Huang{" "}
          {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
}
export default Frontpage;

export const Headshot = styled.div`
  height: auto;
  width: 100%;
  padding-right: 30%;
`;

function CloudFunc(props) {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="CloudsInSky">
      <CloudAll offsetY={offsetY}></CloudAll>
    </section>
  );
}

const Whitebackground = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: linear-gradient(transparent, #f9f9f9 180px);
  z-index: 5;
  display: grid;
  justify-content: center;
  padding-left: 30px;
  ${Media.mobile`
      grid-template-columns: minmax(300px, 400px);
      grid-auto-rows: minmax(250px, auto);
      top: 180px;
      padding: 200px 1vw 200px 1vw;

   `}
  ${Media.desktop`
   grid-template-columns: minmax(300px, 300px) minmax(300px, 700px);
      grid-auto-rows: minmax(200px, auto);
      padding: 200px 1vw 200px 1vw;
      top: 20px;
   `}
`;

function CloudAll(props) {
  return (
    <div>
      <CloudDiv
        style={{
          left: "10%",
          top: "40%",
          transform: `translate(${props.offsetY * 0.3}px,-${
            props.offsetY * 0.7
          }px)`,
        }}
      >
        <img className="cloudimg" src={Cloud1} alt="oops monki cant find"></img>
      </CloudDiv>

      <CloudDiv
        style={{
          left: "30%",
          top: "60%",
          transform: `translate(${props.offsetY * 0.3}px,-${
            props.offsetY * 0.7
          }px)`,
        }}
      >
        <img className="cloudimg" src={Cloud2} alt="oops monki cant find"></img>
      </CloudDiv>

      <CloudDiv
        style={{
          left: "-10%",
          top: "50%",
          transform: `translate(${props.offsetY * 0.3}px,-${
            props.offsetY * 0.7
          }px)`,
        }}
      >
        <img className="cloudimg" src={Cloud1} alt="oops monki cant find"></img>
      </CloudDiv>

      {/* Second level */}
      <CloudDiv
        style={{
          left: "-5%",
          top: "60%",
          transform: `translate(${props.offsetY * 0.3}px,-${
            props.offsetY * 0.7
          }px)`,
        }}
      >
        <img className="cloudimg" src={Cloud1} alt="oops monki cant find"></img>
      </CloudDiv>

      <CloudDiv
        style={{
          left: "-50%",
          top: "60%",
          transform: `translate(${props.offsetY * 0.3}px,-${
            props.offsetY * 0.7
          }px)`,
        }}
      >
        <img className="cloudimg" src={Cloud4} alt="oops monki cant find"></img>
      </CloudDiv>

      <CloudDiv
        style={{
          left: "15%",
          top: "60%",
          transform: `translate(${props.offsetY * 0.3}px,-${
            props.offsetY * 0.7
          }px)`,
        }}
      >
        <img className="cloudimg" src={Cloud2} alt="oops monki cant find"></img>
      </CloudDiv>

      <CloudDiv
        style={{
          left: "35%",
          top: "50%",
          transform: `translate(${props.offsetY * 0.3}px,-${
            props.offsetY * 0.7
          }px)`,
        }}
      >
        <img className="cloudimg" src={Cloud1} alt="oops monki cant find"></img>
      </CloudDiv>

      {/* third level */}

      <CloudDiv
        style={{
          left: "10%",
          top: "50%",
          transform: `translate(${props.offsetY * 0.3}px,-${
            props.offsetY * 0.7
          }px)`,
        }}
      >
        <img className="cloudimg" src={Cloud1} alt="oops monki cant find"></img>
      </CloudDiv>

      <CloudDiv
        style={{
          left: "-60%",
          top: "60%",
          transform: `translate(${props.offsetY * 0.3}px,-${
            props.offsetY * 0.7
          }px)`,
        }}
      >
        <img className="cloudimg" src={Cloud4} alt="oops monki cant find"></img>
      </CloudDiv>

      <CloudDiv
        style={{
          left: "30%",
          top: "50%",
          transform: `translate(${props.offsetY * 0.3}px,-${
            props.offsetY * 0.7
          }px)`,
        }}
      >
        <img className="cloudimg" src={Cloud2} alt="oops monki cant find"></img>
      </CloudDiv>

      <CloudDiv
        style={{
          left: "-50%",
          top: "60%",
          transform: `translate(${props.offsetY * 0.3}px,-${
            props.offsetY * 0.7
          }px)`,
        }}
      >
        <img className="cloudimg" src={Cloud1} alt="oops monki cant find"></img>
      </CloudDiv>

      {/* background clouds */}
      <BgcloudDiv
        style={{
          right: "700px",
          top: "15%",
          transform: `translate(${props.offsetY * 0.1}px,-${
            props.offsetY * 0.3
          }px)`,
        }}
      >
        <img src={Bgcloud1} alt="oops monki cant find"></img>
      </BgcloudDiv>
      <BgcloudDiv
        style={{
          left: "-25%",
          top: "15%",
          transform: `translate(${props.offsetY * 0.1}px,-${
            props.offsetY * 0.3
          }px)`,
        }}
      >
        <img src={Bgcloud2} alt="oops monki cant find"></img>
      </BgcloudDiv>
      <BgcloudDiv
        style={{
          left: "20%",
          top: "20%",
          transform: `translate(${props.offsetY * 0.1}px,-${
            props.offsetY * 0.3
          }px)`,
        }}
      >
        <img src={Bgcloud3} alt="oops monki cant find"></img>
      </BgcloudDiv>
    </div>
  );
}

export const CloudDiv = styled.div`
  width: 10px;
  height: 10px;
  position: absolute;
  z-index: 4;
  opacity: 1;
  z-index: 5;
`;

export const BgcloudDiv = styled.div`
  width: 10px;
  height: 10px;
  position: absolute;
  z-index: 1;
  opacity: 0.8;
  img {
    width: 1000px;
  }
`;
