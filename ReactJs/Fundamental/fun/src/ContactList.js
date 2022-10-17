import React from "react";

const ContactList = (props) => {

    const RenderContactList = props.contacts.map((contact)=>{
        return (
            <div>
                <div>{contact.name}</div>
                <div>{contact.email}</div>
            </div>
        )
    })    
    return (
        <div>ContactList
            {RenderContactList}
        </div>
    )
}

export default ContactList;