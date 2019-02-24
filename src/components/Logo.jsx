import React from 'react';
import { Link, withPrefix } from 'gatsby';

import css from './Logo.module.css';

export const Logo = () => (
  <Link className={`${css.logo} inline-block`} to="/">
    <picture>
      <source
        media="(max-width: 575px)"
        srcSet={withPrefix('/img/logo-long.svg')}
        type="image/svg+xml"
      />

      <img src={withPrefix('/img/logo.svg')} alt="logo" className="w-48 py-2" />
    </picture>
  </Link>
);
