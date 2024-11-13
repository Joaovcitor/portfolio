import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: transparent;
  padding: 10px;

  ul {
    list-style: none;
    padding: 0;
    font-family: "Montserrat", "sans-serif";
  }

  ul li {
    position: relative;
    padding-left: 25px;
    margin-bottom: 8px;
  }

  ul li::before {
    content: "✔";
    position: absolute;
    left: 0;
    color: green; /* Cor do check */
    font-size: 16px;
  }

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
    color: white;
  }

  .tech {
    color: orange;
  }

  .icons {
    width: 30px;
    margin: 0 5px;
  }

  .container-icons {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 10px;
  }

  h2 {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bolder;
  }

  a {
    color: black;
    text-decoration: none;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bolder;
    background-color: white;
    padding: 10px;
    border-radius: 5px;
    margin-top: 10px;
    display: inline-block;
  }

  div {
    width: 290px;
    background: #00ffa0;
    padding: 1rem;
    border-radius: 1rem;
    border: 0.5vmin solid #05060f;
    box-shadow: 0.4rem 0.4rem #05060f;
    overflow: hidden;
    color: black;
    margin-bottom: 20px;

    @media (min-width: 768px) {
      width: 45%;
    }

    @media (min-width: 1024px) {
      width: 30%;
    }
  }

  p {
    color: #05060f;
    font-size: 1.3rem;
    line-height: 1.25;
    font-weight: 500;
  }
`;
