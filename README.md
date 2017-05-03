# Installation Guide

## Set up the Development Environment

### Prerequisites

Install Hombrew (macOS) ***Optional**

* Use it to install Ruby
* Use it to install GIT

Install Node Version Manager ***Required**

* Use it to install Nodejs and NPM

Install Sass via a command line tool such as Terminal or iTerm2. ***Required**

### Set up the Project Folder Workflow

1.Navigate to the root of the project folder using a command line tool such as Terminal or iTerm2.

2.Use NPM to initialise the folder creating a package.json file. ***A package.json file is already included in this build but you can edit it to suit your project**

***Run the command***

```bash
npm init
```

3.Locally install the JavaScript linter ESLint into the project folder and use the airbnb styleguide.

***Run the command***

```bash
npm install eslint --save-dev
```

```bash
./node_modules/.bin/eslint --init
```

4.Install webpack and its local server.

***Run the command***

```bash
npm install webpack –-save-dev
```

```bash
npm install webpack-dev-server –-save-dev
```

5.Install these sass, css, image, JavaScript ES6 loaders and plugins and save them as developer dependencies using **–-save-dev** as before.

sass-loader

node-sass

css-loader

extract-text-webpack-plugin
babel-core

babel-loader

babel-preset-es2015

html-loader

html-webpack-plugin

file-loader

clean-webpack-plugin

***Run the command***

```bash
npm install sass-loader node-sass css-loader extract-text-webpack-plugin babel-core babel-loader babel-preset-es2015 html-loader html-webpack-plugin file-loader clean-webpack-plugin --save-dev
```

*Its possible to install multiple loaders and plugins at the same time.*

6.Use these commands for testing and production builds.

***Run the command***

```bash
npm run build
```

This is the production version with the local webpack testing server. The entry is the file location to the starting point main file and the output is the combined file with all the code.

***Run the command***

```bash
npm run build:prod
```

This is the production version minified and for deployment on the web etc...

## Version Control

Use GIT for deployment to Github
