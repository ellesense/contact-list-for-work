import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (contactContext.selectedContact !== null) {
      setContact(contactContext.selectedContact);
    } else {
      setContact({
        name: "",
        email: "",
        phone: "",
      });
    }
  }, [contactContext, contactContext.selectedContact]);

  const onChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (contactContext.selectedContact === null) {
      // add contact
      contactContext.addContact(contact);
      setContact({
        name: "",
        email: "",
        phone: "",
      });
    } else {
      // update an existing contact
      contactContext.updateContact(contact);
    }
  };

  const { name, email, phone } = contact;

  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Organization name</label>
          <input type="text" name="name" value={name} onChange={onChange} />
        </div>
        <div>
          <label htmlFor="phone">General phone number</label>
          <input type="text" name="phone" value={phone} onChange={onChange} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" value={email} onChange={onChange} />
        </div>
        <input
          type="submit"
          value={contactContext.selectedContact ? "Update" : "Add"}
        />
      </form>
    </>
  );
};

export default ContactForm;
