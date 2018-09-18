import React from 'react';
import { Link } from 'gatsby';

import logo from '../images/logo.svg';

export const Logo = () => (
  <Link className="inline-block w-24" to="/">
    <img src={logo} className="max-w-full" alt="logo" />
  </Link>
);
