/**
 *
 */

import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.SECRET_KEY;

const verifyToken = (token: string): boolean => {
  let isVerfied: boolean = false;
    const bearerToken: string = token?.split(' ')[1];

    SECRET_KEY &&
      jwt.verify(bearerToken, SECRET_KEY, (err, authData) => {
        console.log(err)
        if (err) {
          isVerfied = false;
          return
        }
        console.log('Its true')
        isVerfied = true
      });
      return isVerfied
};

export default verifyToken;
