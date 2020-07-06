import React, { useContext } from "react";
import ContactContext from "../../context/contact/contactContext";
import ContactItem from "./ContactItem";
import styles from "./Contacts.module.css";

const Contacts = () => {
  // init context
  const contactContext = useContext(ContactContext);
  const { contacts } = contactContext;
  return (
    <div className={styles.contactsList}>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default Contacts;
