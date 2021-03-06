import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyles = createGlobalStyle`
  * {
    outline: none;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html, body {
    font-family: 'Helvetica Neue', Arial, Helvetica, sans-serif, Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #FFF;
    color: #000;
    font-size: 1rem;
  }
`;

export default GlobalStyles;