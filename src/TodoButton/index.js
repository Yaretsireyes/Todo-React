import './TodoButton.css'
function TodoButton(props) {
    return (
        <button className="TodoButton" onClick={props.buttonAgregarModal}>+</button>
    )
}
export { TodoButton }