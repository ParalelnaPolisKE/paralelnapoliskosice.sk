import React from 'react';

import 'css/output.css';

import { SEO } from 'components/SEO';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

export const Layout = ({ children, showNewsletter }) => (
  <div className="flex flex-col min-h-screen">
    <SEO />

    <Header />

    <main role="main" className="flex-1 px-4 py-8 md:my-10">
      {children}
    </main>

    <Footer showNewsletter={showNewsletter} />
  </div>
);
