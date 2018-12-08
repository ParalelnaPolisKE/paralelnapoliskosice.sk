import React from 'react';
import PropTypes from 'prop-types';

import { SEO } from 'components/SEO';
import { Layout } from 'components/Layout';
import { Container } from 'components/Container';

export const Page = ({
  children,
  title,
  description,
  image,
  showNewsletter = true,
  isBlogPost = false,
}) => (
  <Layout showNewsletter={showNewsletter}>
    <Container>
      <SEO
        title={title}
        description={description}
        image={image}
        isBlogPost={isBlogPost}
      />
      <h1>{title}</h1>
      {children}
    </Container>
  </Layout>
);

Page.propTypes = {
  title: PropTypes.string.isRequired,
};
