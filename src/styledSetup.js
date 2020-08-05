import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  background-color: #9DE1FF;
  box-sizing: border-box;
  color: #39312E;
}

@media (max-width: 736px) {
  html {
    font-size: 50%;
  }
}

@media (max-width: 480px) {
  html {
    font-size: 40%;
  }
}

@media (max-width: 400px) {
  html {
    font-size: 35%;
  }
}

`;

export const theme = {
  colors: {
    colorDarkBrown: '#6a594f',
    colorDarkerBrown: '#372E29',
    colorPrimaryLight: '#9DE1FF',
    colorPrimary: '#377BFF',
    colorDark: '#343a40',
    colorDarkBlue: '#2B9FB3',
    colorLightBrown: '#DFCAC0',
    colorLighterBrown: '#f0e6e2',
    colorWhite: '#fff',
    colorBlack: '#000',
    colorGrayDark: '#6c757d',
    colorGrayDarker: '#545b62',
    colorGrayLight2: '#b2b2b2',
    colorGrayMedium: '#e3e3e3',
    colorDanger: '#dc3545',
    colorWarning: '#E38C2A',
    colorSuccess: '#C4AD57',
    colorInfo: '#72DDE8',
  },
  fonts: {
    fontFancy: "'Signika', sans-serif",
    fontStandard: "'Amiri', serif",
  },
  breakpoints: {
    largestScreen: '1690px',
    largeScreen: '1280px',
    mediumScreen: '980px',
    smallScreen: '736px',
    phoneScreen: '480px',
  },
  zIndex: {
    loader: '9999',
    overlay: '9990',
    header: '1040',
    important: '10',
  },
  borders: {
    borderRadiusLarge: '30px',
    borderRadiusMedium: '20px',
    borderRadiusSmall: '10px',
  },
  fontSizes: {
    fontSizeLg: '2rem',
    prominent: '1.4rem',
    prominent2: '1.6rem',
  },
  fontStyles: {
    boldest: "'Open Sans', sans-serif",
  },
};
