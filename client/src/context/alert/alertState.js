import React, { useReducer } from "react";
import AlertContext from "./alertContext";
import alertReducer from "./alertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = (props) => {
  const initState = {
    showAlert: false,
    msg: "",
  };

  const [state, dispatch] = useReducer(alertReducer, initState);

  // Set alert
  const setAlert = (msg) => {
    console.log(msg);
    dispatch({
      type: SET_ALERT,
      payload: msg,
    });

    setTimeout(() => {
      dispatch({
        type: REMOVE_ALERT,
      });
    }, 3000);
  };

  return (
    <AlertContext.Provider
      value={{ showAlert: state.showAlert, msg: state.msg, setAlert }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
