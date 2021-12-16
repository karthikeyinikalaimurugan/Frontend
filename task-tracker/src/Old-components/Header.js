import React from 'react'
import {Link} from 'react-router-dom'

function Header(props) {
    const {title, addTask, listTask} = props;
    
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Link to="/add" >
            <button className="btn"
            onClick={addTask}>Add</button>
            </Link>
            <Link to="/list" >
            <button className="btn"
            onClick={listTask}>List Tasks</button>
            </Link>
        </header >
    )
}

export default Header
