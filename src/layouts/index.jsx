import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import 'bootstrap/dist/css/bootstrap-reboot.css';
import 'styles/variables.css';
import 'styles/global.css';
import css from './index.module.css';

import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

export default ({ children, data }) => {
  const title = data.site.siteMetadata.title;

  return (
    <div className={css.site}>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Header />
      <main role="main" className={css.content}>
        {children()}
      </main>
      <Footer />
    </div>
  );
};

export const query = graphql`
  query IndexQuery {
    ...SiteFragment
  }
`;
