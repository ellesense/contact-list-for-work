import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import styles from "./Navbar.module.css";

const Navbar = ({ title }) => {
  const authContext = useContext(AuthContext);

  const authLinks = (
    <>
      <li>
        <Link to="/">Contacts</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <a href="#" onClick={authContext.logoutUser}>
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
        <Link to="/about">About</Link>
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
    <div className={styles.navbar}>
      <h1>{title}</h1>
      <ul>{authContext.isAuthenticated ? authLinks : nonAuthLinks}</ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Enter your title here.",
};

export default Navbar;
