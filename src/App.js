import React, { useState, Fragment } from "react";
import AddContactForm from "./forms/AddContactForm";
import EditContactForm from "./forms/EditContactForm";
import ContactTable from "./tables/ContactTable";

const App = () => {
  // Contact data
  const contactsData = [
    { id: 1, organization: "A Ltd.", name: "Carol", email: "carol@gmail.com" },
    { id: 2, organization: "B Ltd.", name: "Paul", email: "paul@gmail.com" },
    { id: 3, organization: "C Ltd.", name: "Emily", email: "emily@gmail.com" }
  ];

  const initialFormState = { id: null, organization: "", name: "", email: "" };

  // Setting states
  const [contacts, setContacts] = useState(contactsData);
  const [currentContact, setCurrentContact] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  // CRUD operations

  //add a contact object to the contactsData array
  const addContact = (contact) => {
    contact.id = contacts.length + 1;
    setContacts([...contacts, contact]);
  };

  // Filter out the deleting contact with the contact's id
  const deleteContact = (id) => {
    setEditing(false);
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  // Turn on edit mode when edit is delected on a contact
  // Set current contact
  const editRow = (contact) => {
    setEditing(true);
    setCurrentContact({
      id: contact.id,
      organization: contact.organization,
      name: contact.name,
      email: contact.email
    });
  };

  // Map through contactsData array
  // Update the contact with corresponding ID
  const updateContact = (id, updatedContact) => {
    setEditing(false);
    setContacts(
      contacts.map((contact) => (contact.id === id ? updatedContact : contact))
    );
  };

  //pass above operations as props
  return (
    <div className="container">
      <h1>Address Book</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <Fragment>
              <h2>Edit contact</h2>
              <EditContactForm
                editing={editing}
                setEditing={setEditing}
                currentContact={currentContact}
                updateContact={updateContact}
              />
            </Fragment>
          ) : (
            <Fragment>
              <h2>Add contact</h2>
              <AddContactForm addContact={addContact} />
            </Fragment>
          )}
        </div>
        <div className="flex-large">
          <h2>View contacts</h2>
          <ContactTable
            contacts={contacts}
            editRow={editRow}
            deleteContact={deleteContact}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
