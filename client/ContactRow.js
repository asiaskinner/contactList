import React from 'react';

const ContactRow = (props) => {
    const { contact, selectContact } = props; 

    return (
        <tr onClick={() => selectContact(contact.id) }>
            <td>{contact.name}</td>
            <td>{contact.phone}</td>
            <td>{contact.email}</td>
        </tr>
    )
}

export default ContactRow; 
