import { Header } from "../../components/Header";
import { Tag } from "../../components/Tag";
import { Info } from "../../components/Info";
import { Picture } from "../../components/Picture";

import { FiArrowLeft, FiClock } from "react-icons/fi";

import { Container, Content, Title, Stamps } from "./styles";

import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function MoviePreview() {
  const [data, setData] = useState(null);

  const params = useParams();

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/movies/${params.id}`);
      setData(response.data);
    }

    fetchMovie();
  }, []);

  return (
    <Container>
      <Header />
      {data && (
        <main>
          <Content>
            <Link to="/">
              <FiArrowLeft size={20} />
              Voltar
            </Link>
            <Title>
              <h1>{data.title}</h1>
              <span>{data.rating}</span>
            </Title>
            <Stamps>
              <Info icon={Picture}>por Renan Rondon</Info>
              <Info icon={FiClock}>23/05/2002 às 08:00</Info>
            </Stamps>
            {data.tags && (
              <section>
                {data.tags.map((tag) => (
                  <Tag key={String(tag.id)} name={tag.name} />
                ))}
              </section>
            )}
            <p>{data.description}</p>
          </Content>
        </main>
      )}
    </Container>
  );
}
