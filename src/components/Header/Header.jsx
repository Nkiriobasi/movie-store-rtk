import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import user from '../../assets/user.png';

const Header = () => {
  return (
    <header className='header'>
      <div className="container">
        <Link to='/'>
          <h1 className="logo">Movie Store</h1>
        </Link>

        <div className="user__img">
          <img src={user} alt="user" />
        </div>
      </div>
    </header>
  );
}

export default Header;