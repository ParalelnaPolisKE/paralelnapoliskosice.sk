import React from 'react';
import Link from 'gatsby-link';

import css from './Logo.module.css';
import logo from '../images/logo.png';

export const Logo = () => (
  <Link className={css.logo} to="/">
    <img src={logo} alt="" />
  </Link>
);
