import React from 'react';

const CURRENT_YEAR = new Date().getFullYear();

export const Footer = () => (
  <footer role="contentinfo">&copy; {CURRENT_YEAR}</footer>
);
