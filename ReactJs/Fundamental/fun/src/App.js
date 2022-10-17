import React from 'react';
import './App.css';
import Headers from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  const contacts = [
    {
        id: "1",
        name: "karthi",
        email: "karthi@e.com"
    },
    {
        id: "2",
        name: "Keyini",
        email: "keyini@e.com"
    },
    {
        id: "3",
        name: "Pooja",
        email: "pooja@e.com"
    }
]
  return (
    <div>
      <Headers/>
      <AddContact/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
