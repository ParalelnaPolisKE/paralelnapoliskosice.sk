# Paralelná Polis Košice

[![logo](static/img/logo.svg)](https://www.paralelnapoliskosice.sk)

English | [Slovensky](README.sk-SK.md)

---

[![Netlify Status](https://api.netlify.com/api/v1/badges/bc3e351a-833d-4fc1-aab3-cae6ac2f8c20/deploy-status)](https://app.netlify.com/sites/paralelnapoliskosice/deploys) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com) [![tippin](https://img.shields.io/badge/%E2%9A%A1%EF%B8%8Ftippin.me-@parallelpoliske-F0918E.svg)](https://tippin.me/@parallelpoliske)

## Writing a post

Blog posts are located in [`./src/pages/blog`](https://github.com/ParalelnaPolisKE/web/tree/master/src/pages/blog) directory and are written in [Markdown syntax](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

### To add/edit a post

- create a new pull request containing your updates
- if you have write access to the repository you can log in to [admin](https://www.paralelnapoliskosice.sk/admin/) and edit posts comfortably trough [Netlify CMS](https://www.netlifycms.org/)

## Development

### Prerequisities

- you need [node with npm](https://nodejs.org/en/download/) (node package manager) installed to be able to build and run website locally on you computer. Let's stick with LTS (Long Term Support) version.
- [git](https://git-scm.com/downloads) is needed to commit new changes; you can find also some [GUI clients](https://git-scm.com/downloads/guis) that may help you with that.
  - create a new SSH key and [associate it with your GitHub account](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/)
  - how to work with git? Check [the simple guide - no deep shit!](http://rogerdudler.github.io/git-guide/)
- work with your favourite text editor (humbly recommending [vscode](https://code.visualstudio.com/))

### Installation

In the command line (Terminal on Linux/Mac, Command Prompt on Windows) run:

```
git clone git@github.com:ParalelnaPolisKE/paralelnapoliskosice.sk.git
cd paralelnapoliskosice.sk
npm install
```

Copy `.env.example` file into `.env` (with the dot at the beginning in the name) and set correct constants inside (or leave them blank).

#### Environment Variables in `.env`

| Variable Name            | Required | Default Value | Description                                                                                                              |
| ------------------------ | :------: | :-----------: | ------------------------------------------------------------------------------------------------------------------------ |
| `INSTAGRAM_ACCESS_TOKEN` |    No    |    `null`     | Access token for an instagram account - ([link](https://www.templaza.com/blog/how-to-get-access-token-on-instagram-api)) |
| `FACEBOOK_ACCESS_TOKEN`  |   Yes    |    `null`     | Access token for an facebook account                                                                                     |

### Start Website Locally

In the project directory, just run:

```
npm start
```

### Available Commands

| `npm run ...`        | Description                                                                                         |
| -------------------- | --------------------------------------------------------------------------------------------------- |
| `npm start`          | runs local development server at [localhost:8000](http://localhost:8000)                            |
| `npm run build`      | builds production-ready site                                                                        |
| `npm run format`     | corrects coding standards                                                                           |
| `npm run serve`      | starts local server suitable for testing                                                            |
| `npm run instascrap` | fetches latest photos from instagram (you need correct `INSTAGRAM_ACCESS_TOKEN` set in `.env` file) |

### Coding Standards

Please, keep the coding standards defined by [EditorConfig](http://editorconfig.org/) and those handled with [Prettier](https://prettier.io/) - `npm run format` could be used to format the code automatically.

#### VS Code

You can install couple of [recommended extensions](.vscode/extensions.json) that may help you with the development.
