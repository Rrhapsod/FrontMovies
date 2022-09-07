import { Container, Title, MovieList } from "./styles";

import { Header } from "../../components/Header";
import { Movie } from "../../components/Movie";

import { FiPlus } from "react-icons/fi";

import { Link } from "react-router-dom";

export function Home() {
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
        <Movie
          data={{
            title: "Interestellar",
            score: 8,
            summary:
              "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...",
            tags: [
              { id: 1, name: "Ficção Científica" },
              { id: 2, name: "Drama" },
              { id: 3, name: "Família" },
            ],
          }}
        />
      </MovieList>
    </Container>
  );
}
