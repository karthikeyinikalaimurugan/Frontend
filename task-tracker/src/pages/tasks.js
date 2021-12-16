import React from 'react'
import AddBoard from '../components/AddBoard'
import ListBoards from '../components/listBoards'
import {Link} from 'react-router-dom';

const tasks = ({boards = {}, setBoards}) => {
    console.log('tasks', boards)
    const createTask = (name) => {
        console.log('Task Created',name);
        setBoards({
            [name]:[]
        });
    }
    return (
        <div>
            <h1>Task Tracker</h1>
            <AddBoard onCreateBoard={createTask} />
            <Link to="/add">
                Add Task
            </Link>
            <ListBoards boards={boards}/>
        </div>
    )
}

export default tasks
