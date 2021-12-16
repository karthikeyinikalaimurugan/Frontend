import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const AddTask = ({listSavedTask}) => {
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [reminder,setReminder] = useState(false)
    // save task
    const saveTask = (e) => {
        e.preventDefault();
        if(title === "" && description === "") {
            alert('Title and description are mandatory!');
            return;
        }
        setTitle({title:""});
        setDescription({description:""});
        // listSavedTask.history.push("/")
    }
    return (
        <form className='add-form' onSubmit={saveTask} >
            <div className='form-control'>
                <label>Task Title</label>
                <input type='text' placeholder='Add task title'
                value={title} onChange={(e)=> setTitle(e.target.value)} ></input>
            </div>
            <div className='form-control'>
                <label>Task Description</label>
                <input type='text' placeholder='Add task description'
                value={description} onChange={(e)=> setDescription(e.target.value)} ></input>
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox'
                value={reminder} onChange={(e)=> setReminder(e.currentTarget.checked)}></input>
            </div>
                <button type='submit' className='btn'>Save Task</button>
                <Link to="/">
                    <button type="button" className="btn btn-back">Back</button>
                </Link>
        </form>
    )
}

export default AddTask
