import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

// import 'bootstrap/dist/css/bootstrap-reboot.css';
// import 'bootstrap/dist/css/bootstrap-grid.css';
import 'styles/variables.css';
import 'styles/global.css';
import css from './Layout.module.css';

import { Header } from 'components/Header';
import { Footer } from 'components/Footer';

// export default ({ children, data: { site: { siteMetadata } } }) => {
//   const { crypto, social, title } = siteMetadata;

//   return (
//     <div className={css.site}>
//       <Helmet defaultTitle={title} titleTemplate={`%s | ${title}`} />
//       <Header />
//       <main role="main" className={css.content}>
//         {children}
//       </main>
//       <Footer crypto={crypto} social={social} />
//     </div>
//   );
// };

<StaticQuery
  query={graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          title
          social {
            facebook
            github
            instagram
            twitter
          }
          crypto {
            BTC
            LTC
            XMR
            ETH
            ETC
          }
        }
      }
    }
  `}
  render={data => {
    const { crypto, social, title } = data.site.siteMetadata;

    return (
      <div className={css.site}>
        <Helmet defaultTitle={title} titleTemplate={`%s | ${title}`} />
        <Header />
        <main role="main" className={css.content}>
          {children}
        </main>
        <Footer crypto={crypto} social={social} />
      </div>
    );
  }}
/>;

// export const query = graphql`
//   query MainQuery {
//     ...SiteFragment
//   }
// `;
