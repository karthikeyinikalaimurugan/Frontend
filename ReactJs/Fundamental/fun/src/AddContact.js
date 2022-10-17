import React from "react";

const AddContact = () => {
    
    return (
        <div>
            <h2>AddContact</h2>
            <label>NAME<input type="text" name="name" placeholder="Name"></input></label>
            <label>EMAIL<input type="text" name="email" placeholder="Email"></input></label>
            <div>
                <button type="button">SAVE</button>
            </div>
        </div>
    )
}

export default AddContact;