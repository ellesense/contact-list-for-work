import React, { useContext, useEffect, useState } from "react";
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

  const [contactForm, showContactForm] = useState(false);

  return (
    <>
      <main>
        <div>
          <button
            className={styles.newContact}
            onClick={() => {
              showContactForm(!contactForm);
            }}
          >
            New contact
          </button>
        </div>
        {contactForm ? (
          <section>
            <ContactForm />
          </section>
        ) : null}
        <section className={styles.home}>
          <div>
            <Details />
          </div>
          <div>
            <ContactFilter />
            <Contacts />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
