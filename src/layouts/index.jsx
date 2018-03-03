import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import 'bootstrap/dist/css/bootstrap-reboot.css';
import '../styles/global.css';

import { Header } from './header';
import { Footer } from './footer';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Paralelná Polis Košice"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <main role="main">{children()}</main>
    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
