import React from 'react'
import './index.css'
import { TodoContext } from '../TodoContext'


function EditarButton() {

    const { setOpenModal } = React.useContext(TodoContext)

    return (
        <div className='editar-button'>
            <button className="editar-button" onClick={() => setOpenModal(true)}>Editar</button>
        </div >
    )
}

export { EditarButton }