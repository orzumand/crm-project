import { Outlet } from "react-router-dom";
import { Body, Container, Leftbar, Wrapper } from "./styled";
import Navbar from "../Navbar";

export const Sidebar = () => {
  return (
    <Container>
      <Leftbar>
        <h1 style={{ color: "white" }}>Sidebar</h1>
      </Leftbar>
      <Body>
        <Navbar />
        <Wrapper>
          <Outlet />
        </Wrapper>
      </Body>
    </Container>
  );
};
