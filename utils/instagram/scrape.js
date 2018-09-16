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

const asstetsPath = './static/assets/instagram';
const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
const url = `https://api.instagram.com/v1/users/self/media/recent/?count=5&access_token=${accessToken}`;

// Used only when INSTAGRAM_ACCESS_TOKEN has no value
const dummyImageData = [
  {
    id: '12345',
    created_time: Math.floor(Date.now() / 1000),
    type: 'image',
    link:
      'https://www.templaza.com/blog/how-to-get-access-token-on-instagram-api/435.html',
    images: {
      standard_resolution: {
        url:
          'https://imgplaceholder.com/640x640?text=Missing_br_INSTAGRAM_ACCESS_TOKEN_br_value+in+env+file&font-size=50',
      },
    },
  },
];

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

// Handle missing INSTAGRAM_ACCESS_TOKEN
if (typeof accessToken === 'undefined') {
  log('INSTAGRAM_ACCESS_TOKEN is missing in environment variables (.env).');
}

// Create the images directory
mkdirp.sync(asstetsPath);

fetch(url)
  .then(response => response.json())
  .then(body => {
    // Process errors with API call
    if (body.meta.code === 400) {
      // Handle blank INSTAGRAM_ACCESS_TOKEN
      if (body.meta.error_type === 'OAuthParameterException') {
        body.data = dummyImageData;
      } else {
        log(body.meta.error_message);
      }
    }

    const images = body.data
      .filter(
        image => image['type'] === 'image' || image['type'] === 'carousel'
      )
      .map(image => ({
        id: image.id,
        time: toISO8601(image.created_time),
        link: image.link,
        media: image.images.standard_resolution.url,
        image: `./${image.id}.jpg`, // relative path to images from .json
      }));

    // Download image locally and update progress bar
    images.forEach(image => {
      bar.total++;
      download(image.media, `${asstetsPath}/${image.id}.jpg`, response =>
        bar.tick()
      );
    });

    fs.writeFileSync(
      `${asstetsPath}/instagram.json`,
      JSON.stringify(images, '', 2)
    );
  })
  .catch(error => {
    log(error.message);
  });
