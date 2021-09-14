import { createGlobalStyle } from 'styled-components';
import AvenirR from '../fonts/Avenir/Regular.otf';
import AvenirMI from '../fonts/Avenir/MediumItalic.otf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'AvenirR';
    src: url(${AvenirR}) format('opentype');
  }
  @font-face {
    font-family: 'AvenirMI';
    src: url(${AvenirMI}) format('opentype');
  }
  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    box-sizing: border-box;
    height: 100%;
    font-size: 62.5%;
  }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'AvenirR', sans-serif;
    font-size: 1.7rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${props => props.theme.black};
    color: ${props => props.theme.white};
  }
  *,
  :after,
  :before {
    box-sizing: border-box;
  }
  h1, h2, h3, h4, h5, h6, p, a {
    margin: 0;
    padding: 0;
    font-weight: inherit;
    font-style: inherit;
  }
  button {
    font: inherit;
    border: none;
  }
`;

const theme={
  orange: '#EC791A',
  black: '#101010',
  white: '#ffffff'
}

export {GlobalStyle, theme};