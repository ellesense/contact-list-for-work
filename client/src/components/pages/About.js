import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";

const About = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
  }, []);

  return (
    <div>
      <h1>About</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae,
        tempore nihil autem excepturi atque vero eligendi cupiditate voluptate
        consequatur eveniet laboriosam quod impedit deleniti sed tenetur et.
        Quis, recusandae quia!
      </p>
    </div>
  );
};

export default About;
