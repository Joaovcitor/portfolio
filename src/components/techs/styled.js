import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-color: transparent;
  padding: 10px;
  margin: 20px;
  flex-direction: column;

  .tech {
    color: orange;
  }

  .techs {
    display: flex;
    justify-content: center;
    flex-direction: column;

    @media (min-width: 1050px) {
      flex-direction: row;
    }
  }

  .icons {
    width: 50px;
    margin-left: 50px;
  }

  .container-icons {
    display: inline;
    justify-content: space-around;
    flex-direction: row;
    /* background-color: transparent; */
    height: 0;
    width: 0;
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
  }

  div {
    background-color: #281259;
    width: 350px;
    height: 230px;
    margin: 0 auto;
    padding: 10px;
    border-radius: 5px;
  }

  p {
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 500;
  }
`;
