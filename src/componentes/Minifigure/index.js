import './Minifigure.css'

const Minifigure = ({apelido, descricao, imagem, corDeFundo}) => {
    return(
        <div className='minifigure'>
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt=''></img>
            </div>
            <div className='rodape'>
                <h4>{apelido}</h4>
                <h5>{descricao}</h5>
            </div>
        </div>
    )
}

export default Minifigure