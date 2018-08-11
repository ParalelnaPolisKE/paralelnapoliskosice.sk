import React from 'react';
import { graphql } from 'gatsby';

import 'bootstrap/dist/css/bootstrap-reboot.css';
import 'bootstrap/dist/css/bootstrap-grid.css';

import 'css/variables.css';
import 'css/global.css';
import 'css/fontello.css';
import 'css/utilities.css';

import { getPosts } from 'utils';

import { Layout } from 'components/Layout';
import { Posts } from 'components/Posts';
import { Centered } from 'components/Centered';
import { Container } from 'components/Container';
import { Button } from 'components/Button';

export default ({
  data: {
    allMarkdownRemark: { edges: posts },
  },
}) => {
  return (
    <Layout>
      <Container>
        <section>
          <h1>O Paralelnej Polis</h1>
          <p>
            Sme kolektív ľudí, ktorí chcú žiť v slobodnejšom a otvorenejšom
            svete. Hľadáme spôsoby a technológie (Bitcoin, blockchain, reputačné
            systémy a decentralizované technológie), ktoré nám otvárajú
            možnosti, zjednodušujú bežné procesy a odstraňujú bariéry.
          </p>
          <p>
            V Paralelnej Polis Košice chceme vytvoriť prostredie zamerané na
            <b>
              {' '}
              vzdelávanie, objavovanie a tvorenie lepších systémov pre naše
              okolie
            </b>{' '}
            - teba, nás, biznisy, jednotlivcov - všetkých, ktorí majú záujem
            fungovať slobodnejšie a nezávislejšie. Zameriavame sa na
            experimentovanie a aplikáciu kryptomien a spojených technológií do
            bežného života.
          </p>
          <Button to="/o-paralelnej-polis">Viac info</Button>
        </section>
        <section>
          <h1>Blog</h1>
          <Posts posts={getPosts(posts)} />
          <Centered>
            <Button to="/blog">Všetky príspevky</Button>
          </Centered>
        </section>
      </Container>
    </Layout>
  );
};

export const query = graphql`
  query IndexQuery {
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
