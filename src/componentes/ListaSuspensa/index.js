import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return(
        <div className='lista-suspensa'>
            <label>
                {props.label}
            </label>
            <select>
                    {props.itens.map(item => {
                        return <option key={item}>{item}</option>
                        //sempre usar key
                    })}
            </select>
        </div>
    )
}

export default ListaSuspensa