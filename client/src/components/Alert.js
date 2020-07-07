import React, { useContext } from "react";
import AlertContext from "../context/alert/alertContext";

const Alert = () => {
  const alertContext = useContext(AlertContext);
  return <div>{alertContext.showAlert ? "Something is missing." : null}</div>;
};

export default Alert;
