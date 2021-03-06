import React, { useContext, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";
import ContactItem from "./ContactItem";
import styles from "./Contacts.module.css";

const Contacts = () => {
  // init context
  const contactContext = useContext(ContactContext);
  const { contacts, filtered } = contactContext;

  useEffect(() => {
    contactContext.getContacts();
  }, []);

  return (
    <>
      {contactContext.contacts !== null ? (
        <table className={styles.contactsTable}>
          <thead>
            <tr>
              <th className={styles.type}>Type</th>
              <th>Business Tax ID</th>
              <th className={styles.name}>Name</th>
              <th className={styles.address}>Country</th>
              <th className={styles.mainPhoneNumber}>Main phone number</th>
              <th className={styles.actions}>Actions</th>
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
