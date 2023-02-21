import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import { Container, Form, TextArea, TagArea } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { NewTag } from "../../components/NewTag";

import { api } from "../../services/api";

export function CreateMovie() {
  const [title, setTitle] = useState("");
  const [score, setScore] = useState("");
  const [description, setDescription] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleNewMovie() {
    await api.post("/movies", {
      title,
      description,
      rating: Number(score),
      tags,
    });

    alert("Filme cadastrado com sucesso!");
    navigate("/");
  }

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
            <Input
              placeholder="Título"
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              placeholder="Sua nota (de 0 a 10)"
              onChange={(e) => setScore(e.target.value)}
            />
          </section>
          <TextArea
            placeholder="Observações"
            onChange={(e) => setDescription(e.target.value)}
          />
          <h3>Marcadores</h3>
          <TagArea>
            {tags.map((tag, index) => (
              <NewTag
                key={String(index)}
                value={tag}
                onClick={() => {
                  handleRemoveTag(tag);
                }}
              />
            ))}
            <NewTag
              isNew
              placeholder="Novo marcador"
              onChange={(e) => setNewTag(e.target.value)}
              value={newTag}
              onClick={handleAddTag}
            />
          </TagArea>
          <section>
            <a>Excluir filme</a>
            <a onClick={handleNewMovie}>Salvar Alterações</a>
          </section>
        </Form>
      </main>
    </Container>
  );
}
