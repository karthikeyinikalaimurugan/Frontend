import React from 'react'

export const ListItems = (props) => {
    return (
        <div onClick={()=>{props.deleteItems(props.id)}}>
            <li>{props.text}</li>
        </div>
    )
}
