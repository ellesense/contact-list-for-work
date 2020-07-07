import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";
import AlertContext from "../../context/alert/alertContext";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const alertContext = useContext(AlertContext);

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
      if (contact.name === "" || contact.phone === "") {
        // set alert
        alertContext.setAlert();
      } else {
        // add contact
        contactContext.addContact(contact);
        setContact({
          name: "",
          email: "",
          phone: "",
        });
      }
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
