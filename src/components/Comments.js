import {useState} from "react"

function Comments({data}){

    const commentArray = data.comments.map(comment =>{
        return(
            <div key={comment.id}>
            <h3>{comment.user}</h3>
            <div>{comment.comment}</div>
        </div>
        )
    })

    const [displayComments, setDisplayComments] = useState(true)

    function handleCommentClick(){
        setDisplayComments(displayComments => !displayComments)
    }

    return(
        <div>
            <br></br>
            <button onClick={handleCommentClick}>{displayComments ? "Hide Comments" : "Show Comments"}</button>
            <div className = {displayComments ? "" : "hidden"} >
                <h2>{data.comments.length} Comments</h2>
                <div>{commentArray}</div>
            </div>
        </div>
    )
}

export default Comments;