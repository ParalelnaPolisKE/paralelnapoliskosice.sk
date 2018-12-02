import React from 'react';
import { graphql, Link, navigate } from 'gatsby';
import { getPosts } from 'utils';

import { Page } from 'components/Page';

export default ({
  data: {
    allMarkdownRemark: { edges: posts },
  },
}) => (
  <Page title="Rýchlokurz digitálnej bezpečnosti" showNewsletter={true}>
    <p>
      Je dôležité mať svoje informácie pod dohľadom, či už sú uložené online
      alebo offline. Potrebné vedomosti o ochrane súkromia nás v škole naučiť
      nestihli, no stále je čas to zlepšiť. Nasledujúce návody pomôžu na ceste k
      lepšiemu zabezpečeniu digitálnych informácií a celkovo k väčšiemu súkromiu
      v prepojenom svete.
    </p>

    <blockquote>
      <p>Digitálna bezpečnosť nie je konkrétny stav, ale cesta.</p>
    </blockquote>

    <p>
      Každá časť obsahuje potrebné minimum teórie a úlohu, ktorej splnenie
      prinesie o niečo väčšiu istotu, že tvoje zariadenia a dáta sú v bezpečí.
      Odporúčame splniť jednu úlohu za deň a postupne tak prejsť celým kurzom.
    </p>

    <div className="flex flex-wrap -mx-2 mb-8">
      {getPosts(posts).map((post, i) => (
        <div className="sm:w-1/2 p-2">
          <div
            className="bg-grey-lighter hover:bg-grey-light focus:bg-grey-light cursor-pointer p-4"
            onClick={() => navigate(post.url)}
            role="link"
            tabIndex="0"
            onKeyUp={e => (e.key === 'Enter' ? navigate(post.url) : undefined)}
          >
            <h2>
              <Link to={post.url}>
                <span className="text-grey sm:text-4xl font-bold -mt-3 sm:float-right">
                  {i + 1}.
                </span>{' '}
                {post.title}
              </Link>
            </h2>
            <p className="text-sm m-0">{post.excerpt}</p>
          </div>
        </div>
      ))}
    </div>

    <p>
      Ďakujeme projektu <a href="https://crypto.christmas">crypto.christmas</a>{' '}
      za skvelý nápad. Pre detailnejšie informácie ďalej odporúčame{' '}
      <a href="https://github.com/freedomofpress/encryption-works">
        Encryption Works
      </a>{' '}
      a <a href="https://ssd.eff.org">Surveillance Self-Defense</a>.
    </p>
  </Page>
);

export const query = graphql`
  {
    allMarkdownRemark(filter: { frontmatter: { tags: { eq: "oznamy" } } }) {
      edges {
        node {
          ...MarkdownMetadataFragment
          ...MarkdownFrontmatterFragment
        }
      }
    }
  }
`;
