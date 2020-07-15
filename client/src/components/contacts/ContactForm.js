import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";
import AlertContext from "../../context/alert/alertContext";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const alertContext = useContext(AlertContext);

  const [contact, setContact] = useState({
    businessTaxId: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    postalCode: "",
    city: "",
    stateOrProvince: "",
    country: "",
    pickUpInstruction: "",
    deliveryInstruction: "",
    notes: "",
    type: "",
  });

  useEffect(() => {
    if (contactContext.selectedContact !== null) {
      setContact(contactContext.selectedContact);
    } else {
      setContact({
        businessTaxId: "",
        name: "",
        email: "",
        phone: "",
        address: "",
        postalCode: "",
        city: "",
        stateOrProvince: "",
        country: "",
        pickUpInstruction: "",
        deliveryInstruction: "",
        notes: "",
        type: "",
      });
    }
  }, [contactContext, contactContext.selectedContact]);

  const onChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (contactContext.selectedContact === null) {
      if (contact.name === "") {
        // set alert
        alertContext.setAlert("Name is required.");
      } else {
        // add contact
        contactContext.addContact(contact);
        setContact({
          businessTaxId: "",
          name: "",
          email: "",
          phone: "",
          address: "",
          postalCode: "",
          city: "",
          stateOrProvince: "",
          country: "",
          pickUpInstruction: "",
          deliveryInstruction: "",
          notes: "",
          type: "",
        });
      }
    } else {
      // update an existing contact
      contactContext.updateContact(contact);
    }
  };

  const {
    businessTaxId,
    name,
    email,
    phone,
    address,
    postalCode,
    city,
    stateOrProvince,
    country,
    pickUpInstruction,
    deliveryInstruction,
    notes,
    type,
  } = contact;

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className={styles.contactForm}>
          <div>
            <label htmlFor="type">Type</label>
            <input
              type="text"
              name="type"
              value={type}
              onChange={onChange}
              autoFocus
            />
          </div>
          <div>
            <label htmlFor="businessTaxId">Business Tax ID</label>
            <input
              type="text"
              name="businessTaxId"
              value={businessTaxId}
              onChange={onChange}
            />
          </div>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={name} onChange={onChange} />
          </div>
          <div>
            <label htmlFor="phone">Main phone number</label>
            <input type="text" name="phone" value={phone} onChange={onChange} />
          </div>
          <div>
            <label htmlFor="email">Email(s)</label>
            <br />
            <textarea
              name="email"
              value={email}
              onChange={onChange}
              rows={6}
              cols={25}
            />
          </div>
          <div>
            <label htmlFor="address">Office address</label>
            <input
              type="text"
              name="address"
              value={address}
              onChange={onChange}
            />
          </div>
          <div>
            <label htmlFor="postalCode">Postal code</label>
            <input
              type="text"
              name="postalCode"
              value={postalCode}
              onChange={onChange}
            />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input type="text" name="city" value={city} onChange={onChange} />
          </div>
          <div>
            <label htmlFor="stateOrProvince">State or province</label>
            <input
              type="text"
              name="stateOrProvince"
              value={stateOrProvince}
              onChange={onChange}
            />
          </div>
          <div>
            <label htmlFor="country">Country</label>
            <input
              type="text"
              name="country"
              value={country}
              onChange={onChange}
            />
          </div>
          <div>
            <label htmlFor="pickUpInstruction">Pick up information</label>
            <textarea
              name="pickUpInstruction"
              value={pickUpInstruction}
              onChange={onChange}
              rows={6}
              cols={25}
            />
          </div>
          <div>
            <label htmlFor="deliveryInstruction">Delivery information</label>
            <textarea
              name="deliveryInstruction"
              value={deliveryInstruction}
              onChange={onChange}
              rows={6}
              cols={25}
            />
          </div>
          <div>
            <label htmlFor="notes">Notes</label>
            <textarea
              name="notes"
              value={notes}
              rows={6}
              cols={25}
              onChange={onChange}
            />
          </div>
          <div>
            <input
              type="submit"
              className={styles.submitButton}
              value={contactContext.selectedContact ? "Update" : "Add"}
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
