import { FiSearch } from "react-icons/fi";

import { Container, Profile, Name, Picture, SignOut } from "./styles";

import { useAuth } from "../../hooks/auth";
import { Input } from "../Input";
import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Header() {
  const { signOut, user } = useAuth();

  const navigation = useNavigate();

  function handleSignOut() {
    navigation("/");
    signOut();
  }

  const [search, setSearch] = useState("");

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  return (
    <Container>
      <h2>RocketMovies</h2>
      <Input
        icon={FiSearch}
        placeholder="Pesquisar pelo título"
        type="text"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Profile>
        <div>
          <Name to="/profile">{user.name}</Name>
          <SignOut onClick={handleSignOut}>sair</SignOut>
        </div>
        <Picture to="/profile">
          <img src={avatarUrl} alt="Foto do usuário"></img>
        </Picture>
      </Profile>
    </Container>
  );
}
