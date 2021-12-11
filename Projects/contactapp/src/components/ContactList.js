import React, {useRef} from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    console.log('contactLis',props);
    const inputRef = useRef("");
    const renderContactList = props.contacts.map((contact)=>{
        return (
            <div>
                <ContactCard contact={contact} />
            </div>
        )
    })
    const getSearchTerms = () => {
        console.log('useRef',inputRef.current.value, props.searchKeyword);

        // props.searchKeyWord(inputRef.current.val);
    }
    return(
        <div className="mainlist">
            <h2>Contact List
                <Link to="/add">
                <button className="AddContactBtn">Add Contact</button>
                </Link>
            </h2>
            <div className="search">
                <input
                ref={inputRef}
                type="text"
                placeholder="Search Contacts"
                className="searchInput"
                value={props.terms}
                />
                <button type="button" onChange={getSearchTerms} >Search</button>
            </div>
            
            <div className="list">{renderContactList}</div>
        </div>
    )
}
export default ContactList;