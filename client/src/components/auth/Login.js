import React, { useState, useContext, useEffect } from "react";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";

const Login = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    // send user to '/' if already authenticated
    if (authContext.isAuthenticated) {
      props.history.push("/");
    }

    if (authContext.error) {
      alertContext.setAlert(authContext.error);
      authContext.clearErrors();
    }
    // eslint-disable-next-line
  }, [authContext.error, authContext.isAuthenticated]);

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (user.email === "" || user.password === "") {
      alertContext.setAlert("All fields are required.");
    }
    authContext.loginUser(user);
  };

  return (
    <>
      <h1>Login</h1>
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
        <input type="submit" value="Login" />
      </form>
    </>
  );
};

export default Login;
