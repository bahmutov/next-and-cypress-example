# next.js and Cypress example
> [Next.js](https://nextjs.org/) example instrumented for code coverage from [Cypress tests](https://www.cypress.io/)

## Install and run

```sh
npm install
npm run e2e
```

This starts the application at `localhost:3000` and opens Cypress test runner.

![npm run e2e](images/e2e.png)

Click on the spec file to run the end-to-end tests.

![all tests](images/tests.png)

## Coverage

The tests are instrumented following the instructions in [Cypress code coverage guide](https://on.cypress.io/code-coverage). In particular, the front-end is instrumented using [.babelrc](.babelrc) file like

```json
{
  "presets": ["next/babel"],
  "plugins": ["istanbul"]
}
```

When you run tests, the code coverage report is saved in `coverage` folder. There are reports in several formats, but open the HTML one for human-readable report.

```shell
$ open coverage/lcov-report/index.html
```

![Code coverage report](images/report.png)
