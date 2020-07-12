import React, { useContext } from "react";
import AlertContext from "../context/alert/alertContext";
import styles from "./Alert.module.css";

const Alert = () => {
  const alertContext = useContext(AlertContext);
  return (
    <div className={styles.alert}>
      {alertContext.showAlert ? alertContext.msg : null}
    </div>
  );
};

export default Alert;
