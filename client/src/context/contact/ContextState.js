import React, { useReducer } from "react";
import axios from "axios";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  GET_CONTACTS,
  ADD_CONTACT,
  ADD_CONTACT_ERROR,
  DELETE_CONTACT,
  SELECT_CONTACT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const initState = {
    contacts: [],
    selectedContact: null,
    filtered: null,
    error: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initState);

  // Get all contacts
  const getContacts = async () => {
    const res = await axios.get("/api/contacts");
    try {
      dispatch({ type: GET_CONTACTS, payload: res.data });
    } catch (error) {}
  };

  // Add a new contact
  const addContact = async (contact) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/contacts", contact, config);
      dispatch({
        type: ADD_CONTACT,
        payload: res.data,
      });
    } catch (err) {
      dispatch({ type: ADD_CONTACT_ERROR, payload: err.response.data.msg });
    }
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
    console.log("From ContextState - text: ", text);
    console.log("From ContextState - state.filter: ", state.filtered);
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
        error: state.error,
        getContacts,
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
