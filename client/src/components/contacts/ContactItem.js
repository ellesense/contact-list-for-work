import React, { useContext } from "react";
import ContactContext from "../../context/contact/contactContext";
import styles from "./ContactItem.module.css";

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);

  const { id, name, phone, email } = contact;

  const onDelete = () => {
    contactContext.deleteContact(id);
  };

  const onSelectContact = () => {
    contactContext.selectContact(contact);
  };

  return (
    <tr>
      {/* <span className={styles.deleteBtn}>
            <i className="fa fa-trash" onClick={onDelete}></i>
          </span>
          <span onClick={onSelectContact}>Edit</span> */}
      <td>Supplier</td>
      <td id={styles.organizationName}>{name}</td>
      <td>Unit 123, 1839 Some Drive, Some City, Some State, USA, 12345</td>
      <td>{phone}</td>
      <td>
        <p>Tailgate not required.</p>
        <p>
          Pick up hours: 8AM - 4PM <br />
          (apppointment not required.)
        </p>
      </td>
      <td>
        <p>Tailgate not required.</p>
        <p>
          Receiving hours: 8AM - 5PM <br />
          (delivery appointment not required.)
        </p>
      </td>
      <td>{email}</td>
    </tr>
  );
};

export default ContactItem;
