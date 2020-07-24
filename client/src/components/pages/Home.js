import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
// import Analysis from "../Analysis";
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";
import Details from "../Details";
import ContactFilter from "../contacts/ContactFilter";
import styles from "./Home.module.css";

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
  }, []);

  return (
    <>
      <div className={styles.home}>
        <section>
          <Details />
        </section>
        <section>
          <ContactFilter />
          <Contacts />
        </section>
      </div>
    </>
  );
};

export default Home;
