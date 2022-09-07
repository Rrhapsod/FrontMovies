import { Container, Form, TextArea, TagArea } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { NewTag } from "../../components/NewTag";

import { FiArrowLeft } from "react-icons/fi";

import { Link } from "react-router-dom";

export function CreateMovie() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <Link to="/">
            <FiArrowLeft />
            Voltar
          </Link>
          <h1>Novo filme</h1>
          <section>
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 10)" />
          </section>
          <TextArea placeholder="Observações" />
          <h3>Marcadores</h3>
          <TagArea>
            <NewTag value="Comédia" />
            <NewTag isNew placeholder="Novo marcador" />
          </TagArea>
          <section>
            <button>Excluir filme</button>
            <button>Salvar Alterações</button>
          </section>
        </Form>
      </main>
    </Container>
  );
}
