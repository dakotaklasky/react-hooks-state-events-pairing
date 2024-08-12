import {useState} from "react"

function Votes({data}){

    const [upVotes, setUpVotes] = useState(data.upvotes)
    const [downVotes, setDownVotes] = useState(data.downvotes)

    function handleUpVotes(){
        return setUpVotes(upVotes + 1)
    }

    function handleDownVotes(){
        return setDownVotes(downVotes - 1)
    }

    return (
        <>
            <button onClick={handleUpVotes} value={upVotes}>{upVotes} 👍</button>
            <button onClick={handleDownVotes} value={downVotes}>{downVotes} 👎</button>
        </>
    )
}

export default Votes