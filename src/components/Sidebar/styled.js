import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Leftbar = styled.div`
  width: 280px;
  max-width: 280px;
  min-width: 280px;
  background-color: #162539;
  height: 100vh;
  overflow: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Body = styled.div`
  flex: 1;
`;
const Wrapper = styled.div`
  margin: 16px 16px 0px 16px;
  border: 2px solid red;
`;

export { Container, Leftbar, Body, Wrapper };
