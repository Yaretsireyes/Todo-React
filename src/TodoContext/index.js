import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext()

function TodoProvider({ children }) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error, } = useLocalStorage('TODOS_V1', [])

    const {
        item: contador,
        saveItem: saveContador,
    } = useLocalStorage('CONTADOR_V1', 0)

    const [searchValue, setSearchValue] = useState('')

    const [openModal, setOpenModal] = useState(false)

    const buttonAgregarModal = () => {
        if (openModal === false) {
            setOpenModal(true)
        } else {
            setOpenModal(false)
        }
    }


    const completeTodo = (id) => {
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex(
            (todo) => todo.id === id
        )
        if (newTodos[todoIndex].completed === false) {
            newTodos[todoIndex].completed = true
        } else {
            newTodos[todoIndex].completed = false
        }
        saveTodos(newTodos)
    }

    const searchTodos = todos.filter((todo) => {
        return todo.text.toLowerCase().includes(searchValue.toLocaleLowerCase())
    })

    const addTodo = (text) => {
        const newTodos = [...todos]
        newTodos.push({
            id: contador + 1,
            text,
            completed: false,
            likes: 0,
        })
        saveContador(contador + 1)
        saveTodos(newTodos)
        setOpenModal(false)
    }

    const deleteTodo = (id) => {
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex(
            (todo) => todo.id === id
        )
        newTodos.splice(todoIndex, 1)
        saveTodos(newTodos)
    }

    const aumentarLikes = (text) => {
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        )
        newTodos[todoIndex].likes += 1
        saveTodos(newTodos)

    }

    const disminuirLikes = (text) => {
        const newTodos = [...todos]
        const todoIndex = newTodos.findIndex(
            (todo) => todo.text === text
        )
        if (newTodos[todoIndex].likes > 0) {
            newTodos[todoIndex].likes -= 1
        } else {
            alert('NO PUEDES DISMINUIR MAS LIKES :):')
        }
        saveTodos(newTodos)
    }


    const completedTodos = todos.filter(todo => todo.completed).length
    const totalTodos = todos.length

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            searchValue,
            setSearchValue,
            completeTodo,
            deleteTodo,
            totalTodos,
            searchTodos,
            aumentarLikes,
            disminuirLikes,
            openModal,
            setOpenModal,
            buttonAgregarModal,
            addTodo,
        }}>
            {children}
        </TodoContext.Provider>
    )
}



export { TodoContext, TodoProvider }