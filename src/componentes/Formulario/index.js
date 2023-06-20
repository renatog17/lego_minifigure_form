import './Formulario.css'
import CampoTexto from '../CampoTexto';

const Formulario = () => {
    return (
        <section className='formulario'>
            <form>
                <h2>Faça um catálogo das suas minifigures!</h2>
                <CampoTexto label='Nome' placeholder='Digite o seu nome' />
                <CampoTexto label='Cargo' placeholder='Digite o seu cargo' />
                <CampoTexto label='Imagem' placeholder='URL da sua imagem' />
            </form>
        </section>
    )
}

export default Formulario