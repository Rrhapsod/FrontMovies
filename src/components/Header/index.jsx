import { FiSearch } from "react-icons/fi";

import { Container, Profile } from "./styles";

import { Input } from "../Input";

export function Header() {
  return (
    <Container>
      <h2>RocketMovies</h2>
      <Input icon={FiSearch} placeholder="Pesquisar pelo título" type="text" />
      <Profile to="/profile">
        <div>
          <strong>Renan Rondon</strong>
          <span>sair</span>
        </div>
        <img src="https://github.com/rrhapsod.png" alt="Foto do usuário"></img>
      </Profile>
    </Container>
  );
}
