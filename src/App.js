// Estamos fazendo refatoração de código
import './App.css';
import Logo from './componentes/Logo';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        {/* nome da classe minusculo por ser importado */}
        {/* segurando o ctrl conseguimos ver a função */}
        <Logo></Logo>
      </header>
    </div>
  );
}

// exporta para abrir o arquivo que queremos
export default App;
