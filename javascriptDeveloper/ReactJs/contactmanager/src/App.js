import React from "react";
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import Table from "./components/Table";
import ContactForm from "./components/ContactForm";
import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allContacts: [],
      filteredContacts: [],
      contactObject: {
        contactId: false,
        contactName: '',
        contactNumber: '',
      },
      showPopup: false,
    }
    this.searchFilter = this.searchFilter.bind(this);
    this.createOrEdit = this.createOrEdit.bind(this);
    this.delete = this.delete.bind(this);
    this.togglePopup = this.togglePopup.bind(this);
  }
  searchFilter(searchText){
    if(searchText) {
      const filteredList = this.state.allContacts.filter((ele)=>{
        return ele.contactName.includes(searchText) || `${ele.contactNumber}`.includes(searchText);
      })
      this.setState({filteredContacts: filteredList})
    }
    else {
      this.setState({filteredContacts: []})
    }
  }
  createOrEdit(contact = {}, edited = false) {
    console.log(contact);
    if(contact.contactId){
      // edit
      if(!edited){
        this.setState({contactObject:contact});
        this.togglePopup();
      }else{
        let updatedContacts = this.state.allContacts.map(c=>{
          if(c.contactId === contact.contactId){
            c.contactName = contact.contactName;
            c.contactNumber = contact.contactNumber;
          }
          return c;
        });
        this.setState({allContacts:updatedContacts});
      }
    }else{
      // new contact
      this.state.allContacts.push({
        contactId: this.state.allContacts.length+1,
        ...contact
      });
    }
  }
  togglePopup() {
    let updateState = {showPopup: !this.state.showPopup}
    if(this.state.showPopup) updateState.contactObject = {};
    this.setState(updateState); 
  }
  delete(contactId) {
    const updatedContacts = this.state.allContacts.filter((del,index)=>{
      return del.contactId !== contactId;
    })
    this.setState({allContacts: updatedContacts})
  }

 render() {
   const resultData = this.state.filteredContacts.length ? this.state.filteredContacts : this.state.allContacts;
   return(
      <>
        <Header title="Contact Manager"/>
        <Searchbar onSearch={this.searchFilter}/>
        <button className="addBtn" type="button" onClick={this.togglePopup}>ADD CONTACT</button>
        {
          this.state.showPopup ? <div className="overLay">
            <ContactForm togglePopup={this.togglePopup} editContact={this.state.contactObject} onSave={this.createOrEdit}/></div> : ''
        }
        <Table data={resultData} editContact={this.createOrEdit} deleteContact={this.delete}/>
      </>
   )
 }
}

export default App;
