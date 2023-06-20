import './CampoTexto.css'

const CampoTexto = (props) =>{
    
    const placeholderModificadado = `${props.placeholder}...`

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input placeholder={placeholderModificadado}/>
        </div>
    )
}

export default CampoTexto