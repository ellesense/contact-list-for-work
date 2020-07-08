import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  CLEAR_ERRORS,
  LOAD_USER_ERROR,
  LOAD_USER,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return { ...state, ...action.payload, isAuthenticated: true };
    case REGISTER_FAIL:
    case LOAD_USER_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return { ...state, error: null };
    case LOAD_USER:
      return { ...state, isAuthenticated: true, user: action.payload };
    default:
      return state;
  }
};
