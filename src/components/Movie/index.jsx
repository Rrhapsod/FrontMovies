import { Container, Info } from "./styles";

import { Tag } from "../Tag";

export function Movie({data, ...rest}) {
  return (
    <Container {...rest}>
      <Info>
        <h1>{data.title}</h1>
        <span>{data.score}</span>
      </Info>
      <p>
        {data.summary}
      </p>
      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag key={tag.id} name={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  );
}
