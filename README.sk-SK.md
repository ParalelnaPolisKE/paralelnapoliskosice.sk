# Paralelná Polis Košice

[![logo](static/img/logo.svg)](https://www.paralelnapoliskosice.sk)

[English](README.md) | Slovensky

---

[![Netlify Status](https://api.netlify.com/api/v1/badges/bc3e351a-833d-4fc1-aab3-cae6ac2f8c20/deploy-status)](https://app.netlify.com/sites/paralelnapoliskosice/deploys) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com) [![tippin](https://img.shields.io/badge/%E2%9A%A1%EF%B8%8Ftippin.me-@parallelpoliske-F0918E.svg)](https://tippin.me/@parallelpoliske)

## Písanie

Blogové príspevky sa nachádzajú v zložke [`./src/pages/blog`](https://github.com/ParalelnaPolisKE/web/tree/master/src/pages/blog) a sú písane pomocou [syntaxe Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

### Pridanie/úprava príspevkov

- vytvor nový pull request s tvojimi zmenami
- pokiaľ máš právo na zápis do repozitára, môžeš sa prihlásiť do [administrácie](https://www.paralelnapoliskosice.sk/admin/) a editovať príspevky jednoducho pomocou [Netlify CMS](https://www.netlifycms.org/)

## Vývoj

### Prerekvizity

- potrebuješ mať nainštalovaný [node a npm](https://nodejs.org/en/download/) (node package manager), aby si mohol vytvoriť a spustiť stránku lokálne na tvojom počítači. Použi LTS verziu (verzia s dlhodobou podporou).
- [git](https://git-scm.com/downloads) je potrebný pre pridanie nových zmien; môžeš použiť aj [programy](https://git-scm.com/downloads/guis), ktoré ti s tým môžu pomôcť.
  - vytvor si nový SSH kľúč a [pripoj ho k tvojmu GitHub účtu](https://help.github.com/articles/adding-a-new-ssh-key-to-your-github-account/)
  - ako pracovať s git-om? Pozri si túto [jednoduchú príručku](http://rogerdudler.github.io/git-guide/)
- použi svoj obľúbený editor (pokorne odporúčame [vscode](https://code.visualstudio.com/))

### Inštalácia

V príkazovom riadku spusti tieto príkazy:

```
git clone git@github.com:ParalelnaPolisKE/paralelnapoliskosice.sk.git
cd paralelnapoliskosice.sk
npm install
```

Skopíruj súbor `.env.example` do `.env` (aj s bodkou v názve na začiatku) a nastav správne konštanty (alebo ich nechaj prázdne).

#### Premenné prostredia v `.env`

| Názov premennej         | Povinná | Default hodnota | Popis                         |
| ----------------------- | :-----: | :-------------: | ----------------------------- |
| `FACEBOOK_ACCESS_TOKEN` |   Áno   |     `null`      | Prístupový token pre Facebook |

### Lokálne spustenie stránky

V zložke projektu spusti:

```
npm start
```

### Dostupné príkazy

| `npm run ...`    | Popis                                                                            |
| ---------------- | -------------------------------------------------------------------------------- |
| `npm start`      | spúšťa lokálny vývojový server na adrese [localhost:8000](http://localhost:8000) |
| `npm run build`  | vytvára verziu vhodnú pre ostrú prevádzku                                        |
| `npm run format` | opravuje programovacie štandardy                                                 |
| `npm run serve`  | spúšťa lokálny server vhodný pre testovanie                                      |

### Programovacie štandardy

Prosím, dodržuj štandardy definované pomocou [EditorConfig](http://editorconfig.org/) a [Prettier](https://prettier.io/) - použi príkaz `npm run format` na automatické formátovanie kódu.

#### VS Code

Môžeš nainštalovať niekoľko [odporúčaných doplnkov](.vscode/extensions.json), ktoré ti môžu pri vývoji pomôcť.
