require("dotenv").config();

const { join } = require("path");
const pkg = require("../package.json")

const sourcePath = join(__dirname, "../public");

const pinata = pinataSDK(
  process.env.PINATA_API_KEY,
  process.env.PINATA_SECRET_API_KEY
);

const options = {
  pinataMetadata: {
    name: pkg.name
  },
  pinataOptions: {
    cidVersion: 0
  }
};

pinata
  .testAuthentication()
  .then(result => {
    if (result.authenticated) {
      pinata
        .pinFromFS(sourcePath, options)
        .then(result => {
          console.log("PPKE static website was successfully pinned to IPFS!");
        })
        .catch(err => {
          console.log(err);
        });
    }
  })
  .catch(err => {
    console.log(err);
  });
