import React from "react";

class ContactForm extends React.Component {
    initialState = {
        contactName: '',
        contactNumber: '',
      }
    constructor(props){
        super(props);
        this.state = props.editContact.contactId ? props.editContact : this.initialState;
        this.handleChange = this.handleChange.bind(this);
        this.onSave = this.onSave.bind(this);
      }
      handleChange(e) {
        this.setState({
          [e.target.name]: e.target.value,
        });
      }
      onSave(e) {
        e.preventDefault();
        this.props.onSave(this.state, this.state.contactId);
        this.setState(this.initialState);
        this.props.togglePopup();
      }
      render() {
        return(
          <form onSubmit={this.onSave} className="form">
            <span className="closeBtn" onClick={this.props.togglePopup}>X</span>
            <label htmlFor="contactName">CONTACT NAME</label><br/>
            <input type="text" id="i1" name="contactName" onChange={this.handleChange} value={this.state.contactName}></input><br/>
            <br/>
            <label htmlFor="contactNumber">CONTACT NUMBER</label><br/>
            <input type="number" id="i2" name="contactNumber" onChange={this.handleChange} value={this.state.contactNumber}></input><br/>
            <br/>
            <button className="button" type="submit">SAVE</button>
          </form>
        )
      }
}
export default ContactForm;