import React, { useContext, useState, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";
import styles from "./ContactFilter.module.css";

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);

  const [text, setText] = useState("");

  useEffect(() => {
    if (contactContext.filtered === null) {
      setText("");
    }
  }, []);

  const onChange = (e) => {
    setText(e.target.value);
    contactContext.filterContacts(text);

    if (e.target.value === "") {
      contactContext.clearFilter();
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={onSubmit} className={styles.container}>
        <label htmlFor="text">Filter by name or email</label>
        <div className={styles.filterForm}>
          <input type="text" name="text" value={text} onChange={onChange} />
        </div>
      </form>
    </>
  );
};

export default ContactFilter;
