export const getPosts = posts =>
  posts.map(post => ({
    title: post.node.frontmatter.title,
    date: post.node.fields.date,
    dateLocal: post.node.fields.dateLocal,
    url: post.node.fields.url,
    excerpt: post.node.excerpt,
    tags: post.node.frontmatter.tags || [],
    imageSizes: post.node.cover ? post.node.cover.fluid : null,
  }));
