import styled from "styled-components";

export const ParallaxDiv = styled.div`
  width: 100%;
  height: 145vh;
  position: relative;
  justify-content: center;
  overflow: hidden;
  background-color: #000001;
`;

export const BackgroundDiv = styled.div`
  width: 100vw;
  height: calc(100vh + 1500px);
  position: relative;
  margin-bottom: 0;
`;

export const MidgroundDiv = styled.div`
  width: 100vw;
  opacity: 1;
  top: 0px;
  position: absolute;
  z-index: 3;
`;

export const ForegroundDiv = styled.div`
  top: 25%;
  z-index: 4;
  position: relative;
  width: 100vw;
  justify-content: center;
`;
