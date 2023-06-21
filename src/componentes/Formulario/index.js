import './Formulario.css'
import CampoTexto from '../CampoTexto';

const Formulario = () => {
    return (
        <section className='formulario'>
            <form>
                <h2>Faça um catálogo das suas minifigures!</h2>
                <CampoTexto label='Apelido' placeholder='O apelido de acordo com Nicolas' />
                <CampoTexto label='Descrição' placeholder='Descrição da minifigure' />
                <CampoTexto label='Imagem' placeholder='Foto da minifigure' />
                <CampoTexto label='Coleção' placeholder='Coleção da qual ela faz parte'/>
            </form>
        </section>
    )
}

export default Formulario