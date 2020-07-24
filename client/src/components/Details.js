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
        <button className={styles.copyButton}>Copy to clipboard</button>
      </CopyToClipboard>
      <div>
        <h4>Type: {type}</h4>
        <p className={styles.name}>{name}</p>
        <p>{address}</p>
        <p>
          {city ? city : "Unknown"},
          {stateOrProvince ? stateOrProvince : "Unknown"},
          {country ? country : "Unknown"}, {postalCode ? postalCode : "Uknown"}
        </p>
        <hr />
        <h4>Pick up information:</h4>
        <p>{pickUpInstruction}</p>
        <hr />
        <h4>Delivery information:</h4>
        <p>{deliveryInstruction}</p>
        <hr />
        <h4>Notes</h4>
        <p>{notes}</p>
        <hr />
        <h4>Emails</h4>
        <p>{email}</p>
      </div>
    </div>
  );
};
export default Details;
