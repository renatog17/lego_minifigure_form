import './CampoTexto.css'

const CampoTexto = (props) =>{
    
    const placeholderModificadado = `${props.placeholder}...`



    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input required={true} value={props.valor} onChange={aoDigitado} placeholder={placeholderModificadado}/>
        </div>
    )
}

export default CampoTexto