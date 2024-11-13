import GlobalStyle from "./styles/globalStyle";
import { Header } from "./components/header";
import { Content } from "./components/contents";
import { Projetos } from "./components/projects";
import { Contatos } from "./components/Contact";
import { Tecnologias } from "./components/techs";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Content />
      <Projetos />
      <Contatos></Contatos>
      {/* <Tecnologias /> */}
    </>
  );
}

export default App;

