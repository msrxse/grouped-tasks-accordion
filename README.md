# React + TypeScript + Vite

This template provides a basic setup to get React working in Vite with HMR and some ESLint rules.

To start development server:

```
npm run dev
```

Next, open your browser and visit http://localhost:5173/. The default React project will be running on port 5173.

### Note:

    if running `antfu.vite` and `antfu.browse-lite`, vite server will start itself at port 4000.

## Tests

```
npm test:watch

```

or

```
npm test:watch <path-to-file>

```

## Tooling:

- **Vite:** Frontend build tool that serves your source files over native ES modules, with rich features and fast _Hot Module Replacement (HMR)_. _Vite_ is fast because it doesn't bundle your code at all. It leverages the native support for ESM (ECMAScript Modules) of modern browsers. It sends your file directly without being bundled
- **ESLint and Prettier:** For linting and pretty-printing JavaScript code respectively
- **Jest and @testing-library/react:** for unit testing
- **Vitest:** Modern testing framework
