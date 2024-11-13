import { Section } from "./styled";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

export const Contatos = () => {
  const handleWhatsAppRedirect = (e) => {
    e.preventDefault();
    const url = `https://api.whatsapp.com/send?phone=5588996773378`;
    window.open(url, "_blank"); // Abre o link em uma nova aba
  };

  const textToCopy = "joaovictorfx17@gmail.com";

  const email = "joaovictorfx17@gmail.com"; // Deixe em branco se não quiser preencher o destinatário

  const handleEmailClick = () => {
    const mailtoLink = `mailto:${email}`;
    window.location.href = mailtoLink;
  };
  return (
    <Section>
      <h1>Contatos</h1>
      <div>
        <a onClick={handleEmailClick} href="">
          <MdEmail color="white" size={30}></MdEmail>
          <p>E-mail</p>
          <p>joaovictorfx17@gmail.com</p>
        </a>
        <a href="" onClick={handleWhatsAppRedirect}>
          <MdLocalPhone color="white" size={30}></MdLocalPhone>
          <p>Telefone</p>
          <p>(88)9 9677-3378</p>
        </a>
        <a href="https://www.linkedin.com/in/jo%C3%A3ovictordeveloper/">
          <FaLinkedin color="white" size={30}></FaLinkedin>
          <p>LinkedIn</p>
          <p>@joaodeveloper</p>
        </a>
        <a href="https://github.com/Joaovcitor">
          <FaGithub color="white" size={30}></FaGithub>
          <p>GitHub</p>
          <p>@Joaovcitor</p>
        </a>
      </div>
    </Section>
  );
};
