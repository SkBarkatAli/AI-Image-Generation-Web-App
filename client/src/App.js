import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Theme";
import Home from "./pages/Home";
import Createpost from "./pages/CreatePost"

const Container = styled.div`
width: 100%;
height: 100%;
display: flex;
background: ${({theme})=>theme.bg};
color: ${({theme})=>theme.text_primary};
overflow-x:hidden;
transition: all 0.2s ease;
`;

const Wrapper = styled.div`
height: 100%;
position: relative;
display: flex;
flex-direction column;
justigy-content: space-between;
flex:3;
`;

function App() {
  return <ThemeProvider theme={darkTheme}>
    <Container>
      <Wrapper>
        <Home/>
        <CreatePost/>
      </Wrapper>
    </Container>
  </ThemeProvider>;
}

export default App;
