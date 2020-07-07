import { SET_ALERT, REMOVE_ALERT } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_ALERT:
      return { ...state, showAlert: true };
    case REMOVE_ALERT:
      return { ...state, showAlert: false };
    default:
      return { ...state };
  }
};
