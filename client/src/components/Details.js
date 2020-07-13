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
      ${postalCode}
      ${pickUpInstruction}
      ${deliveryInstruction}
      `}
      >
        <button>Copy to clipboard</button>
      </CopyToClipboard>
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
