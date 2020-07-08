import { SET_ALERT, REMOVE_ALERT } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_ALERT:
      return { ...state, showAlert: true, msg: action.payload };
    case REMOVE_ALERT:
      return { ...state, showAlert: false, msg: "" };
    default:
      return { ...state };
  }
};
