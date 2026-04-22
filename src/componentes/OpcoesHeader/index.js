import './estilo.css'

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];
// AAAAAAAAAAAARRAY

function OpcoesHeader() {
    return (
        <ul className='opcoes'>
            {/* array function - quando alterar a array, ele já vem pra cá */}
            {textoOpcoes.map((texto) => (
                <li className='opcao'><p>{texto}</p></li>
            ))}
        </ul>
    )
}

export default OpcoesHeader