import React from "react";
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <ContactForm />
      <Contacts />
    </div>
  );
};

export default Home;
