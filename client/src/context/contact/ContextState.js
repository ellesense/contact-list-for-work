import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import { ADD_CONTACT, DELETE_CONTACT } from "../types";

const ContactState = (props) => {
  const initState = {
    contacts: [
      { id: uuidv4(), name: "Futurola", phone: "123-456-7898" },
      { id: uuidv4(), name: "Current Culture H2O", phone: "123-456-7898" },
      { id: uuidv4(), name: "MLPN Inc.", phone: "123-456-7898" },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initState);

  // Add a new contact
  const addContact = (contact) => {
    contact.id = uuidv4();

    dispatch({
      type: ADD_CONTACT,
      payload: contact,
    });
  };

  // Delete an existing contact
  const deleteContact = (contact_id) => {
    dispatch({
      type: DELETE_CONTACT,
      payload: contact_id,
    });
  };

  // Update an existing contact

  // Filter the contacts

  return (
    <ContactContext.Provider
      value={{ contacts: state.contacts, addContact, deleteContact }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
