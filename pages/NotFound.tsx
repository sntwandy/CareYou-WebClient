/**
 *
 */
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

// Not Found Page if not match any routes
const NotFound: FC = () => {
  return (
    <>
      <h2 className="font-medium text-center text-2xl">Page not found. :(</h2>
      <div className="text-lg w-32 h-10 justify-center items-center flex rounded-full bg-blue-400 hover:bg-blue-300">
        <Link to="/home">Go to Home</Link>
      </div>
    </>
  );
};

export default NotFound;
