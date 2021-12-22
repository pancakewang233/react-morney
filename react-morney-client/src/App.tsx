import {
  Route,
  Routes,
  BrowserRouter,
  Outlet,
  Navigate,
} from "react-router-dom";
import styled from "styled-components";
import { Nav } from "./components/Nav";
import { routeList } from "./router";
import { NoMatch } from "./views/NoMatch";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Main = styled.div`
  flex-grow: 1;
  overflow: auto;
`;

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Main>
          <Routes>
            {routeList.map((item) => (
              <Route path={item.path} element={item.element} key={item.path} />
            ))}
            <Route path="/" element={<Navigate to="/money" />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Main>
        <Nav />
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
