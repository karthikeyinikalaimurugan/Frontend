import React, {useState} from 'react'
import { useHistory } from 'react-router'

const Task = ({onSaveTask, boardName, id, boards, buttonText}) => {
    console.log('taskboards', boards)
    const boardOption =  Object.keys(boards); 
    let history = useHistory();
    const [task, setTask] = useState( id ? boards[boardName].find(t=>t.id===id) : {
        id: false,
        title: '',
        description: '',
        author: '',
        reporter: '',
        board: boardOption[0],
        startDate: new Date(),
        endDate: new Date(),
    });
    const taskHandler = (e) => {
        console.log('task handler', e.target.name, e.target.value)
        setTask({ ...task,
            [e.target.name]: e.target.value
        })
    }
    return (
        <form onSubmit={(e)=>{
            e.preventDefault();
            console.log('save', task);
            onSaveTask(task)
            history.push('/');
        }}>
            <input type="text"
            name="title"
            placeholder="Enter title"
            value={task.title}
            onChange={taskHandler}
            required/>
            <input type="text"
            name="description"
            placeholder="Enter description"
            value={task.description}
            onChange={taskHandler}
            required/>
            <input type="text"
            name="author"
            placeholder="Enter author"
            value={task.author}
            onChange={taskHandler}
            required/>
            <input type="text"
            name="reporter"
            placeholder="Enter reporter"
            value={task.reporter}
            onChange={taskHandler}
            required/>
            <input type="date"
            name="startDate"
            placeholder="Enter start date"
            value={task.startDate}
            onChange={taskHandler}
            required/>
            <input type="date"
            name="endDate"
            placeholder="Enter end date"
            value={task.endDate}
            onChange={taskHandler}
            required/>
            <select name="board" onChange={taskHandler}>
            {
                boardOption.map(b=>{
                    return <option value={b} {...(task.board===b ? {selected: true}: {})}>{b}</option>
                })
            }
            </select>
            <button type="submit" >{buttonText || 'Save'}</button>
        </form>
    )
}

export default Task
