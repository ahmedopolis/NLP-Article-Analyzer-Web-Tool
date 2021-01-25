# Alfred NLP Analyzer :computer: :bar_chart: :scroll:

![Application Logo](images/NLP-web-tool-blue.svg)
![Api Logo](images/Aylien-api-brightgreen.svg)
</br>
The herein repository host the necessary assets for a NLP web tool called "Alfred NLP Analyzer". It consists of an application enabling users to conduct sentimental analysis on text found in a given URL. The data analysis process is conducted by Aylien's NLP data pipeline accessed via its api.

## Table of Content

1. [Design](#Design)
2. [Instructions](#Instructions)
3. [Examples](#Examples)
4. [Tools](#Tools)
5. [License](#License)

## Design

## Instructions

### Download repository files

To have access to the assets necessary for the project, you may download the 'zip file' directly from the herein repository. Otherwise, you can clone the repository by using Git (<https://github.com/aimogue/NLP-Article-Analyzer-Web-Tool.git>), SSH (git@github.com:aimogue/NLP-Article-Analyzer-Web-Tool.git) Github CLI (gh repo clone aimogue/NLP-Article-Analyzer-Web-Tool) or Github Desktop. For more information on to clone a repository, please use the following link: <https://docs.github.com/en/free-pro-team@latest/github/using-git/which-remote-url-should-i-use>.

### Setup environment

Once the assets are within a folder, the environment needs to be setup. To do-so, it would be worthwhile using Git commands. It is pre-installed on Mac OS and Linux Distros, but not on Windows. For more information on how to setup Git on PC, please use the following link: <https://www.computerhope.com/issues/ch001927.htm>. To use the herein project, it will be necessary to have both Node.js and npm. To download them, please use the following link: <https://www.npmjs.com/get-np>.
</br></br>

To check if Node.js is installed, run the following command in the terminal:

```bash
node -v
```

To confirm that npm is installed, run this command in the terminal:

```bash
npm -v
```

To initialize the project, use the following command:

```bash
npm init
```

### Add modules to setup server

Use the following line, to add Node.js, and Express.js.

```bash
npm i node express
```

### Conduct npm audit

Use the following line, to check for dependency vulnerabilities and potentially fix them.

```bash
npm audit fix
```

### Add more modules to setup server

Use the following line, to add 'dotenv', and 'nodemon'.

```bash
npm i --save-dev dotenv nodemon
```

### Update 'start' script in package.json

Replace the following command:

```json
"scripts": {
    "start": "node src/server/index.js",
},
```

With the following:

```json
"scripts": {
    "devStart": "nodemon src/server/server.js",
},
```

### Add testing library (Jest) for unit-testing

Use the following line, to install the 'jest' library as a development dependency. As unit testing, is not conducted in production mode.

```bash
npm i --save-dev jest
```

### Add the static module bundler, namely 'Webpack'

Install Webpack using the following command.

```bash
npm i webpack webpack-cli
```

### Add a build npm script

In package.json, add a build npm script as:

```json
"scripts": {
    "build": "webpack"
},
```

### Install 'Babel'

Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript. The following tool must be installed at the same level as your webpack js files. Use 'pwd' on the your CLI to confirm it. To install Babel, use the following command.

```bash
npm i -D @babel/core @babel/preset-env babel-loader
```

### Install 'HtmlWebPackPlugin'

Use the following command, to install the 'HtmlWebPackPlugin'.

```bash
npm i -D html-webpack-plugin
```

### Install 'CleanWebpackPlugin'

Use the following command, to install the 'CleanWebpackPlugin'.

```bash
npm i -D clean-webpack-plugin
```

### Install a style-loader

To convert the sass files to css files for the browser to process, use the following command line.

```bash
npm i -D style-loader node-sass css-loader sass-loader
```

### Install a google-fonts-webpack-plugin

To add the plugin to add google fonts via Webpack, use the following cli.

```bash
npm install google-fonts-webpack-plugin
```

## Examples

## Tools

This webpage uses the following technologies for the front-end: HTML, SASS, SASS and JavaScript (Vanilla). It also uses JavaScript on the server-side with Node.js and Express.js. The static module bundle used is Webpack.

## License

This codebase is a public domain, so feel free to use this repo for what you want.
