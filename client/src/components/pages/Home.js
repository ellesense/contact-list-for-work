import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
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
      <main>
        <section>
          <ContactForm />
        </section>
        <section className={styles.contents}>
          <div className={styles.details}>
            <Details />
          </div>
          <div className={styles.contactsFilterAndTable}>
            <ContactFilter />
            <Contacts />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
