import React from "react";

class ContactForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          contactName: '',
          contactNumber: '',
          showPopup: false,
        }
        this.handleChange = this.handleChange.bind(this);
        this.togglePop = this.togglePop.bind(this);
      }
      handleChange(e) {
        this.setState({
          [e.target.name]: e.target.value,
        });
      }
      togglePop(e) {
        e.preventDefault();
        console.log(this.state);
        // this.setState({
        //   showPopup: !this.setState.showPopup                 // initial as false
        // });
      }
      render() {
        return(
          <form onSubmit={this.togglePop}>
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