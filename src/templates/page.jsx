import React from 'react';
import { Page } from 'components/Page';

export default ({ children, pageContext: { frontmatter } }) => (
  <Page {...frontmatter}>{children}</Page>
);
