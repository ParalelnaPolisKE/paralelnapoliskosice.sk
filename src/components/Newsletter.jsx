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
      <form
        action={data.site.siteMetadata.mailchimpUrl}
        method="POST"
        className="flex flex-col sm:flex-row sm:justify-center"
      >
        <input
          autoCapitalize="off"
          autoCorrect="off"
          id="MERGE0"
          name="MERGE0"
          placeholder="email"
          type="email"
          className="p-4 m-1"
          required
        />
        <input
          type="text"
          name="MERGE1"
          id="MERGE1"
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
