import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import types from "../types";

const ContactState = (props) => {
  const initState = {
    contact: [{ id: 1, name: "Futurola", phone: "123-456-7898" }],
  };

  const [state, dispatch] = useReducer(contactReducer, initState);

  // Add a new contact

  // Delete an existing contact

  // Update an existing contact

  // Filter the contacts

  return (
    <ContactContext.Provider value={{ contacts: state.contacts }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
