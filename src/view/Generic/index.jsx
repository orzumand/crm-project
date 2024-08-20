import { useLocation } from "react-router-dom";
import { Container } from "./styled";

const Generic = () => {
  const location = useLocation();
  return (
    <Container>
      <h1>{location.pathname} coming soon ...</h1>
    </Container>
  );
};

export default Generic;
