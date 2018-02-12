import React from 'react';
import { Link } from 'react-router-dom';

const loggedIn = (currentUser, logout) => {
    return (
      <div className="logged-in">
        <p>Welcome {currentUser.username}</p>
        <button onClick={logout}>logout</button>
      </div>
    );
};
const loggedOut = () => {
  return (
    <div className="logged-out">
      <Link to='/login'>login</Link>
      <Link to='/signup'>sign up</Link>
    </div>
  );
};

const Greeting = ({currentUser, logout}) => {
    if (currentUser) {
      return loggedIn(currentUser, logout);
    } else {
      return loggedOut();
    }
};

export default Greeting;
