# UI Experiments

Personal collection of trying out small things. [Demo](https://jzillmann.github.io/ui-experiments/)

## Build Commands

-   `npm init` downloads all required dependencies
-   `npm start` runs the app in the development mode, open http://localhost:8080
-   `npm run build` builds a static copy of the app under `build/`
-   `npm run deploy` builds a static copy of your app to `docs/`

## Project Setup History

-   `npx create-snowpack-app ui-experiments --template snowpack-svelte-ts-tw`
    -   Adaptions:
        -   PNPM: —use-pnpm
        -   Official template: @snowpack/app-template-svelte-typescript
-   Copy `.prettierrc` and `.prettierignore` to project
-   Fix deployment to github pages:
    -   Add empty `docs/.nojekyll` to fix references to `__snowpack__` and `_dist_`
    -   Make links in index.html relative
    -   [Fix other references by setting baseUrl and webModulesUrl](https://github.com/jzillmann/ui-experiments/commit/c8a05daf8f7b42264e999df8a4d1a6d42b1a58cc)

See:

-   https://codechips.me/snowpack-for-svelte-revisited/
