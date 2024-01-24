## CRETATE REACT APP USING VITE
- cd [directory name]
- npm create vite@latest
- add project name
- select a framework
- select a variant
- npm install / npm i (To install required packages or To add node modules folder in our project)
- npm run dev (to open the project)



## DEPENDENCIES IN REACT
- When your project needs code from other projects in order to do its thing, those other projects are “dependencies”; your project depends on them to run. When you install third-party packages via npm install , you're adding a dependency. Your project's package. json file includes a list of your project's dependencies.


## FILE AND FOLDER STRUCTURE IN REACT
vite-app/
|-- node_modules/
|-- public/
|   |-- favicon.ico
|   |-- index.html
|-- src/
|   |-- App.jsx
|   |-- main.jsx
|-- .gitignore
|-- package.json
|-- README.md
|-- vite.config.js



## Here's what each file and directory does:

- node_modules/: This directory contains all the npm packages required for your project.
- public/: This directory contains static assets that are not processed by Vite.
- public/index.html: This is the HTML file that will be served by Vite.
- src/: This directory contains the source code for your React application.
- src/main.jsx: This is the entry point for your React application.
- src/App.jsx: This is the main React component for your application.
- .gitignore: This file specifies the files and directories that Git should ignore.
- package.json: This file contains information about your project and its dependencies.
- vite.config.js: This is the configuration file for Vite.

