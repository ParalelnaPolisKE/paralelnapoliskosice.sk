import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

export const Newsletter = () => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            mailchimpUrl
          }
        }
      }
    `}
  >
    {data => (
      <form action={data.site.siteMetadata.mailchimpUrl} method="POST">
        <input
          autoCapitalize="off"
          autoCorrect="off"
          id="MERGE0"
          name="MERGE0"
          placeholder="email"
          size="25"
          type="email"
          className="p-4 m-1"
        />
        <input
          type="text"
          name="MERGE1"
          id="MERGE1"
          size="25"
          placeholder="prvé meno"
          className="p-4 m-1"
        />
        <input
          type="submit"
          name="submit"
          value="Odoberať"
          className="p-4 m-1 bg-grey-dark text-white hover:bg-grey-darker cursor-pointer"
        />
      </form>
    )}
  </StaticQuery>
);
