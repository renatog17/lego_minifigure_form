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
    return (
        <section className='formulario'>
            <form>
                <h2>Faça um catálogo das suas minifigures!</h2>
                <CampoTexto label='Apelido' placeholder='O apelido de acordo com Nicolas' />
                <CampoTexto label='Descrição' placeholder='Descrição da minifigure' />
                <CampoTexto label='Imagem' placeholder='Foto da minifigure' />
                <CampoTexto label='Coleção' placeholder='Coleção da qual ela faz parte'/>
                <ListaSuspensa label='Série' itens={series}/>
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario