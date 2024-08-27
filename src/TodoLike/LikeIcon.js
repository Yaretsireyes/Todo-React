import { ReactComponent as DisLike } from './dislike-svgrepo-com.svg'
import { ReactComponent as Like } from './like-svgrepo-com.svg'
import './likeContador.css'


function LikeIcon({ likes, aumentarLikes, disminuirLikes }) {
    return (

        <div className='container-likes'>
            <div className='contador-likes'>{likes}</div>
            <div>
                <Like className='like' onClick={aumentarLikes} />
                <DisLike className='disLike' onClick={disminuirLikes} />
            </div>
        </div>
    )
}
export { LikeIcon }