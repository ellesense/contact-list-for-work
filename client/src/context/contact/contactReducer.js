import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SELECT_CONTACT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return { ...state, contacts: [action.payload, ...state.contacts] };
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
    case SELECT_CONTACT:
      return { ...state, selectedContact: action.payload };
    default:
      return state;
  }
};
