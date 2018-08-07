<p align="center">
  <img src="src/images/logo.png">
</p>
<h1 align="center">Paralelná Polis Košice</h1>

> Website of Paralelná Polis Košice.

## Writing a post

Blog posts are located in [`./src/pages/blog`](https://github.com/ParalelnaPolisKE/web/tree/master/src/pages/blog) directory and are written in [Markdown syntax](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

### To add/edit a post:

* create a new pull request containing your updates
* if you have write access to the repository you can log in to [admin](https://paralelnapoliske.netlify.com/admin/) and edit posts comfortably trough [Netlify CMS](https://www.netlifycms.org/)

## Development

### Prerequisities

- you need [node with npm (node package manager)](https://nodejs.org/en/download/) installed to be able to build and run website locally on you computer. Let's stick with LTS (Long Term Support) version.
- [git](https://git-scm.com/downloads) is needed to commit new changes; you can find also some [GUI clients](https://git-scm.com/downloads/guis) that may help you with that.
  - create a new SSH key and [associate it with your GitHub account](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/)
  - how to work with git? Check [the simple guide - no deep shit!](http://rogerdudler.github.io/git-guide/)
- work with your favourite text editor (humbly recommending [vscode](https://code.visualstudio.com/))

### Installation

In the command line (Terminal on Linux/Mac, Command Prompt on Windows) run:

```
git clone git@github.com:ParalelnaPolisKE/web.git
cd web
npm install
```

Copy `.env.example` file into `.env` (with the dot at the beginning in the name) and set correct constants inside (this may _not be needed_ in the future).

### Start Website Locally

In the project directory, just run:

```
npm start
```

### Available Commands

* `npm start` - runs local development server at [localhost:8000](http://localhost:8000)
* `npm run build` - builds production-ready site
* `npm run format` - corrects coding standards
* `npm run serve` - starts local HTML server for testing
* `npm run instascrap` - fetches latest photos from instagram (you need correct `INSTAGRAM_ACCESS_TOKEN` set in `.env` file)

### Coding Standards

Please, keep the coding standards defined by [EditorConfig](http://editorconfig.org/) and those handled with [Prettier](https://prettier.io/) - `npm run format` could be used to format the code automatically.

#### VS Code

You can install couple of [recommended extensions](.vscode/extensions.json) that may help you with the development.
