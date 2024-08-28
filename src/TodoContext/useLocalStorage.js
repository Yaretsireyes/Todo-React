import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = React.useState(initialValue)
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        const cargarDatos = async () => {
            setTimeout(() => {
                try {
                    const localStorageItem = localStorage.getItem(itemName)
                    let parsedItem;

                    if (!localStorageItem) {
                        localStorage.setItem(itemName, JSON.stringify(initialValue))
                        parsedItem = initialValue
                    } else {
                        parsedItem = JSON.parse(localStorageItem)
                        setItem(parsedItem)
                    }

                    setLoading(false);
                } catch (error) {
                    setError(true)
                }
            }, 2000);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        cargarDatos()
    }, []);



    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem))
        setItem(newItem)
    }

    return {
        item,
        saveItem,
        loading,
        error
    }

    // localStorage.removeItem('TODOS_V1')

    // const defaultTodos = [
    //   { text: 'Cortar cebolla', completed: false, likes: 0 },
    //   { text: 'Tomar el Curso de Intro a React.js', completed: false, likes: 0 },
    //   { text: 'Llorar con la Llorona', completed: false, likes: 0 },
    //   { text: 'LALALALALA', completed: false, likes: 0 },
    //   { text: 'Usar estados derivados', completed: false, likes: 0 }
    // ];


}
export { useLocalStorage }