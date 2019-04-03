/* global FB */
const getLastArrayItem = array => array.slice(-1)[0];

export const capitalizeFirst = str => str.charAt(0).toUpperCase() + str.substr(1);

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

const callFBApi = async (url, options) => {
  return new Promise((resolve, reject) => {
    FB.api(
      url,
      response => {
        if (response && !response.error) {
          resolve(response);
        } else {
          reject(response.error);
        }
      },
      { access_token: options.accessToken }
    );
  });
};

export const getEvents = async accessToken => {
  const response = await callFBApi('/paralelnapoliske/events', { accessToken });

  if (response && response.data) {
    return response.data;
  }

  return null;
};
