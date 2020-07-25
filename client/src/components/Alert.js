import React, { useContext } from "react";
import AlertContext from "../context/alert/alertContext";
import styles from "./Alert.module.css";

const Alert = () => {
  const alertContext = useContext(AlertContext);
  return <>{alertContext.showAlert ? alertContext.msg : null}</>;
};

export default Alert;
