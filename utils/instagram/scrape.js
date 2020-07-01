/**
 * Fetch latest instagram photos
 * @see https://github.com/gatsbyjs/gatsby/blob/master/examples/gatsbygram/scrape.js
 */

require('dotenv').config();

const fs = require(`fs`);
const fetch = require('node-fetch');
const mkdirp = require(`mkdirp`);
const ProgressBar = require(`progress`);
const download = require(`./download-file`);

const assetsPath = './static/assets/instagram';
const instagramUsername = 'paralelnapoliske';
const url = encodeURI(`https://www.instagram.com/${instagramUsername}/?__a=1`);

const log = message => {
  console.error(`Error: ${message}`);
  process.exit(1);
};

// Convert timestamp to ISO 8601.
const toISO8601 = timestamp => new Date(timestamp * 1000).toJSON();

// Create the progress bar
const bar = new ProgressBar(
  `Downloading instagram posts [:bar] :current/:total :elapsed secs :percent`,
  {
    total: 0,
    width: 10,
  }
);

// Create the images directory
mkdirp.sync(assetsPath);

fetch(url)
  .then(response => response.json())
  .then(body => {
    const data = body.graphql;

    const images = data.user.edge_owner_to_timeline_media.edges
      .filter(({ node: item }) => item[`__typename`] === `GraphImage`)
      .map(({ node: item }) => ({
        id: item.id,
        time: toISO8601(item.taken_at_timestamp),
        type: item[`__typename`],
        link: `https://www.instagram.com/p/${item.shortcode}/`,
        media: item.display_url,
        image: `./${item.id}.jpg`, // relative path to images from .json
        code: item.shortcode,
      }))
      .slice(0, 6);

    // Download image locally and update progress bar
    images.forEach(image => {
      bar.total++;
      download(image.media, `${assetsPath}/${image.id}.jpg`, response =>
        bar.tick()
      );
    });

    fs.writeFileSync(
      `${assetsPath}/instagram.json`,
      JSON.stringify(images, '', 2)
    );
  })
  .catch(error => {
    log(error.message);
  });
