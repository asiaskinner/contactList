import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import axios from 'axios';  

const contactList = [
  {"id": 1, "name": "R2-D2", "phone": "222-222-2222", "email": "r2d2@droids.com"},
  {"id": 2, "name": "C-3PO", "phone": "333-333-3333", "email": "c3po@droids.com"},
  {"id": 3, "name": "BB-8", "phone": "888-888-8888", "email": "bb8@droids.com"}
]

const Main = () => {
  const [mainContacts, setMainContacts] = useState(contactList)

  return (
    <div id="main">
      <div id="navbar">
        <div>Contact List</div>
      </div>
      <div id="container">
      <table>
  <tbody>
          <tr>
           <th>Name:</th>
           <th>Phone</th>
           <th>Email</th>
         </tr>
        {
          mainContacts.map(contact => {
            return <tr>
            <th>{contact.name}</th>
            <th>{contact.phone}</th>
            <th>{contact.email}</th>
          </tr>
          })
        }
        


  </tbody>
</table> 
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
