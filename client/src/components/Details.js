import React, { useContext } from "react";
import ContactContext from "../context/contact/contactContext";
import styles from "./Details.module.css";

const Details = () => {
  const contactContext = useContext(ContactContext);

  const {
    name,
    email,
    phone,
    address,
    postalCode,
    city,
    stateOrProvince,
    pickUpInstruction,
    deliveryInstruction,
    notes,
    type,
  } = contactContext.contactDetail;

  return (
    <div className={styles.details}>
      <div>
        <p className={styles.name}>{name}</p>
        <p>{address}</p>
        <p>{city}</p>
        <p>{stateOrProvince}</p>
        <p>{postalCode}</p>
        <p>{pickUpInstruction}</p>
        <p>{deliveryInstruction}</p>
      </div>
    </div>
  );
};
export default Details;
