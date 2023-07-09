import styled, {createGlobalStyle} from 'styled-components';
import Board from './Pages/Board/Board';
import Header from './Components/Header';
import Backlog from './Pages/Backlog/Backlog';

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segeo UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
    'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
const AppWrapper = styled.div`
  text-align: center;
`;

function App() {
  return (
    <>
    <GlobalStyle />
    <AppWrapper>
     <Header />
     <Board />
    </AppWrapper>
    </>
  );
}

export default App;
