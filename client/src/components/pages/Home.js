import React from "react";
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";
import ContactFilter from "../contacts/ContactFilter";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ContactFilter />
      <ContactForm />
      <Contacts />
    </div>
  );
};

export default Home;
