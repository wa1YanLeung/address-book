import React, { useState } from "react";

//create a form to add new contact
//initatiate state with empty values
//state is temporary for keeping track of current contact data
const AddContactForm = (props) => {
  const initialFormState = { id: null, organization: "", name: "", email: "" };
  const [contact, setContact] = useState(initialFormState);

  //update the state within the form
  //get the key(name), value from the form
  //set the contact object dynamically
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContact({ ...contact, [name]: value });
  };

  //reference the extracted values from the state object in the onChange event
  //submit the form back to App
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.addContact(contact);
        setContact(initialFormState);
      }}
    >
      <label>Organization</label>
      <input
        type="text"
        name="organization"
        value={contact.organization}
        onChange={handleInputChange}
      />
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={contact.name}
        onChange={handleInputChange}
      />
      <label>Email</label>
      <input
        type="text"
        name="email"
        value={contact.email}
        onChange={handleInputChange}
      />
      <button>Add new contact</button>
    </form>
  );
};

export default AddContactForm;
