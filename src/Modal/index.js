import ReactDOM from "react-dom";
import './index.css'

function Modal({ children }) {


    return ReactDOM.createPortal(
        children ,
        document.getElementById('modal')
    )
}

export { Modal }
