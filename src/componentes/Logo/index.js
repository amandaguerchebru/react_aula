// todo componente é uma função java script que retorna no html
import './estilo.css';
import logo from '../../imagens/logo.svg';

function Logo() {
    return (
        <div className='logo'>
            <img src={logo} alt='logo' className='logo-img'></img>
            <p><strong>SENAI Books</strong></p>
        </div>
    )
}

export default Logo