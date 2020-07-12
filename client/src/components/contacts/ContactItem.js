import React, { useContext } from "react";
import ContactContext from "../../context/contact/contactContext";
import styles from "./ContactItem.module.css";

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);

  const {
    _id,
    name,
    phone,
    email,
    address,
    postalCode,
    city,
    stateOrProvince,
    pickUpInstruction,
    deliveryInstruction,
    notes,
    type,
  } = contact;

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
    <tr>
      <td>{type.charAt(0).toUpperCase() + type.slice(1)}</td>
      <td className={styles.organizationName} onClick={onShowDetail}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </td>
      <td>
        {address}
        <br />
        {city.charAt(0).toUpperCase() + city.slice(1)}
        <br />
        {stateOrProvince.charAt(0).toUpperCase() + stateOrProvince.slice(1)}
      </td>
      <td>{phone}</td>
      <td>{pickUpInstruction}</td>
      <td>{deliveryInstruction}</td>
      <td>{email}</td>
      <td>{notes}</td>
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
