
import React from "react"
import { TodoContext } from "../TodoContext"
import './index.css'


function FormTodo() {
    const {
        addTodo,
        setOpenModal,
        setNewTodoValue,
        newTodoValue,
        id,
        Update,
        setId
    } = React.useContext(TodoContext)

    const onSubmit = (event) => {
        event.preventDefault()
        addTodo(newTodoValue)
        setOpenModal(false)
        setNewTodoValue('')
    }


    const onCancel = () => {
        setOpenModal(false)
        setNewTodoValue('')
        setId(false)
    }

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    const update = (event) => {
        event.preventDefault();
        Update(id, newTodoValue)
        setOpenModal(false)
        setNewTodoValue('')
        setId(false)
    }


    return (
        <div className="form-container">
            <form className="form=group" onSubmit={id ? update : onSubmit}>
                <div className="form-group">
                    <label for="textarea" className="titulo-textarea">Ingresa la tarea que deseas agregar</label>
                    <textarea className="textarea" value={newTodoValue} onChange={onChange} name="textarea" id="textarea" />
                </div>
                <div className="container-botones">
                    <button className="form-submit-btn-cancelar" onClick={() => onCancel()}>Cancelar</button>
                    <button className="form-submit-btn" type="submit">{id ? 'actualizar' : 'agregar'}</button>
                </div>
            </form>
        </div>
    )
}
export { FormTodo }