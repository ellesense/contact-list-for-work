import React, { useContext, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";
import ContactItem from "./ContactItem";
import styles from "./Contacts.module.css";

const Contacts = () => {
  // init context
  const contactContext = useContext(ContactContext);
  const { contacts, filtered } = contactContext;

  useEffect(() => {
    console.log("get all contacts");
    contactContext.getContacts();
  }, []);

  return (
    <>
      {contactContext.contacts !== null ? (
        <table className={styles.contactsTable}>
          <thead>
            <tr>
              <th>Type</th>
              <th>Name</th>
              <th>Address</th>
              <th>General phone number</th>
              <th>Pick up instruction</th>
              <th>Delivery instruction</th>
              <th>Email</th>
              <th>Notes</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered !== null
              ? filtered.map((contact) => (
                  <ContactItem key={contact._id} contact={contact} />
                ))
              : contacts.map((contact) => (
                  <ContactItem key={contact._id} contact={contact} />
                ))}
          </tbody>
        </table>
      ) : (
        <div>LOADING...</div>
      )}
    </>
  );
};

export default Contacts;
