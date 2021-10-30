import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --dark-bg:  #071E3D;       //total bg, nav, card colors
    --gray-1: #21E6C1;         // all text
    --deep-dark: #1F4287;      //footer, nav, education cards
    --gray-2: #278EA5;        // secondary text color
    --white : white;      
    --black: black;
  }
  html{
    font-size: 10px;
    font-family: 'Roboto Mono';
    background-color: var(--dark-bg);
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
  hr{
    border: 1px solid #21E6C1;
  }
`;
export default GlobalStyles;
