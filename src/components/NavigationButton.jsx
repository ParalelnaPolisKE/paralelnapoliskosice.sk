import React from 'react';
import { Link } from 'gatsby';

export const NavigationButton = ({ children, to }) => (
  <Link
    activeClassName="font-bold"
    className="uppercase md:text-lg md:p-4"
    to={to}
  >
    {children}
  </Link>
);
