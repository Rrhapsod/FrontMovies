import { Container, Title, MovieList } from "./styles";

import { Header } from "../../components/Header";
import { Movie } from "../../components/Movie";

import { FiPlus } from "react-icons/fi";

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function Home() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();

  function handlePreview(id) {
    navigate(`/preview/${id}`);
  }

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/movies?title=${search}`);
      setMovies(response.data);
    }

    fetchMovies();
  }, [search]);

  return (
    <Container>
      <Header />
      <Title>
        <h1>Meus filmes</h1>
        <Link to="/new">
          <FiPlus size={20} />
          Adicionar filme
        </Link>
      </Title>
      <MovieList>
        {movies.map((movie) => (
          <Movie
            key={String(movie.id)}
            data={movie}
            onClick={() => handlePreview(movie.id)}
          />
        ))}
      </MovieList>
    </Container>
  );
}
