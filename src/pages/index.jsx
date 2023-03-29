import React from 'react';
import { graphql } from 'gatsby';

import { getPosts, getNews } from 'utils';

import { Layout } from 'components/Layout';
import { News } from 'components/News';
import { Posts } from 'components/Posts';
import { Container } from 'components/Container';
import { Button } from 'components/Button';

export default ({
  data: {
    blog: { edges: posts },
    news: { edges: news },
  },
}) => {
  const newsPosts = getNews(news);

  return (
    <Layout showNewsletter>
      <Container>
        <div className="lg:flex -mx-4">
          <section className="px-4">
            <h1>O Paralelnej Polis Košice</h1>
            <p>
              Sme kolektív ľudí, ktorí chcú žiť v slobodnejšom a otvorenejšom
              svete. Hľadáme spôsoby a technológie (Bitcoin, blockchain,
              reputačné systémy a decentralizované technológie), ktoré nám
              otvárajú možnosti, zjednodušujú bežné procesy a odstraňujú
              bariéry.
            </p>
            <p>
              V Paralelnej Polis Košice chceme vytvoriť prostredie zamerané na
              <b>
                {' '}
                vzdelávanie, objavovanie a tvorenie lepších systémov pre naše
                okolie
              </b>{' '}
              - teba, nás, firmy, jednotlivcov - všetkých, ktorí majú záujem
              fungovať slobodnejšie a nezávislejšie. Zameriavame sa na
              experimentovanie a aplikáciu kryptomien a spojených technológií do
              bežného života.
            </p>
            <Button to="/o-paralelnej-polis">Viac informácií</Button>
          </section>
        </div>
        {newsPosts.length > 0 && (
          <section>
            <h1 id="news">Aktuality</h1>
            <News posts={newsPosts} />
          </section>
        )}
        <section>
          <h1>Blog</h1>
          <Posts posts={getPosts(posts)} />
          <div className="text-center">
            <Button to="/blog">Všetky príspevky</Button>
          </div>
        </section>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  {
    blog: allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/pages/blog/" } }
      limit: 3
    ) {
      edges {
        node {
          ...MarkdownMetadataFragment
          ...MarkdownFrontmatterFragment
        }
      }
    }

    news: allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/pages/news/" } }
      limit: 3
    ) {
      edges {
        node {
          ...MarkdownMetadataFragment
          ...MarkdownFrontmatterFragment
        }
      }
    }
  }
`;
