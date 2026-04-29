function CardRecomenda({titulo, subtitulo, descricao, img}) {
    // para facilitar edição - todo card de recomendação tem que ter obrigatoriamente esses pontos do parâmetro
    return (
        <div>
            <h3>{titulo}</h3>
            <h4>{subtitulo}</h4>
            <p>{descricao}</p>
            <img src={img} />
            {/* card de recomendação */}
            <button>Saiba mais</button>
        </div>
    )
}

export default CardRecomenda