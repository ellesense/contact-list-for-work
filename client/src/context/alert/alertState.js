import React, { useReducer } from "react";
import AlertContext from "./alertContext";
import alertReducer from "./alertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = (props) => {
  const initState = {
    showAlert: false,
  };

  const [state, dispatch] = useReducer(alertReducer, initState);

  // Set alert
  const setAlert = () => {
    dispatch({
      type: SET_ALERT,
    });

    setTimeout(() => {
      dispatch({
        type: REMOVE_ALERT,
      });
    }, 3000);
  };

  return (
    <AlertContext.Provider value={{ showAlert: state.showAlert, setAlert }}>
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
