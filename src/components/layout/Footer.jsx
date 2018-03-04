import React from 'react';
import { Social } from 'components/Social';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer = () => {
  return (
    <footer role="contentinfo">
      &copy; {CURRENT_YEAR} | <Social url={'#'}>github</Social>
    </footer>
  );
};
