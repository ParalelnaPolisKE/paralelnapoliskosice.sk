import React from 'react';
import { graphql } from 'gatsby';

import { Page } from 'components/Page';
import { PostLinks } from 'components/PostLinks';
import { PostMeta } from 'components/PostMeta';
import { Author } from 'components/Author';

export default ({
  data: { markdownRemark: post },
  pageContext: { prev, next },
}) => (
  <Page
    title={post.frontmatter.title}
    description={post.excerpt}
    image={post.frontmatter.cover.childImageSharp.fluid.src}
    url={post.fields.url}
    isArticle={true}
  >
    <PostMeta
      date={post.fields.date}
      dateLocal={post.fields.dateLocal}
      tags={post.frontmatter.tags}
      author={post.frontmatter.author}
    />
    <article className="max-w-md m-auto md:my-20">
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
    <Author {...post.frontmatter.author} />
    <PostLinks prev={prev} next={next} />
  </Page>
);

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      ...MarkdownMetadataFragment
      ...MarkdownFrontmatterFragment
    }
  }
`;
