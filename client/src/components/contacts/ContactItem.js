import React, { useContext } from "react";
import ContactContext from "../../context/contact/contactContext";
import styles from "./ContactItem.module.css";

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);

  const { _id, type, businessTaxId, name, phone, country } = contact;

  const onDelete = () => {
    alert("Are you sure?");
    contactContext.deleteContact(_id);
  };

  const onSelectContact = () => {
    contactContext.selectContact(contact);
  };

  const onShowDetail = () => {
    contactContext.showDetail(contact);
  };

  return (
    <tr onClick={onShowDetail}>
      <td>{type.charAt(0).toUpperCase() + type.slice(1)}</td>
      <td>{businessTaxId}</td>
      <td className={styles.organizationName}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </td>
      <td>{country}</td>
      <td>{phone}</td>
      <td>
        <button className={styles.deleteBtn} onClick={onDelete}>
          Delete
        </button>
        <button className={styles.editBtn} onClick={onSelectContact}>
          Edit
        </button>
      </td>
    </tr>
  );
};

export default ContactItem;
