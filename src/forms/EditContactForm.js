import React, { useState, useEffect } from "react";

// Set the state directly from currentContact via props
const EditContactForm = (props) => {
  const [contact, setContact] = useState(props.currentContact);

  // A callback function that updates the user state with the new prop
  useEffect(() => {
    setContact(props.currentContact);
  }, [props]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContact({ ...contact, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        props.updateContact(contact.id, contact);
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
      <button>Update contact</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditContactForm;
