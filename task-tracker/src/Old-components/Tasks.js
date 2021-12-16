import Task from "./Task"
import { Link } from "react-router-dom"

const Tasks = ({tasks, onDelete, onToggle}) => {
    
    return (
        <>
        <div>
         {tasks.map((task)=>(
             <Task key={task.id}
             task={task}
             onDelete={onDelete}
             onToggle={onToggle}
              />
         ))}
        </div>
        <Link to="/">
        <button className='btn btn-back'>Back</button>
    </Link>
    </>
        
    )
}

export default Tasks
