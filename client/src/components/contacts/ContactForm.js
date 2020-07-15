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
            <input
              type="text"
              name="type"
              value={type}
              onChange={onChange}
              placeholder="Type"
              autoFocus
            />
          </div>
          <div>
            <input
              type="text"
              name="businessTaxId"
              value={businessTaxId}
              onChange={onChange}
              placeholder="Business Tax ID"
            />
          </div>
          <div>
            <input
              type="text"
              name="name"
              value={name}
              onChange={onChange}
              placeholder="Name"
            />
          </div>
          <div>
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={onChange}
              placeholder="Main phone number"
            />
          </div>
          <div>
            <textarea
              name="email"
              value={email}
              onChange={onChange}
              rows={6}
              cols={25}
            />
          </div>
          <div>
            <input
              type="text"
              name="address"
              value={address}
              onChange={onChange}
              placeholder="Address"
            />
          </div>
          <div>
            <input
              type="text"
              name="postalCode"
              value={postalCode}
              onChange={onChange}
              placeholder="Postal code"
            />
          </div>
          <div>
            <input
              type="text"
              name="city"
              value={city}
              onChange={onChange}
              placeholder="City"
            />
          </div>
          <div>
            <input
              type="text"
              name="stateOrProvince"
              value={stateOrProvince}
              onChange={onChange}
              placeholder="State or province"
            />
          </div>
          <div>
            <input
              type="text"
              name="country"
              value={country}
              onChange={onChange}
              placeholder="Country"
            />
          </div>
          <div>
            <textarea
              name="pickUpInstruction"
              value={pickUpInstruction}
              onChange={onChange}
              rows={6}
              cols={25}
            />
          </div>
          <div>
            <textarea
              name="deliveryInstruction"
              value={deliveryInstruction}
              onChange={onChange}
              rows={6}
              cols={25}
            />
          </div>
          <div>
            <textarea
              name="notes"
              value={notes}
              rows={6}
              cols={25}
              onChange={onChange}
            />
          </div>
        </div>
        <input
          type="submit"
          className={styles.submitButton}
          value={contactContext.selectedContact ? "Update" : "Add"}
        />
      </form>
    </>
  );
};

export default ContactForm;
