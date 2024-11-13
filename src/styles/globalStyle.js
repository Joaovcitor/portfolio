import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}

@font-face {
    font-family: "Montserrat";
    src: url("/fonts/mont/Montserrat-SemiBold.ttf") format("truetype");
    font-weight: 400;
    font-style: italic;
}

@font-face {
    font-family: "Judson";
    src: url("/fonts/judson/Judson-Bold.ttf") format("truetype");
    font-weight: 700;
    font-style: normal;
}

body {
  /* background-color: #460575; */
  background-color: #171F26;
  color: black;
}
`;
