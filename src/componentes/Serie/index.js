import Minifigure from '../Minifigure'
import './Serie.css'

const Serie = (props) =>{
    return(
    props.minifigures.length >0 &&
    <section className='serie' style={{backgroundColor: props.corSecundaria}}>
        <h3 style={{borderColor: props.corPrimaria}}>
            {props.nome}
        </h3>
        <div className='minifigures'>
        {props.minifigures.map (minifigure => <Minifigure key={minifigure.apelido} corDeFundo={props.corPrimaria} apelido={minifigure.apelido} descricao={minifigure.descricao} imagem={minifigure.imagem}/>)}
        </div>
    </section>
    )
}

export default Serie