# Lodgify Grouped Tasks

Take home exercise for Lodgify. A widget to shows the current progress of the profile creation of an user. Basically an accordion which content are tasks (checkboxes) and checking on those will add to the total percentage displayed on annexed progressBar.

To start development server:

```
npm run dev
```

Next, open your browser and visit http://localhost:5173/. The default React project will be running on port 5173.

### Note:

    if running `antfu.vite` , vite server will start itself at port 4000.

## Tests

```
npm test:watch

```

or

```
npm test:watch <path-to-file>

```

# Notes

## General architecture and scaffolding

- Initial scaffolding is a repo of mine that I use for very small personal projects. [here](https://github.com/msrxse/default-scaffold-basic). Removed Tailwind to showcase CSS with CS-modules.
- Very simple just all starts on App.tsx and the components folder have 2 components: Accordion and ProgressBar. Other important file are hook folder with, hooks to retrieve data and to calculate progressBar output from fetched data and user actions.

## About state

- In term os state there are 2 approaches i could take and I did settle in one, pregardless of performance and in a team setting this could have been something to set to discuss.
  1- One approach could have been, to normalize all feetched data from API to also include the normalized sum of all values, and the specific normalize value of a task. And then result data shape saved to local state, user actions would only mean to retrieve the normalized value of the task from the state itself, then to total normalized also from the store. finalizing with makig sure you update the original stored data object itself.
  2- Second approach, and the one taken here, is: Instead save to local state fetched data as is. Then, we run actions to calculate initial normalized needed values. Then, as the user click tasks, call to update that state, we also need here to update the initial saved data.
  None is better than the other and a discussion could have been done to choose one approach over the other. Most probably reviewing performance and rerenders will help decide whats best.

## About accessibility

-
-
-

## About testing

- I have not made many efforts to have tests in this repo because of time. However I have many examples of how to test different types of components under jest and react-testing-library. For example:
- [Example tests on queries and getQueryData functions from react-query](https://github.com/msrxse/oneport-rates-ui/blob/main/src/hooks/rates.ts)
- [Example on tests that use Providers](https://github.com/msrxse/oneport-rates-ui/blob/main/src/hooks/rates.ts)
- [Example tests on components that themselves use hooks](https://github.com/msrxse/oneport-rates-ui/blob/main/src/components/rates/tests/RatesComponent.test.tsx)

## whats missing

-
-
-

# Tooling:

- **Vite:** Frontend build tool that serves your source files over native ES modules, with rich features and fast _Hot Module Replacement (HMR)_. _Vite_ is fast because it doesn't bundle your code at all. It leverages the native support for ESM (ECMAScript Modules) of modern browsers. It sends your file directly without being bundled
- **ESLint and Prettier:** For linting and pretty-printing JavaScript code respectively
- **Jest and @testing-library/react:** for unit testing
- **Vitest:** Modern testing framework
