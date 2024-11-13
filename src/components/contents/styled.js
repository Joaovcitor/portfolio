import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  padding: 10px;
  min-height: 300px;
  width: 100%;

  img {
    width: 50px;
  }

  h2 {
    margin: 0;
    color: white;
    font-family: "Montserrat", "sans-serif";
    font-weight: bolder;
  }
  a {
    display: flex;
    justify-content: center;
    color: black;
    text-decoration: none;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bolder;
    margin-left: 20px;
    flex-direction: row;
  }
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: justify;
  align-items: center;
  gap: 20px;
  margin: 20px;

  p {
    font-family: "Montserrat", Arial, Helvetica, sans-serif;
    font-weight: 500;
    color: white;
    font-size: 20px;
    max-width: 600px;
    overflow: hidden;
    @media (max-width: 550px) {
      font-size: 17px;
      max-width: 600px;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

export const Mic = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0 auto;
  margin-top: 40px;

  .photoPessoal {
    width: 200px;
    border-radius: 70%;
  }

  div {
    flex-direction: row;
  }

  h1 {
    font-family: "Montserrat", Arial, Helvetica, sans-serif;
    flex-direction: column;
    color: white;
  }

  p {
    font-family: "Montserrat", Arial, Helvetica, sans-serif;
    color: white;
  }
`;
