import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SELECT_CONTACT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const initState = {
    contacts: [
      {
        id: uuidv4(),
        name: "Futurola",
        phone: "123-456-7898",
        email: "futurola@futurola.com",
      },
      {
        id: uuidv4(),
        name: "Current Culture H2O",
        phone: "123-456-7898",
        email: "cch2o@cch2o.com",
      },
      {
        id: uuidv4(),
        name: "MLPN Inc.",
        phone: "123-456-7898",
        email: "mlpn@mlpn.ca",
      },
    ],
    selectedContact: null,
    filtered: null,
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

  // Select contact to update
  const selectContact = (contact) => {
    console.log(contact);
    dispatch({
      type: SELECT_CONTACT,
      payload: contact,
    });
  };

  // Update an existing contact
  const updateContact = (contact) => {
    console.log(contact);
    dispatch({
      type: UPDATE_CONTACT,
      payload: contact,
    });
  };

  // Filter the contacts
  const filterContacts = (text) => {
    console.log("From ContextState:", text);
    console.log(state.filtered);
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };

  // Clear the filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        selectedContact: state.selectedContact,
        filtered: state.filtered,
        addContact,
        deleteContact,
        updateContact,
        selectContact,
        filterContacts,
        clearFilter,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;