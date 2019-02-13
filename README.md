# picter/eslint-config-picter

[![npm version](https://badge.fury.io/js/eslint-config-picter.svg)](http://badge.fury.io/js/eslint-config-picter)

This package provides Picter's .eslintrc as an extensible shared config.

## Usage

Our default export contains all of our ESLint rules, including ECMAScript 6+, React and Prettier.
It requires;

- `eslint`;
- `eslint-plugin-import`;
- `eslint-plugin-react`;
- `eslint-plugin-jsx-a11y`;
- `eslint-plugin-prettier`;
- `eslint-plugin-react-hooks`;
- `prettier`.

1. Install the correct versions of each package, which are listed by the command:

```sh
npm info "eslint-config-picter@latest" peerDependencies
```

If using **npm 5+**, use this shortcut

```sh
npx install-peerdeps --dev eslint-config-picter
```

If using **yarn**, you can also use the shortcut described above if you have npm 5+ installed on your machine, as the command will detect that you are using yarn and will act accordingly.
Otherwise, run `npm info "eslint-config-picter@latest" peerDependencies` to list the peer dependencies and versions, then run `yarn add --dev <dependency>@<version>` for each listed peer dependency.

If using **npm < 5**, Linux/OSX users can run

```sh
(
  export PKG=eslint-config-picter;
  npm info "$PKG@latest" peerDependencies --json | command sed s/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)
```

Which produces and runs a command like:

```sh
npm install --save-dev eslint-config-picter eslint@^#.#.# eslint-plugin-jsx-a11y@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-react@^#.#.#
```

If using **npm < 5**, Windows users can either install all the peer dependencies manually, or use the [install-peerdeps](https://github.com/nathanhleung/install-peerdeps) cli tool.

```sh
npm install -g install-peerdeps
install-peerdeps --dev eslint-config-picter
```

The cli will produce and run a command like:

```sh
npm install --save-dev eslint-config-picter eslint@^#.#.# eslint-plugin-jsx-a11y@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-react@^#.#.#
```

2. Add `"extends": "picter"` to your .eslintrc
