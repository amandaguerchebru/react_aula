import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';
import styled from 'styled-components';


// A classe é a constante
// substitui na lista (li) - onde era li agora é Icone
const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
`

// ul = lista não ordenada
const Icones = styled.ul`
  display: flex;
  align-items: center;
  margin-right: 10px;
`

const icones = [perfil, sacola];

function IconesHeader() {
    return (
        <Icones>
            {icones.map((icone) => (
                <Icone><img src={icone} alt='icone'/></Icone>
            ))}
        </Icones>
    )
}

export default IconesHeader