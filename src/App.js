// Estamos fazendo refatoração de código
import './App.css';
import Logo from './componentes/Logo';
import OpcoesHeader from './componentes/OpcoesHeader';
import perfil from './imagens/perfil.svg';
import sacola from './imagens/sacola.svg';

const icones = [perfil, sacola];

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        {/* nome da classe minusculo por ser importado */}
        {/* segurando o ctrl conseguimos ver a função */}
        {/* os componentes geram */}
        <Logo></Logo>
        <OpcoesHeader></OpcoesHeader>
        
      </header>
    </div>
  );
}

// exporta para abrir o arquivo que queremos
export default App;
