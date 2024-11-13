import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background: #883df2;
  padding: 20px;
  -webkit-box-shadow: 1.5px 7px 9.5px -2.5px #000000;
  -moz-box-shadow: 1.5px 7px 9.5px -2.5px #000000;
  box-shadow: 1.5px 7px 9.5px -2.5px #000000;

  h2 {
    margin: 0;
    font-family: "Judson", serif;
    font-size: 30px;
    font-weight: bolder;
    color: black;
  }
  a {
    color: white;
    text-decoration: none;
    font-family: "Judson", serif;
    font-size: 22px;
    font-weight: bolder;
    margin-left: 20px;
  }
`;
