import './Formulario.css'
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao'
import { useState } from 'react';

const Formulario = (props) => {
    

    const [apelido, setApelido] = useState('')
    const [descricao, setDescricao] = useState('')
    const [imagem, setImagem] = useState('')
    const [serie, setSerie] = useState('')


    const aoSalvar = (event) => {
        event.preventDefault()
        //console.log('form foi submetido', apelido, descricao, imagem, serie)
        props.aMinifiguraAdicionada({
            apelido,
            descricao,
            imagem,
            serie
        })
    }
    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Faça um catálogo das suas minifigures!</h2>
                <CampoTexto
                    brigatorio={true}
                    label='Apelido'
                    placeholder='O apelido de acordo com Nicolas'
                    valor={apelido}
                    aoAlterado={valor => setApelido(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label='Descrição'
                    placeholder='Descrição da minifigure'
                    valor={descricao}
                    aoAlterado={valor => setDescricao(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label='Imagem'
                    placeholder='Foto da minifigure'
                    valor = {imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label='Série' 
                    itens={props.series} 
                    valor={serie}
                    aoAlterado={valor => setSerie(valor)}/>
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario