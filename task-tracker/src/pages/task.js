import React from 'react'
import SingleTask from './../components/Task';

const Task = (props) => {
    console.log(props);
    return <div></div>;
    // const {match, boards, onUpdate} = props;
    // const {id, board} = match ? match.params : {};
    // return (
    //     <SingleTask buttonText={id ? "Save Task": "Add Task"} boards={boards} id={id} boardName={board} onSaveTask={onUpdate} />
    // )
}

export default Task
