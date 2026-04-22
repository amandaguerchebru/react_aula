import './estilo.css'
import IconesHeader from '../IconesHeader';
import Logo from '../Logo';
import OpcoesHeader from '../OpcoesHeader';

function Header() {
    return (
        <header className='App-header'>
            {/* os componentes geram tags*/}
            <Logo />
            <OpcoesHeader />
            <IconesHeader />
        </header>
    )
}

/* nome da classe minusculo por ser importado */
/* segurando o ctrl conseguimos ver a função */

export default Header