import React from 'react';
import { graphql } from 'gatsby';

import { getPosts } from 'utils';

import { Layout } from 'components/Layout';
import { Posts } from 'components/Posts';
import { Container } from 'components/Container';
import { Button } from 'components/Button';

export default ({
  data: {
    allMarkdownRemark: { edges: posts },
  },
}) => {
  return (
    <Layout showNewsletter>
      <Container>
        <div className="lg:flex -mx-4">
          <section className="lg:w-1/2 px-4">
            <h1>O Paralelnej Polis</h1>
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
          <section className="lg:w-1/2 px-4">
            <h1>Udalosti</h1>
            <h2>
              <a href="https://www.facebook.com/events/959009994284372/">
                Predstavenie + otvorenie Bitcoin ATM
              </a>
            </h2>
            <p>
              <strong>14. november - 17:00</strong>,{' '}
              <a href="http://www.kinousmev.sk/">Kino Úsmev</a>
            </p>
            <p>
              Oficiáln(ejšie) predstavenie Paralelnej Polis Košice a spustenie
              kryptomatu.
            </p>
            <ul>
              <li>Čo je Paralelná Polis Košice?</li>
              <li>Na čom pracujeme, čo chceme dosiahnuť?</li>
              <li>Našich cieľoch a výzvach</li>
              <li>
                Pokecaj si s členmi tímu - pridaj svoj nápad, daj nám spätnú
                väzbu
              </li>
              <li>Vyskúšaj si kryptomat - automat na nákup kryptomien</li>
            </ul>
            <Button to="https://www.facebook.com/events/959009994284372/">
              Viac informácií v udalosti
            </Button>
          </section>
        </div>
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
    allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
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
