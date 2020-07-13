import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import ContactContext from "../../context/contact/contactContext";
import styles from "./Navbar.module.css";

const Navbar = ({ title }) => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  const onLogout = () => {
    authContext.logoutUser();
    contactContext.clearContacts();
  };

  const authLinks = (
    <>
      <li>
        <Link to="/">Contacts</Link>
      </li>
      <li>
        <a href="#" onClick={onLogout} className={styles.logOutButton}>
          Logout
        </a>
      </li>
    </>
  );

  const nonAuthLinks = (
    <>
      <li>
        <Link to="/">Contacts</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </>
  );

  return (
    <header>
      <h1 className={styles.heading}>{title}</h1>
      <nav>
        <ul class={styles.navLinks}>
          {authContext.isAuthenticated ? authLinks : nonAuthLinks}
        </ul>
      </nav>
    </header>
  );
};

Navbar.propTypes = {
  title: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Enter your title here.",
};

export default Navbar;
