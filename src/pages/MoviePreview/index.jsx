import { Header } from "../../components/Header";
import { Tag } from "../../components/Tag";
import { Info } from "../../components/Info";
import { Picture } from "../../components/Picture";

import { FiArrowLeft, FiClock } from "react-icons/fi";

import { Container, Content, Title, Stamps } from "./styles";

import { Link } from "react-router-dom";

export function MoviePreview() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <Link to="/">
            <FiArrowLeft size={20} />
            Voltar
          </Link>
          <Title>
            <h1>Interestellar</h1>
            <span>8</span>
          </Title>
          <Stamps>
            <Info icon={Picture}>por Renan Rondon</Info>
            <Info icon={FiClock}>23/05/2002 às 08:00</Info>
          </Stamps>
          <section>
            <Tag name="Ficção Científica" />
            <Tag name="Drama" />
            <Tag name="Família" />
          </section>
          <p>
            Pragas nas colheitas fizeram a civilização humana regredir para uma
            sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto
            da NASA, tem uma fazenda com sua família. Murphy, a filha de dez
            anos de Cooper, acredita que seu quarto está assombrado por um
            fantasma que tenta se comunicar com ela. Pai e filha descobrem que o
            "fantasma" é uma inteligência desconhecida que está enviando
            mensagens codificadas através de radiação gravitacional, deixando
            coordenadas em binário que os levam até uma instalação secreta da
            NASA liderada pelo professor John Brand. O cientista revela que um
            buraco de minhoca foi aberto perto de Saturno e que ele leva a
            planetas que podem oferecer condições de sobrevivência para a
            espécie humana. As "missões Lázaro" enviadas anos antes
            identificaram três planetas potencialmente habitáveis orbitando o
            buraco negro Gargântua: Miller, Edmunds e Mann – nomeados em
            homenagem aos astronautas que os pesquisaram. Brand recruta Cooper
            para pilotar a nave espacial Endurance e recuperar os dados dos
            astronautas; se um dos planetas se mostrar habitável, a humanidade
            irá seguir para ele na instalação da NASA, que é na realidade uma
            enorme estação espacial. A partida de Cooper devasta Murphy. Além de
            Cooper, a tripulação da Endurance é formada pela bióloga Amelia,
            filha de Brand; o cientista Romilly, o físico planetário Doyle, além
            dos robôs TARS e CASE. Eles entram no buraco de minhoca e se dirigem
            a Miller, porém descobrem que o planeta possui enorme dilatação
            gravitacional temporal por estar tão perto de Gargântua: cada hora
            na superfície equivale a sete anos na Terra. Eles entram em Miller e
            descobrem que é inóspito já que é coberto por um oceano raso e
            agitado por ondas enormes. Uma onda atinge a tripulação enquanto
            Amelia tenta recuperar os dados de Miller, matando Doyle e atrasando
            a partida. Ao voltarem para a Endurance, Cooper e Amelia descobrem
            que 23 anos se passaram.
          </p>
        </Content>
      </main>
    </Container>
  );
}