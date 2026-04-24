import Input from "../Input";
import styled from "styled-components";
// estado = vivo, morto
import { useState } from "react";
// em chaves por serem DADOS
import { livros } from './dadosPesquisa';

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

function Pesquisa() {
    const [ livrosPesquisados, setLivrosPesquisados ] = useState('')
    return (
        <PesquisaContainer>
            <h2>Já sabe por onde começar?</h2>
            <h3>Encontre seu livro em nossa estante.</h3>
            <Input placeholder="Escreva sua próxima leitura" 
            // BLUR - registra a quantidade de vezes que escrevemos (para sabermos o que foi escrito no campo input)
                    onBlur={evento => {
                        const textoDigitado = evento.target.value;
                        const resultadoPesquisa = livros.filter()
                        // filtra todos os livros de acordo com o que é digitado e retorna se tem ou não
                    }}
            />

        </PesquisaContainer>
    )
}

export default Pesquisa;

// estado de componente -  variáveis mutáveis desses componentes