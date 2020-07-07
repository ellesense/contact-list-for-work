import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = ({ title }) => {
  return (
    <div className={styles.navbar}>
      <h1>{title}</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
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
