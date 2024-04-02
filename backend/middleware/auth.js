import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const jwtkey = process.env.JWT_KEY;

export const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (token) {
    token = token.split(" ")[1];
    console.warn("middleware called if ", token);

    // verify token
    jwt.verift(token, jwtkey, (err, valid) => {
      if (err) {
          res.send({ result: "Please provide valid token" });
      } else {
        next();
      }
    });
  } else {
    res.send({ result: "Please add token with header" });
  }
  next();
};
