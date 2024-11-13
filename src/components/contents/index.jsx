import { Section, Div, Nav, Mic } from "./styled";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Content = () => {
  return (
    <Section>
      <Mic>
        <div>
          <h1>Olá, eu sou o João Victor :)</h1>
          <p>Desenvolvedor Back-End</p>
        </div>
      </Mic>
      <Div>
        <h2>Sobre mim</h2>
        <p>
          Tenho experiência em criar sistemas do zero utilizando Nodejs e o
          Framework Express, em conjunto com o ORM Sequelize. Também desenvolvi
          o Front-End dos sistemas utilizando React.
          <br />
          Minha cidade ficou entre as 5 melhores experiências exitosas de
          assistência social, onde uma ideia de sistema que eu tive, ganhou!
        </p>
      </Div>
    </Section>
  );
};
