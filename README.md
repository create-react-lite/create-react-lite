# Create React Lite

Creates a light & opinionated React project which supports TypeScript.

## Usage

Create your project via:

```sh
npx create-react-lite yourProjectNameHere
```

Navigate to your newly created project folder, then start:

```sh
npm start
```

## Features

- [x] TypeScript
- [x] CSS Modules
- [x] React-Testing-Library
- [ ] File Loader
- [ ] Webpack Setup for Prod & Development

## No Configuration needed

You do not have to setup TypeScript, Css Loaders or Babel to get going.

## Requirements

You need at least Node Version 12 installed on your development machine.

## Typescript

Your project will be setup with a loosened configuration of TypeScript. You can use all these formats in your project:

- .js
- .ts
- .jsx
- .tsx
  
## Styling

## Testing

Running Tests

```sh
npm test
```

Or

```sh
npm test --watch
```

Testing suite includes

- Jest
- Jest-TS
- React-Testing-Library
- JSDOM

You can start include your tests anywhere you want in your `src` folder.

Acceptable test file name extensions:

```sh
App.test.js
App.test.ts
App.test.jsx 
App.test.tsx (Most likely this is what you are going to need)
```

Example:

![TestingFolderStructure](./images/testingFolderStructure.png)

## File Loading
