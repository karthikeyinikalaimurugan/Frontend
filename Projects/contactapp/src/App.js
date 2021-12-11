import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
// import SearchBar from './components/SerachBar';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts,setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResults] = useState([]);
  // const contacts = [
  //   {
  //     id: "1",
  //     name: "karthi",
  //     email: "gdhg@gmail.com",
  //   },
  //   {
  //     id: "2",
  //     name: "karthikeyini",
  //     email: "gdhfdfsg@gmail.com"
  //   }
  // ];
  const addContactHandler = (contact) => {
    console.log('appjs',contact);
    setContacts([...contacts,contact]);
  }

  const searchHandler = (searchTerm) => {
    // console.log('searchTerm',searchTerm);
    setSearchTerm(searchTerm);
    if(searchTerm !== "") {
      const newContactList = contacts.filter((contact)=>{
        return contact.name.incluse(searchTerm);
          // console.log('newcontactList',Object.values(contact));
      })
      setSearchResults(newContactList);
    } else {
      setSearchResults(contacts);
    }
  }
  // search
  // const searchFilter = (searchText) => {
  //   if(searchText) {
  //     const filteredList = this.state.contacts.filter((ele)=>{
  //       console.log(filteredList);
  //       // return ele.contacts.name.includes(searchText);
  //     })
  //     this.setState({filteredContacts: filteredList})
  //   }
  // }

  // get
  useEffect(()=>{
    const retrivedContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts)));
    if (retrivedContacts){
      setContacts(retrivedContacts);
    }
  },[])
  // set
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  },[contacts])
  return (
    <div className="container">
      <Router>
      <Header />
      {/* <SearchBar /> */}
      {/* searchFilter={searchFilter} */}
      <Switch>
        <Route exact path="/" render={(props)=>(
          <ContactList {...props}
          contacts={searchTerm.length < 1 ? contacts : searchResult}
          term={searchTerm}
          searchKeyword={searchHandler} />         // passing props in route using render
        )} />
        <Route exact path="/add" render={(props)=>(
          <AddContact {...props} addContactHandler={addContactHandler} />
        )} />
      </Switch>
      {/* <AddContact {...props} addContactHandler={addContactHandler} />
      <ContactList {...props} contacts={contacts} /> */}
      </Router>
    </div>
  );
}

export default App;  
