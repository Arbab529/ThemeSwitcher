# Theme Switcher

Switch theme between dark and light mode using context api.

`node version 20.10.0`

Make sure to add `darkMode: "class"` in `tailwind.config.js` file.

You can set the value to `system` as well in order to user system theme mode.

## How to deploy on github pages.

- Install package

```
yarn add gh-pages
```

- In `package.json` add new Key value pair. Change your github account and repo name

```
"homepage": "https://arbab529.github.io/ThemeSwitcher",
```

- Add scripts in `package.json`

```
"predeploy": "yarn build"
"deploy": "gh-pages -d dist"
```

- Make changes to `vite.config.js`. Add your `/repositoryName/`

```
base: "/ThemeSwitcher/",
```

- Run command

```
yarn build
```

```
yarn deploy
```
