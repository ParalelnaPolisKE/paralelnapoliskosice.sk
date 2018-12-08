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
  url,
  showNewsletter = true,
  isArticle = false,
}) => (
  <Layout showNewsletter={showNewsletter}>
    <Container>
      <SEO
        title={title}
        description={description}
        image={image}
        url={url}
        isArticle={isArticle}
      />
      <h1>{title}</h1>
      {children}
    </Container>
  </Layout>
);

Page.propTypes = {
  title: PropTypes.string.isRequired,
};
