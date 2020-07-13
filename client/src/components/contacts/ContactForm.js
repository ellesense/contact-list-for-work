import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";
import AlertContext from "../../context/alert/alertContext";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const alertContext = useContext(AlertContext);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    postalCode: "",
    city: "",
    stateOrProvince: "",
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
        name: "",
        email: "",
        phone: "",
        address: "",
        postalCode: "",
        city: "",
        stateOrProvince: "",
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
          name: "",
          email: "",
          phone: "",
          address: "",
          postalCode: "",
          city: "",
          stateOrProvince: "",
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
            <input
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              placeholder="Email"
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
              name="pickUpInstruction"
              value={pickUpInstruction}
              onChange={onChange}
              placeholder="Pick up instruction"
            />
          </div>
          <div>
            <input
              type="text"
              name="deliveryInstruction"
              value={deliveryInstruction}
              onChange={onChange}
              placeholder="Delivery instruction"
            />
          </div>
          <div>
            <input
              type="text"
              name="notes"
              value={notes}
              onChange={onChange}
              placeholder="Notes"
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
