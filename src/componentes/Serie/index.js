import './Serie.css'

const Serie = (props) =>{
    return(
    
    <section className='serie' style={{backgroundColor: props.corSecundaria}}>
        <h3 style={{borderColor: props.corPrimaria}}>
            {props.nome}
        </h3>
    </section>
    )
}

export default Serie