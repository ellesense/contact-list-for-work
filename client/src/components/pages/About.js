import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";

const About = () => {
  const authContext = useContext(AuthContext);
  console.log(authContext.loading);
  useEffect(() => {
    authContext.loadUser();
  }, []);

  return (
    <div>
      <h1>LoCo (Logistcs Contacts)</h1>
      <p>
        Create and maintain contact information about suppliers and customers.
      </p>
    </div>
  );
};

export default About;
