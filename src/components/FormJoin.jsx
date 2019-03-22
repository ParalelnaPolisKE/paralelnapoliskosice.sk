import React from 'react';
import slugify from 'slugify';
import { StaticQuery, graphql } from 'gatsby';

export const FormJoin = ({ children, category }) => {
  const formName = slugify(category).toLowerCase();
  return (
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              joinUsFormAction
            }
          }
        }
      `}
    >
      {({
        site: {
          siteMetadata: { joinUsFormAction },
        },
      }) => (
        <form
          name={formName}
          method="post"
          action={joinUsFormAction}
          className="p-4 mb-8 bg-grey-lightest md:flex"
        >
          <div className="flex flex-col flex-1">
            <label
              htmlFor="message"
              className="uppercase text-xxs font-bold text-grey-darkest mb-2"
            >
              Tu je priestor pre tvoju správu pre nás:
            </label>
            <textarea
              name="message"
              id="message"
              className="text-sm border p-4 mb-2 md:m-0 w-full md:flex-1"
              rows={5}
              required
            />
            <p className="text-sm mt-2 md:mb-0">{children}</p>
          </div>
          <div className="flex flex-col flex-1 md:ml-2">
            <label
              htmlFor="name"
              className="uppercase text-xxs font-bold text-grey-darkest mb-2"
            >
              Tvoje meno:
            </label>
            <input
              name="name"
              id="name"
              placeholder="meno"
              type="text"
              className="text-sm border p-4 mb-2"
              required
            />
            <label
              htmlFor="email"
              className="uppercase text-xxs font-bold text-grey-darkest mb-2"
            >
              Tvoj email:
            </label>
            <input
              autoCapitalize="off"
              autoCorrect="off"
              name="email"
              id="email"
              placeholder="meno@email.sk"
              type="email"
              className="text-sm border p-4 mb-2"
              required
            />
            <input name="subject" type="hidden" value={category} />
            <input name="form-name" type="hidden" value={formName} />
            <input
              name="submit"
              type="submit"
              value="Chcem sa zapojiť!"
              className="text-xs font-semibold uppercase p-4 bg-grey-dark text-white hover:bg-grey-darker cursor-pointer"
            />
          </div>
        </form>
      )}
    </StaticQuery>
  );
};
