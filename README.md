# AppEldronenlasopaWeb

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.0.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## GitHub Pages

Every push to `main` runs [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) and publishes the production build through GitHub Pages.

The `postbuild` script generates `404.html` from Angular's compiled `index.html`, so refreshing routes such as `/proyectos`, `/login` or `/panel-cliente` keeps the SPA working. It also creates `.nojekyll` and adds a build identifier.

For the first deployment, set the repository's Pages source to **GitHub Actions** in **Settings → Pages**. Production assets use Angular's `outputHashing: all`, so each build receives new bundle filenames and does not depend on manually clearing the browser cache.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
