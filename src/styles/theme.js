import { css } from "styled-components";
const sizes = {
  fullhd: 1408,
  widescreen: 1215,
  desktop: 800,
  tablet: 600,
  mobile: 0,
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}rem) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
export default media;
