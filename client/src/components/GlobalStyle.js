import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background: #161616;
    font-family: "Roboto", sans-serif;
}
`;

export default GlobalStyle;
