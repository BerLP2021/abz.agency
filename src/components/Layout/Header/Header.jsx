import React from 'react';

import {Button} from '../../UI/Buttons';

import './header.scss';

import logo from '../../../assets/logo/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <div className="container">
        <div className="header__wrapper">
          <div className="header__logo">
              <Link to='/'><img src={logo} alt="logo" /></Link>
          </div>
          <div className="header__login-group">
            <Link to='users'><Button className='header__login-users' title='Users'/></Link>
            <Link to='signup'><Button className='header__login-sign' title='Sign Up'/></Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header