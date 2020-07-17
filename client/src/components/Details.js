import React, { useContext } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
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
    country,
    deliveryInstruction,
    notes,
    type,
  } = contactContext.contactDetail;

  return (
    <div className={styles.details}>
      <CopyToClipboard
        text={`
      ${name}
      ${address}
      ${city}
      ${stateOrProvince}
      ${country}
      ${postalCode}
      ${pickUpInstruction}
      ${deliveryInstruction}
      `}
      >
        <button>Copy to clipboard</button>
      </CopyToClipboard>
      <div>
        <h3>{type}</h3>
        <p className={styles.name}>{name}</p>
        <p>{address}</p>
        <p>{city}</p>
        <p>{stateOrProvince}</p>
        <p>{country}</p>
        <p>{postalCode}</p>
        <p>Pick up information:</p>
        <p>{pickUpInstruction}</p>
        <p>Delivery information:</p>
        <p>{deliveryInstruction}</p>
        <p>Notes</p>
        <p>{notes}</p>
        <p>Emails</p>
        <p>{email}</p>
      </div>
    </div>
  );
};
export default Details;
