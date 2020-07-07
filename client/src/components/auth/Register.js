import React, { useState } from "react";

const Register = () => {
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
    console.log(user);
  };

  return (
    <>
      <h1>Registration</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" onChange={onChange} />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={onChange}
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
