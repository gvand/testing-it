# Testing it

This is the repository for playing around with web testing
Please follow the instructions below to set up the development environment.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/gvand/testing-it?file=src%2Fcomponents%2FCounter.test.tsx)

## Dependencies

### Node.js
For the local development setup you need to have the [Node.js](https://nodejs.org/en/) JavaScript runtime installed on your system.

__To use the same version as the team, please install Node.js via the [node version manager](https://github.com/nvm-sh/nvm) (nvm).__

Install the node version specified in the [.nvmrc](.nvmrc)
```bash
nvm install
```

Use the node version specified in the [.nvmrc](.nvmrc)
```bash
nvm use
```

Run the following to check your node Version.
```bash
node -v
```

### Node Package Manager

We use [npm](https://www.npmjs.com/package/npm#node-version-managers) as our package manager (npm comes bundled with node).

For local development you need to install the dependencies with the following command:
- `npm install` - install all dependencies

## Development

We use the following frameworks and tools for development:
- [Vite](https://vitejs.dev/) as our build tool
- [TypeScript](https://www.typescriptlang.org/) as our programming language
- [React](https://reactjs.org/) as our UI view library
- [Tailwind CSS](https://tailwindcss.com/) as our CSS framework
- [LinguiJS](https://lingui.js.org/) as our internationalization framework

Following commands are available for development:
- `npm run dev` - run the development server
- `npm run messages:extract` - extract messages for translation

## Testing

We use the following frameworks and tools for testing:
- [vitest](https://vitest.dev/) for unit and component tests
- [playwright](https://playwright.dev/) for end-to-end tests
- [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/) for react components
- [msw](https://mswjs.io/) for mocking requests

### Unit and Component Tests

You can find the unit and component tests in the [src](src) folder.
The tests are located in the same folder as the component they are testing.
The naming convention for the tests is `*.test.[ts|tsx]`.

The rendering of the React components is done with the [react-testing-library](https://testing-library.com/docs/react-testing-library/intro/).
We provide a custom render function that wraps every component with a theme and language provider.
The custom render function can be found in [test-utils.tsx](src/test/test-utils.tsx).

Following commands are available for running the tests:
- `npm test` - run all tests in watch mode
- `npm run test:coverage` - run all tests and generate a coverage report
- `npm run test:ui` - run all tests in watch mode with the vitest UI open
