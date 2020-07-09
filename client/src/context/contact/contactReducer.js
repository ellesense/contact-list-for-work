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

export default (state, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return { ...state, contacts: action.payload };
    case ADD_CONTACT:
      return { ...state, contacts: [action.payload, ...state.contacts] };
    case ADD_CONTACT_ERROR:
      return { ...state, error: action.payload };
    case DELETE_CONTACT:
      return {
        ...state,
        selectedContact: null,
        contacts: state.contacts.filter((contact) => {
          return contact.id !== action.payload;
        }),
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        selectedContact: null,
        contacts: state.contacts.map((contact) => {
          return contact.id === action.payload.id ? action.payload : contact;
        }),
      };
    case FILTER_CONTACTS:
      return {
        ...state,
        filtered: state.contacts.filter((contact) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return (
            contact.name.match(regex) || contact.email.match(regex)
            // || contact.address.match(regex)
          );
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    case "CLEAR_CONTACTS":
      return {
        ...state,
        contacts: null,
        filtered: null,
        error: null,
        selectedContact: null,
      };
    case SELECT_CONTACT:
      return { ...state, selectedContact: action.payload };
    default:
      return state;
  }
};
