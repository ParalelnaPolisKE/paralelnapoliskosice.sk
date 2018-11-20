export const getPosts = posts =>
  posts.map(post => ({
    title: post.node.frontmatter.title,
    date: post.node.fields.date,
    dateLocal: post.node.fields.dateLocal,
    url: post.node.fields.url,
    excerpt: post.node.excerpt,
    author: post.node.frontmatter.author,
    tags: post.node.frontmatter.tags || [],
    images: post.node.frontmatter.cover
      ? post.node.frontmatter.cover.childImageSharp.fluid
      : null,
  }));
