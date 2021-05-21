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
a{
    text-decoration: none;
    color:white;
    transition: all ease 0.5s;
    &:hover{
        color: #a300a3;
    }
}


`;

export default GlobalStyle;
