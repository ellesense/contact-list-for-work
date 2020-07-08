import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";
import ContactFilter from "../contacts/ContactFilter";

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
  }, []);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <ContactForm />
        <ContactFilter />
      </div>
      <Contacts />
    </div>
  );
};

export default Home;
