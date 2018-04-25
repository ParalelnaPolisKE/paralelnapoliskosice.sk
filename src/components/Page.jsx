import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import { Container } from 'components/Container';

export const Page = ({ children, title }) => (
  <Container>
    <Helmet title={title} />
    <h1>{title}</h1>
    {children}
  </Container>
);

Page.propTypes = {
  title: PropTypes.string.isRequired,
};
