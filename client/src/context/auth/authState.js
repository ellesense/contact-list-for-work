import React, { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import { REGISTER_SUCCESS } from "../types";

const AuthState = (props) => {
  const initState = {
    token: localStorage.getItem("token"),
    user: null,
    isAuthenticated: null,
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initState);

  // Load user
  const loadUser = () => {};

  // Register user
  const registerUser = () => {
    dispatch({
      type: REGISTER_SUCCESS,
      payload: 1,
    });
  };

  // Login user
  const loginUser = () => {};

  // Logout user
  const logoutUser = () => {};

  // Clear errors
  const clearErrors = () => {};

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        loadUser,
        loginUser,
        logoutUser,
        clearErrors,
        registerUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
