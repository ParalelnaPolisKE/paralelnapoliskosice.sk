import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

import { Layout } from 'components/Layout';
import { Container } from 'components/Container';

export const Page = ({ children, title, showNewsletter = true }) => (
  <Layout showNewsletter={showNewsletter}>
    <Container>
      <Helmet title={title} />
      <h1>{title}</h1>
      {children}
    </Container>
  </Layout>
);

Page.propTypes = {
  title: PropTypes.string.isRequired,
};
