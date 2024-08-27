
import React from "react"
import { TodoContext } from "../TodoContext"
import './index.css'



function FormTodo() {
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext)

    const [newTodoValue, setNewTodoValue] = React.useState('')

    const onSubmit = (event) => {
        event.preventDefaul()
        addTodo(newTodoValue)
        setOpenModal(false)
    }

    const onCancel = () => {
        setOpenModal(false)
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }


    return (
        <div className="form-container">
            <form className="form=group" onSubmit={onSubmit} />
            <div className="form-group">
                <label for="textarea" className="titulo-textarea">Ingresa ala tarea desea agregar</label>
                <textarea className="textarea" value={newTodoValue} onChange={(e) => setNewTodoValue(e.target.value)} name="textarea" id="textarea" />
            </div>
            <div className="container-botones">
                <button className="form-submit-btn-cancelar" onClick={() => onCancel()}>Cancelar</button>
                <button className="form-submit-btn" onClick={() => onChange(addTodo(newTodoValue))}>Agregar</button>
            </div>
        </div>
    )
}
export { FormTodo }