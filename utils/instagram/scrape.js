// https://github.com/gatsbyjs/gatsby/blob/master/examples/gatsbygram/scrape.js

require('dotenv').config();

const fs = require(`fs`);
const request = require(`request`);
const mkdirp = require(`mkdirp`);
const ProgressBar = require(`progress`);
const download = require(`./download-file`);

const access_token = process.env.INSTAGRAM_ACCESS_TOKEN;
const url = `https://api.instagram.com/v1/users/self/media/recent/?count=5&access_token=${access_token}`;

// Convert timestamp to ISO 8601.
const toISO8601 = timestamp => new Date(timestamp * 1000).toJSON();

// Create the progress bar
const bar = new ProgressBar(
  `Downloading instagram posts [:bar] :current/:total :elapsed secs :percent`,
  {
    total: 0,
    width: 30,
  }
);

// Create the images directory
mkdirp.sync(`./static/assets/instagram`);

let posts = [];

// Write json
const saveJSON = _ =>
  fs.writeFileSync(
    `./static/assets/instagram/instagram.json`,
    JSON.stringify(posts, ``, 2)
  );

const getPosts = () => {
  request(url, { encoding: `utf8` }, (err, res, body) => {
    if (err) {
      console.log(`error: ${err}`);
    }

    body = JSON.parse(body);

    if (body.meta.code === 400) {
      console.log(`error: ${body.meta.error_message}`);
      process.exit(1);
    }

    body.data
      .filter(image => image['type'] === 'image')
      .map(image => ({
        id: image.id,
        time: toISO8601(image.created_time),
        link: image.link,
        media: image.images.standard_resolution.url,
        image: `./${image.id}.jpg`, // relative path to images from .json
      }))
      .forEach(image => {
        // Download image locally and update progress bar
        bar.total++;
        download(image.media, `./static/assets/instagram/${image.id}.jpg`, _ =>
          bar.tick()
        );

        posts.push(image);
      });

    saveJSON();
  });
};

getPosts();
