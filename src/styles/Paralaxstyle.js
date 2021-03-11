import styled from "styled-components";

export const ParallaxDiv = styled.div`
  width: 100%;
  height: 145vh;
  /* background-color: transparent; */
  position: relative;
  justify-content: center;
  overflow: hidden;
  background-color: #000001;
`;

export const BackgroundDiv = styled.div`
  /* background-color: red; */
  /* background-color: transparent; */
  width: 100vw;
  height: calc(100vh + 1500px);
  position: relative;
  margin-bottom: 0;
`;

export const MidgroundDiv = styled.div`
  /* background-color: blue; */
  width: 100vw;
  /* height: 500px; */
  opacity: 1;
  top: 0px;
  position: absolute;
  z-index: 3;
`;

export const ForegroundDiv = styled.div`
  top: 25%;
  z-index: 4;
  position: relative;
  /* left: 0; */
  /* right: 0; */
  /* margin-left: auto; */
  /* margin-right: auto; */
  width: 100vw;
  /* max-width: 1200px; */
  /* min-width: 600px; */
  justify-content: center;
`;
