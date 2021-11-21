import React from "react";

class Table extends React.Component {
    render() {
        return(
            <table>
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>NUMBER</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.data.map((contact)=>{
                            return <tr key={contact.contactId}>
                                <td>{contact.contactName}</td>
                                <td>{contact.contactNumber}</td>
                            <td>
                                <button onClick={()=>this.props.editContact(contact)}>EDIT</button>
                                <button onClick={() => {this.props.deleteContact(contact.contactId)}}>DELETE</button>
                            </td>
                        </tr> 
                        })
                    }
                    {
                        !this.props.data.length && <tr><td> No Contacts Found! </td></tr>
                    }
                </tbody>
            </table>
        )
    }
}
export default Table;