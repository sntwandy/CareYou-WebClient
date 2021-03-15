/**
 *
 */

require('dotenv').config();
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.SECRET_KEY;

const verifyToken = (token: string): boolean => {
  if (typeof token !== undefined) {
    const bearerToken: string = token?.split(' ')[1];

    SECRET_KEY &&
      jwt.verify(token, SECRET_KEY, (err, authData) => {
        if (err) return false;
        return true
      });
  } else {
    return false;
  }
  return false
};

export default verifyToken;
