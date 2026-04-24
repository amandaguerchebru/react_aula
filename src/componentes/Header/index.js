import IconesHeader from '../IconesHeader';
import Logo from '../Logo';
import OpcoesHeader from '../OpcoesHeader';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #fff;
    display: flex;
    justify-content: center;
`

function Header() {
    return (
        <HeaderContainer>
            {/* os componentes geram tags*/}
            <Logo />
            <OpcoesHeader />
            <IconesHeader />
        </HeaderContainer>
    )
}

/* nome da classe minusculo por ser importado */
/* segurando o ctrl conseguimos ver a função */

export default Header