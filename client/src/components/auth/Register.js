import React, { useState, useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

const Register = () => {
  const alertContext = useContext(AlertContext);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (user.name == "" || user.email === "" || user.password === "") {
      alertContext.setAlert();
    } else if (user.password !== user.passwordConfirmation) {
      alertContext.setAlert();
    } else {
      console.log(user);
    }
  };

  return (
    <>
      <h1>Registration</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" onChange={onChange} />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" onChange={onChange} />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={onChange}
          minLength="6"
        />

        <label htmlFor="password-confirmation">Confirm Password</label>
        <input
          type="password"
          name="passwordConfirmation"
          id="password-confirmation"
          onChange={onChange}
        />

        <input type="submit" value="Register" />
      </form>
    </>
  );
};

export default Register;
