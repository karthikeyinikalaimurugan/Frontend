import React from "react";
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import Table from "./components/Table";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allContacts: [
        {
          contactId: 1,
          contactName: 'karthi',
          contactNumber: 87647634689,
        },
        {
          contactId: 2,
          contactName: 'keyini',
          contactNumber: 87647637779,
        },
        {
          contactId: 3,
          contactName: 'poochi',
          contactNumber: 876445456689,
        },
      ],
      filteredContacts: [],
      contactObject: {
        contactId: false,
        contactName: '',
        contactNumber: false,
      }
    }
    this.searchFilter = this.searchFilter.bind(this);
  }
  searchFilter(searchText){
    console.log(searchText);
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
 render() {
   const resultData = this.state.filteredContacts.length ? this.state.filteredContacts : this.state.allContacts;
   return(
      <>
        <Header title="Contact Manager"/>
        <Searchbar onSearch={this.searchFilter}/>
        <Table data={resultData}/>
      </>
   )
 }
}

export default App;
