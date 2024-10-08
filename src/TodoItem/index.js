import { CompleteIcon } from '../TodoIcon/completeIcon'
import { DeleteIcon } from '../TodoIcon/deleteIcon'
import { LikeIcon } from '../TodoLike/LikeIcon'
import './TodoItem.css'

function TodoItem(props) {
    return (
        <li className="TodoItem">
            <CompleteIcon
                completed={props.completed}
                onComplete={props.onComplete}
            />
            <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
            <LikeIcon
                aumentarLikes={props.onAumentarLikes}
                likes={props.likes}
                disminuirLikes={props.onDisminuirLikes}
            />
            <DeleteIcon
                onDelete={props.onDelete}
            />
            <button className="learn-more " onClick={props.onEdit}>Editar</button>
        </li>
    )
}
export { TodoItem }