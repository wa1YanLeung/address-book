import React from "react";

//A table to display contact details
//Map contact's data and display properties of each contact
const ContactTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>Organization</th>
        <th>Name</th>
        <th>Email</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.contacts.length > 0 ? (
        props.contacts.map((contact) => (
          <tr key={contact.id}>
            <td>{contact.organization}</td>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(contact);
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteContact(contact.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={4}>No contacts</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default ContactTable;
