import React from 'react';
import { Link } from 'gatsby';

import logo from '../images/logo.svg';
import css from './Logo.module.css';

export const Logo = () => (
  <Link className={`${css.logo} inline-block w-12 sm:w-24`} to="/">
    <img src={logo} className="max-w-full" alt="logo" />
  </Link>
);
