import { Section } from "./styled";

export const Tecnologias = () => {
  return (
    <Section>
      <h1>Tecnologias que eu uso:</h1>
      <nav className="techs">
        <img
          className="icons"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
        />

        <img
          className="icons"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
        />

        <img
          className="icons"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sequelize/sequelize-original.svg"
        />

        <img
          className="icons"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg"
        />

        <img
          className="icons"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg"
        />

        <img
          className="icons"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
        />

        <img
          className="icons"
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg"
        />
      </nav>
    </Section>
  );
};
