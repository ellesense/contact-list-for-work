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
        alertContext.setAlert();
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
        <div>
          <label htmlFor="name">Organization name</label>
          <input type="text" name="name" value={name} onChange={onChange} />
        </div>
        <div>
          <label htmlFor="phone">General phone number</label>
          <input type="text" name="phone" value={phone} onChange={onChange} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" value={email} onChange={onChange} />
        </div>
        <div>
          <label htmlFor="address">Address</label>
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
          <label htmlFor="stateOrProvince">State/Province</label>
          <input
            type="text"
            name="stateOrProvince"
            value={stateOrProvince}
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="pickUpInstruction">Pick up instruction</label>
          <input
            type="text"
            name="pickUpInstruction"
            value={pickUpInstruction}
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="deliveryInstruction">Delivery instruction</label>
          <input
            type="text"
            name="deliveryInstruction"
            value={deliveryInstruction}
            onChange={onChange}
          />
        </div>
        <div>
          <label htmlFor="notes">Notes</label>
          <input type="text" name="notes" value={notes} onChange={onChange} />
        </div>
        <input
          type="submit"
          value={contactContext.selectedContact ? "Update" : "Add"}
        />
      </form>
    </>
  );
};

export default ContactForm;
