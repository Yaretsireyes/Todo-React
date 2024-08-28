import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoButton } from '../TodoButton';
import { TodosLoading } from '../TodosLoading'
import { TodosError } from '../TodosError'
import { EmptyTodos } from '../EmptyTodos'
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { FormTodo } from '../FormtTodo';
import { BuscarTodo } from '../BuscarTodo'



function AppUI() {

    const {
        loading,
        error,
        searchTodos,
        searchValue,
        completeTodo,
        deleteTodo,
        aumentarLikes,
        disminuirLikes,
        openModal,
        buttonAgregarModal,
        Edit,
    } = React.useContext(TodoContext)
    return (
        <>
            <TodoCounter />
            <TodoSearch />
            <TodoList>
                {loading && <TodosLoading />}
                {error && <TodosError />}
                {(!loading && searchTodos.length === 0 && searchTodos == searchValue) && <EmptyTodos />}
                {(!loading && searchTodos.length == 0 && searchValue != searchTodos) && <BuscarTodo />}
                {searchTodos.map(todo => (<TodoItem
                    key={todo.id}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.id)}
                    onDelete={() => deleteTodo(todo.id)}
                    onAumentarLikes={() => aumentarLikes(todo.text)}
                    likes={todo.likes}
                    onDisminuirLikes={() => disminuirLikes(todo.text)}
                    onEdit={(() => Edit(todo.id))}
                />))}
            </TodoList >
            <TodoButton
                buttonAgregarModal={buttonAgregarModal}
            />
            {openModal && (
                <Modal>
                    <FormTodo />
                </Modal>
            )}
        </>
    )
}

export { AppUI }