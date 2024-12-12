//libraries
import React, { useState, useEffect } from "react";
import styled from "styled-components";
//styles and images
import "../styles/frontpage.css";
import "../styles/font/stylesheet.css";
import {
  Content,
  ContentCert,
  ContentHeading,
  ContentProjects,
  ContentArtGallery,
  ContentFooter,
} from "../styles/frontpagestyles.js";
import Cloud2 from "../images/clouds/cloud2.png";
import Cloud1 from "../images/clouds/cloud1.png";
import Cloud4 from "../images/clouds/cloud4.png";
import Bgcloud1 from "../images/clouds/bgcloud1.png";
import Bgcloud2 from "../images/clouds/bgcloud2.png";
import Bgcloud3 from "../images/clouds/bgcloud3.png";
import awsccp from "../images/logo/awsccp.png";
import aws_saa from "../images/logo/aws_saa.png";
import secplus from "../images/logo/secplus.png";
import awssecurity from "../images/logo/awssecurity.png";
import CISSP from "../images/logo/CISSP.png";
import chessappimg from "../images/project_icons/chessappimg.svg";
import SNKRappimg from "../images/project_icons/SNKRappimg.png";
import cattwitter from "../images/project_icons/cattwitter.png";
import vulnreport from "../images/project_icons/vuln_report.png";
import discordbot from "../images/project_icons/discordbot.png";
import longwavewebsite from "../images/project_icons/websiteicon.png";
import budgetsheet from "../images/project_icons/budgetsheet.png";
import art_twocats from "../images/art/dalle_twocats_elope.png";
import art_reddress_piano from "../images/art/dalle_reddress_piano_2.png";
import art_cat_yoga from "../images/art/midjourney_cat_yoga.png";

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
          <ContentHeading heading="Work Experience"></ContentHeading>
          <Gridbackground> </Gridbackground>
          <ContentCert
            heading="Certifications"
            imgsrc1={secplus}
            imgsrc2={awsccp}
            imgsrc3={aws_saa}
            imgsrc4={awssecurity}
            imgsrc5={CISSP}
          ></ContentCert>
          <ContentProjects
            heading="Projects"
            imgsrc1={cattwitter}
            imgsrc2={SNKRappimg}
            imgsrc3={vulnreport}
            imgsrc4={discordbot}
            imgsrc5={longwavewebsite}
            imgsrc6={budgetsheet}
            // imgsrc7={chessappimg}
          ></ContentProjects>
          <ContentArtGallery
            heading="AI Art Gallery"
            imgsrc1={art_reddress_piano}
            imgsrc2={art_twocats}
            imgsrc3={art_cat_yoga}
          ></ContentArtGallery>
          <ContentFooter></ContentFooter>
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
      <CloudAll offsetY={offsetY - 0}></CloudAll>
    </section>
  );
}

const Whitebackground = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: linear-gradient(transparent, #f9f9f9 180px);
  z-index: 4;
  top: 150px;
`;

const Gridbackground = styled.div`
  background-size: 40px 40px;
  background-image: radial-gradient(circle, #a9a9a9 1px, rgba(0, 0, 0, 0) 1px);
  position: absolute;
  top: 100px;
  width: 100%;
  height: 100%;
  z-index: 5;
`;

const WorkExpDiv = styled.div`
  z-index: 60;
  display: grid;
  justify-content: center;
  justify-items: center;
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

      {/* Fourth level */}

      <CloudDiv
        style={{
          left: "10%",
          top: "70%",
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
          top: "80%",
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
          top: "90%",
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
          top: "80%",
          transform: `translate(${props.offsetY * 0.3}px,-${
            props.offsetY * 0.7
          }px)`,
        }}
      >
        <img className="cloudimg" src={Cloud1} alt="oops monki cant find"></img>
      </CloudDiv>

      <CloudDiv
        style={{
          left: "10%",
          top: "70%",
          transform: `translate(${props.offsetY * 0.3}px,-${
            props.offsetY * 0.7
          }px)`,
        }}
      >
        <img className="cloudimg" src={Cloud2} alt="oops monki cant find"></img>
      </CloudDiv>

      <CloudDiv
        style={{
          left: "-20%",
          top: "80%",
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
  /* z-index: 5; */
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
