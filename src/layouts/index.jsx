import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { Header, Footer } from 'components/layout';

import 'bootstrap/dist/css/bootstrap-reboot.css';
import 'styles/global.css';

export default ({ children, data }) => {
  const title = data.site.siteMetadata.title;

  return (
    <div>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Header />
      {children()}
      <Footer />
    </div>
  );
};

export const query = graphql`
  query Query {
    site {
      siteMetadata {
        title
        social {
          facebook
          github
          instagram
          twitter
        }
      }
    }
  }
`;
