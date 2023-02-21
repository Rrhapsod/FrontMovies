import { Container } from "./styles";

export function Info({ icon: Icon, ...rest }) {
  return (
    <Container>
      {Icon && <Icon size={16} />}
      <p {...rest} />
    </Container>
  );
}
