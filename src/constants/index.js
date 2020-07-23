import { keyframes } from 'styled-components';


export const Colors = {
    textDark: "#000",
    textLightGray: "#999",
    textLight: "#fff",
    backgroundLight: "#FFF",
    backgroundLightGray: "#999",
    backgroundDark: "#000",
    borderDark: "#000",
    borderGray: "#999",
    borderLight: "#fff",

    cardRed: 'rgb(243,63,51)',
    cardBlue: 'rgb(38,114,228)',
    cardGreen: 'rgb(0, 176, 115)',
    cardYellow: 'rgb(255, 185, 0)',
    cardPurple: 'rgb(147, 0, 255)',
    cardPink: 'rgb(255, 65, 133)'
};

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

