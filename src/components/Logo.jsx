import React from 'react';
import { Link } from 'gatsby';

import logo from '../images/logo.svg';
import logoLong from '../images/logo-long.svg';
import css from './Logo.module.css';

export const Logo = () => (
  <Link className={`${css.logo} inline-block`} to="/">
    <picture>
      <source
        media="(max-width: 575px)"
        srcSet={logoLong}
        type="image/svg+xml"
      />

      <img src={logo} alt="logo" className="w-64" />
    </picture>
  </Link>
);
