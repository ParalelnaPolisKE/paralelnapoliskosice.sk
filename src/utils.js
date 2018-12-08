const getLastArrayItem = array => array.slice(-1)[0];

export const getPosts = posts => posts.map(post => getPost(post.node));

export const getPost = post => ({
  title: post.frontmatter.title,
  date: post.fields.date,
  dateLocal: post.fields.dateLocal,
  url: post.fields.url,
  excerpt: post.excerpt,
  html: post.html,
  author: post.frontmatter.author,
  tags: post.frontmatter.tags || [],
  source: `https://github.com/ParalelnaPolisKE/paralelnapoliskosice.sk/edit/master/src/pages/blog/${getLastArrayItem(
    post.fileAbsolutePath.split('/')
  )}`,
  images: post.frontmatter.cover
    ? post.frontmatter.cover.childImageSharp.fluid
    : null,
});
