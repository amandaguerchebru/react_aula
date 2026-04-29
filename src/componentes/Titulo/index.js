import styled from "styled-components";

export const Titulo = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    // props - se eu não colocar nenhuma cor a cor embaixo aparece (definição da cor padrão)
    color: ${props => props.cor || '#EB9b00'};
    font-size: ${props => props.tamanhoFonte || '18px'};
    // serve para facilitar a edição
    text-align: ${props => props.alinhamento || 'center'};
    margin: 0;
`