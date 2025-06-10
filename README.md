# clonezilla-web

Website for Clonezilla using [VitePress](https://vitepress.dev/).

## Setup

### Development

1. Install pnpm, follow the [installation guide](https://pnpm.io/installation) according to your platform.
2. Clone this repository using git.
3. Inside the project directory, run the command `pnpm install` to install the dependencies.
4. Run the command `pnpm dev` to run the VitePress development server.

### Commands

- `pnpm dev` runs the VitePress development server.
- `pnpm build` builds the docs files inside the `src/` directory. The output of this command can be at the
  `.vitepress/dist/` directory.
- `pnpm preview` runs a web server that will serve the build output files. Run the `pnpm build`
  command first before using this command.

### Requirements

- Node.js v22.14.0 or higher
- pnpm v10.10.0 or higher
- Packages specified in the `package.json` that are installed depending on the environment.

## Project Structure

- `.vitepress/` contains the theme and the project-wide VitePress configuration.
  - `lang/` contains language-specific configurations. Configuration files are named using their language code.
  - `config.mts` a file that contains the global configuration.
- `src/` contains the Markdown files, images used to generate the pages.
  - `public/` contains assets that will be used for the build version of the project.

## Notes

### Ignore ESLint on some false-positive errors

ESLint helps quickly pinpoint problems in the code. This project currently uses ESLint for CSS, TS/JS, and
Markdown files in the project. By default, ESLint is activated as a pre-commit task with the help of husky. ESLint is
undeniably helpful to have, but there are some instances that it should be disabled for some lines of code that are
detected as false-positives.

#### GitHub alerts

The use of [GitHub style alerts](https://vitepress.dev/guide/markdown#github-flavored-alerts) gives emphasis to
information, tips, warnings, etc. Currently, ESLint flags Markdown GitHub alert code as an error relating to
`markdown/no-missing-label-refs` rule. You can disable ESLint in the next line using the code below:

```text
<!-- eslint-disable-next-line markdown/no-missing-label-refs -- GitHub alerts -->
```

For example:

```markdown
<!-- eslint-disable-next-line markdown/no-missing-label-refs -- GitHub alerts -->

> [!INFO] Title here
> Content here
```

The example above disables the `> [!INFO]` GitHub alert to be detected as an error.
