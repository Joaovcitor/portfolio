import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;

  div {
    display: flex;
    justify-content: center;
    flex-direction: row;
    @media (max-width: 450px) {
      flex-direction: column;
    }
    margin-bottom: 20px;
  }
  h1 {
    margin: 0;
    font-family: "Judson", serif;
    font-size: 30px;
    font-weight: bolder;
    color: white;
  }
  a {
    color: white;
    align-items: center;
    text-align: center;
    text-decoration: none;
    justify-content: center;
    font-family: "Montserrat", "sans-serif";
    font-size: 18px;
    font-weight: bolder;
    /* margin-left: 20px; */
    margin-bottom: 20px;
    @media (max-width: 450px) {
      margin-left: 0px;
    }
  }

  p {
    color: white;
    text-decoration: none;
    font-family: "Montserrat", "sans-serif";
    font-size: 18px;
    font-weight: bolder;
    margin-left: 20px;
    margin-bottom: 20px;
    @media (max-width: 450px) {
      margin-left: 0px;
    }
  }
`;
