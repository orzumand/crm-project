import { Navigate, Route, Routes } from "react-router-dom";
import { Container } from "./styled";
import { sidebar } from "../utils/sidebar";

const Root = () => {
  return (
    <Container>
      <Routes>
        {sidebar.map(({ id, path, element: Element, children }) =>
          children ? (
            children.map(
              ({ id: childId, path: childPath, element: ChildElement }) => (
                <Route
                  key={childId}
                  path={childPath}
                  element={<ChildElement />}
                />
              )
            )
          ) : (
            <Route key={id} path={path} element={<Element />} />
          )
        )}
        <Route path="/" element={<Navigate to={"/analitics"} />} />
        <Route path="*" element={<h1>404 NOT FOUND</h1>} />
      </Routes>
    </Container>
  );
};

export default Root;

// <Route key={id} path={path} element={<Element />} />
