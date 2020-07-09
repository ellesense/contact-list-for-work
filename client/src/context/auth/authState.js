import React, { useReducer } from "react";
import axios from "axios";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOAD_USER,
  LOAD_USER_ERROR,
  CLEAR_ERRORS,
  LOGOUT,
} from "../types";

const AuthState = (props) => {
  const initState = {
    token: localStorage.getItem("token"),
    user: null,
    isAuthenticated: null,
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initState);

  const startLoading = () => {
    dispatch({ type: "START_LOADING" });
    console.log("loading started");
  };

  const endLoading = () => {
    dispatch({ type: "END_LOADING" });
    console.log("loading ended");
  };

  // Load user
  const loadUser = async () => {
    startLoading();
    if (localStorage.token) {
      axios.defaults.headers.common["x-auth-token"] = localStorage.token;
    } else {
      delete axios.defaults.headers.common["x-auth-token"];
    }

    try {
      const res = await axios.get("/api/auth");
      dispatch({
        type: LOAD_USER,
        payload: res.data,
      });
      endLoading();
    } catch (err) {
      dispatch({ type: LOAD_USER_ERROR });
      endLoading();
    }
  };

  // Register user
  const registerUser = async (formData) => {
    const config = { headers: { "Content-Type": "application/json" } };
    console.log("From authState.js: registerUser()");
    try {
      const res = await axios.post("/api/users", formData, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      loadUser();
    } catch (err) {
      console.log("From authState.js: catch() -", err.response.data.msg);
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg,
      });
    }
  };

  // Login user
  const loginUser = async (formData) => {
    const config = { headers: { "Content-Type": "application/json" } };
    try {
      const res = await axios.post("/api/auth", formData, config);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      loadUser();
    } catch (err) {
      console.log(
        "From authState.js: loginUser() catch() - ",
        err.response.data.msg
      );
      dispatch({ type: LOGIN_FAIL, payload: err.response.data.msg });
    }
  };

  // Logout user
  const logoutUser = () => {
    dispatch({ type: LOGOUT });
  };

  // Clear errors
  const clearErrors = () => {
    dispatch({
      type: CLEAR_ERRORS,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        error: state.error,
        loadUser,
        loginUser,
        logoutUser,
        clearErrors,
        registerUser,
        logoutUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
