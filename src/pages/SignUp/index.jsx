import { Background, Container, Form } from "./styles";

import { FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    fetch(`http://localhost:3333/users`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    })
      .then((response) => {
        if (response.ok) {
          alert("Usuário criado com sucesso!");
          return navigate("/");
        }
        return response.text().then((text) => {
          throw new Error(text);
        });
      })
      .catch((e) => {
        if (e) {
          const errorObject = JSON.parse(e.message);
          alert(errorObject.message);
        } else {
          alert("Um erro ocorreu!");
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
