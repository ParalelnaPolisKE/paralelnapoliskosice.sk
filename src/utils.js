export const getPosts = posts =>
  posts.map(post => ({
    title: post.node.frontmatter.title,
    date: post.node.fields.date,
    url: post.node.fields.url,
    excerpt: post.node.excerpt,
    imageSizes: post.node.frontmatter.cover.childImageSharp.sizes,
  }));
