const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

module.exports = (req, res, next) => {
  // get token from header
  const token = req.header("x-auth-token");

  // check for presence of token in the header
  if (!token) {
    return res.status(401).json({ msg: "Missing token. Not authorized." });
  }

  try {
    const decoded = jwt.verify(token, keys.JWT_SECRET);
    // decoded = {
    //     user: {id: 'some id'},
    //     iat: 1234,
    //     exp: 1234
    // }
    // console.log(decoded.user);
    req.user = decoded.user;
  } catch (err) {
    console.error();
    return res.status(401).json({ msg: "Token not valid." });
  }

  next();
};
