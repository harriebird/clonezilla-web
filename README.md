# clonezilla-web

Website for Clonezilla using [VitePress](https://vitepress.dev/).

## Setup

### Development
1. Install pnpm, follow the [installation guide](https://pnpm.io/installation).
2. Clone this repository using git.
3. Inside the project directory, run the command `pnpm install` to install the dependencies.
4. Run the command `pnpm dev` to run the VitePress development server.

### Commands
* `pnpm dev` runs the VitePress development server.
* `pnpm build` builds the docs files inside the `src/` directory.
* `pnpm preview` runs a web server that will serve the build output files. Run the
`pnpm build` command first before using this command.

### Requirements
* Node.js v22.14.0 or higher
* pnpm v10.10.0 or higher
* Packages specified in the `package.json` that are installed depending on the environment.

## Project Structure
* `.vitepress/` contains the theme and the project-wide VitePress configuration.
  * `lang/` contains language-specific configurations.
  * `config.mts` a file that contains the global configuration.
* `src/` contains the markdown files, images used to generate the pages.
  * `public/` contains assets that will be used for the build version of the project.
