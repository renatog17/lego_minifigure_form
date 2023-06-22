import './Formulario.css'
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao'

const Formulario = () => {
    const series = [
        'Serie 23',
        'Serie 24',
        'Lego city',
        'Lego city motos'
    ]

    const aoSalvar = (event) =>{
        event.preventDefault()
        console.log('form foi submetido')
    }
    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Faça um catálogo das suas minifigures!</h2>
                <CampoTexto obrigatorio={true} label='Apelido' placeholder='O apelido de acordo com Nicolas' />
                <CampoTexto obrigatorio={true} label='Descrição' placeholder='Descrição da minifigure' />
                <CampoTexto obrigatorio={true} label='Imagem' placeholder='Foto da minifigure' />
                <CampoTexto obrigatorio={true} label='Coleção' placeholder='Coleção da qual ela faz parte'/>
                <ListaSuspensa obrigatorio={true} label='Série' itens={series}/>
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario