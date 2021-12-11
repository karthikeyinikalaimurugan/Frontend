import React from "react";

const ContactCard = (props) => {
    const {id,name,number,email} = props.contact;
    return(
        <div className="item">
                <div className="content">
                    <div className="header">{name}</div>
                    <div>{number}</div>
                    <div>{email}</div>
                </div>
            </div>
    )
}
export default ContactCard;