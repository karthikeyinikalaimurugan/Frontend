import React, {useState} from 'react'

const AddBoard = ({onCreateBoard}) => {
    const [boardName, setBoardName] = useState('');
    return (
        <form onSubmit={(e)=>{
            e.preventDefault();
            onCreateBoard(boardName)
        }}>
            <input type="text"
            placeholder="Enter board name"
            value={boardName}
            onChange={(e)=>{
                setBoardName(e.target.value)
            }}
            required/>
            <button type="submit">Create Board</button>
        </form>
    )
}

export default AddBoard
