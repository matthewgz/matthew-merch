import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400&display=swap");

  body {
    margin: 0;
    padding: 0;
    color: #3c484e;
    font-family: 'Open Sans', sans-serif;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
