// Estamos fazendo refatoração de código
import './App.css';
import Header from './componentes/Header';
import styled from 'styled-components';

// styled components = container que guarda os estilos 
const AppContainer = styled.div`
  width: 100vw;
  // vw - toda largura da tela = mesmo que porcentagem
  height: 100vw;
  background-image: linear-gradient(90deg, #002f52 35%, #326589);

  li {
  list-style: none;
}
`

function App() {
  return (
      <AppContainer>
        <Header />
      </AppContainer>
  );
}

// exporta para abrir o arquivo que queremos
export default App;