import logo from '../../imagens/logo.svg';
import styled from 'styled-components';
// todo componente é uma função java script que retorna no html

const LogoContainer = styled.div`
  display: flex;
  font-size: 30px;
`

const LogoImage = styled.img`
    margin-right: 10px;
`

function Logo() {
    return (
        <LogoContainer>
            <LogoImage src={logo} alt ='logo'></LogoImage>
            <p><strong>SENAI Books</strong></p>
        </LogoContainer>
    )
}

export default Logo