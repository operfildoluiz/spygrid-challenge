# spygrid-challenge

[![screencapture-localhost-3000-2023-02-11-22-15-59.png](https://i.postimg.cc/XJ6Q5s0M/screencapture-localhost-3000-2023-02-11-22-15-59.png)](https://postimg.cc/PLKWszxK)

## Get started

Via CodeSandbox

- Open this [link](https://0kx68y-3000.preview.csb.app/) to navigate the project
- Open this [link](https://codesandbox.io/p/github/operfildoluiz/spygrid-challenge/main) to see the codebase

Via local

- Clone this repo in your local environment
- Run the commands below

```
yarn
yarn start
```

- Open `localhost:3000` in your browser to see the project live

## About the challenge

The goal is to create a SPA to present Spy Agent's information, as such their name, location, personal info and codename. It should look techy, futuristic, etc.

### UI

For the interface, TailwindCSS as configured as the library, due it's simplicity to get things started fast. The homepage is a grid-like component that wraps the agent info and a map with their last location.

The file structure for the UI it's quite simple

```
public/ -> assets and html
src/
- components/ -> UI components like AgentInfo and the Map
- helpers/ -> Reusable functions inside the logic, like date formatters
    - __tests__ -> Jest tests
- hooks/ -> Custom hooks
    - __tests__ -> Jest tests
- pages/ -> Screen components
- types/ -> type definition files
```

### Data

In order to allow the user to fetch agents from the API, `useAgent` hook provides a elegant way to fetch the randomuser endpoint. It uses `useCallback` native hook to deliver both the fetcher and the status of the call to be used by the homepage.

### Typing

It's a Typescript project. Agent info is mapped along it's coordinates. All files are typed.

### Testing

The project contains tests for the helpers and hooks, mostly for successful and common failing scenarios. With more time, it would be interesting to implement E2E testing and UI unit testing.

## Issues and approaches

- CodeSandbox Beta Editor uses a React environment that dpends on a `react-scripts` version that adds [a strange iframe that prevents all user interactions](https://stackoverflow.com/questions/69051008/react-injecting-iframe-with-max-z-index-on-reload-after-changes-development). Fix: first connect CodeSandbox SSH with local VS Code to be able to clean the node_modules and upgrade `react-scripts` package.
- CRA isn't quite compatible with CodeSandbox testing environment, since it often fails for the testing-library functions. You may want to run tests locally.
