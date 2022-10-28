import { Background, Container, Form } from "./styles";

import { FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { Link } from "react-router-dom";
import { useState } from "react";

import { api } from "../../services/api.js";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    fetch(`${api.baseURL}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify({ name, email, password }),
    })
      .then((response) => response.json())
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar...");
        }
      });
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>
        <Input
          icon={FiUser}
          placeholder="Nome"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          icon={FiMail}
          placeholder="E-mail"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          icon={FiLock}
          placeholder="Senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title="Cadastrar" onClick={handleSignUp} />

        <Link to="/">
          <FiArrowLeft size={20} />
          Voltar para o login
        </Link>
      </Form>
      <Background />
    </Container>
  );
}
