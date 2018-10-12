import React from 'react';
import { Link } from 'gatsby';

import logo from '../images/ppke-logo.svg';

export const LogoFull = () => (
  <Link className="inline-block xl:w-2/5 lg:w-3/5 lg:pt-0 md:w-3/5 md:pt-4 sm:w-3/5 sm:pt-4 w-3/5 pt-4" to="/">
    <img src={logo} className="max-w-full" alt="logo" />
  </Link>
);
