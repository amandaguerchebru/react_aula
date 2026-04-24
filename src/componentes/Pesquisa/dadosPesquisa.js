// dadosPesquisas.js serve como um banco de dados
// ao importar, quando puxamos o import a imagem é chamada para a const (são como variáveis)
import livro from '../../imagens/livro.png';

export const livros = [
    {nome: 'Liderança em Design', id: 1, src: livro}, 
    {nome: 'JavaScrpit Assertivo', id: 2, src: livro}, 
    {nome: 'Cangaceiro em JavaScript', id: 3, src: livro}, 
    {nome: 'Aventureiros do Java', id: 4, src: livro}, 
]