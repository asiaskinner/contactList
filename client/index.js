import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import axios from 'axios';  
import SingleContact from './SingleContact';
import ContactList from './ContactList';


// const contactList = [
//   {"id": 1, "name": "R2-D2", "phone": "222-222-2222", "email": "r2d2@droids.com"},
//   {"id": 2, "name": "C-3PO", "phone": "333-333-3333", "email": "c3po@droids.com"},
//   {"id": 3, "name": "BB-8", "phone": "888-888-8888", "email": "bb8@droids.com"}
// ]

const Main = () => {
  const [mainContacts, setMainContacts] = useState([]); 
  const [selectedContact, setSelectedContact] = useState({}); 

  const selectContact = async (contactId) => {
    try {
      const res = await axios.get(`/api/contacts/${contactId}`);
      const fetchedContact = res.data;
      setSelectedContact(fetchedContact); 
    } catch (error) {
      console.log('There was a problem making contact!'); 
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('/api/contacts'); 
        const contacts = res.data; 
        setMainContacts(contacts); 
      } catch (error) {
        console.log('There was a problem making contact!')
      }
    } 
    fetchData(); 
  }, []); 

  return (
    <div id="main">
      <div id="navbar">
        <div>Contact List</div>
      </div>
      <div id="container">
        <div id="container"> 
          {
            selectedContact.id ? 
            <SingleContact selectedContact={selectedContact} selectContact={selectContact} /> 
            : <ContactList contacts={mainContacts} selectContact={selectContact} />
          }
        </div> 
      </div>
    </div>
  );
};

const root = createRoot(document.getElementById('app')); 
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
); 
