import React, { useContext } from "react";
import ContactContext from "../../context/contact/contactContext";
import ContactItem from "./ContactItem";
import styles from "./Contacts.module.css";

const Contacts = () => {
  // init context
  const contactContext = useContext(ContactContext);
  const { contacts, filtered } = contactContext;

  return (
    <table className={styles.contactsTable}>
      <tr>
        <th>Type</th>
        <th>Name</th>
        <th>Address</th>
        <th>General phone number</th>
        <th>Pick up instruction</th>
        <th>Delivery instruction</th>
        <th>Contacts</th>
      </tr>
      {filtered !== null
        ? filtered.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))
        : contacts.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
    </table>
  );
};

export default Contacts;
