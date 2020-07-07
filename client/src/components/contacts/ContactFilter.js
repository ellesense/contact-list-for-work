import React, { useContext, useState, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);

  const [text, setText] = useState("");

  useEffect(() => {
    if (contactContext.filtered === null) {
      setText("");
    }
  });

  const onChange = (e) => {
    setText(e.target.value);
    contactContext.filterContacts(text);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form
        onSubmit={onSubmit}
        style={{ background: "lightgrey", padding: "8px" }}
      >
        <h3>Filter by name or email</h3>
        <input type="text" name="text" value={text} onChange={onChange} />
      </form>
    </>
  );
};

export default ContactFilter;
