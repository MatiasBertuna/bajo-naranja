import { createGlobalStyle } from 'styled-components';
import AvenirR from '../fonts/Avenir/Regular.otf';
import AvenirB from '../fonts/Avenir/Black.otf';
import AvenirEB from '../fonts/Avenir/ExtraBold.otf';
import AvenirBI from '../fonts/Avenir/BoldItalic.otf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'AvenirR';
    src: url(${AvenirR}) format('opentype');
  }
  @font-face {
    font-family: 'AvenirB';
    src: url(${AvenirB}) format('opentype');
  }
  @font-face {
    font-family: 'AvenirEB';
    src: url(${AvenirEB}) format('opentype');
  }
  @font-face {
    font-family: 'AvenirBI';
    src: url(${AvenirBI}) format('opentype');
  }
  html {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    box-sizing: border-box;
    height: 100%;
    font-size: 62.5%;
  }
  ::selection {
    background-color: ${props => props.theme.orange};
    color: ${props => props.theme.black};
  }
  ::-webkit-scrollbar {
    background: ${props => props.theme.black};
  }
  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.orange};
    border-radius: 70% 25% 50%;
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
    cursor: url('/imgs/cursor.png'), auto;
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