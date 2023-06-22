import Minifigure from '../Minifigure'
import './Serie.css'

const Serie = (props) =>{
    return(
    
    <section className='serie' style={{backgroundColor: props.corSecundaria}}>
        <h3 style={{borderColor: props.corPrimaria}}>
            {props.nome}
        </h3>
        <Minifigure></Minifigure>
    </section>
    )
}

export default Serie