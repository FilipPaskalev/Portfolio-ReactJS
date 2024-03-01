# Portfolio-ReactJS

## NPM commands

### Start
Start the application.
``` json
"scripts": {
  "start": "vite"
}
```

### Build 
Build application for production.
``` json
"scripts": {
  "build": "vite build"
}
```

### Lint
This script is used to run linting checks on code.
``` json
"scripts": {
  "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0"
}
```

### Test
This script is used to run test suite.
``` json
"scripts": {
  "test": "jest"
}
```

### Preview 
This script is used to preview built application locally.
``` json
"scripts": {
  "preview": "vite preview"
}
```

### Deploy 
This script is used to deploy application to a hosting service.
``` json
"scripts": {
  "deploy": "npm run build && <deploy-command>"
}
```

### Clean
This script is used to clean up any temporary or generated files.
``` json
"scripts": {
  "clean": "rm -rf dist"
}
```

### Format 
This script is used to format code according to a specific style guide.
``` json
"scripts": {
  "format": "prettier --write ."
}
```

### Watch 
This script is used to watch for changes in files and automatically rebuild or rerun tests.
```json
"scripts": {
  "watch": "vite --watch"
}
```

## Structure

### Project structure

- `.vscode`: Directory containing Visual Studio Code configuration files.
- `node_modules`: Directory containing the installed npm packages.
- `public`: Directory containing the public assets and static files.
- `src`: Directory containing the source code of the application.
- `.eslintrc.cjs`: ESLint configuration file.
- `.gitignore`: Git ignore file.
- `CODE_OF_CONDUCT.md`: Code of conduct file.
- `index.html`: HTML file serving as the entry point of the application.
- `jest.config.js`: Jest configuration file.
- `LICENSE`: License file.
- `package-lock.json`: NPM package lock file.
- `package.json`: NPM package configuration file.
- `README.md`: Markdown file containing the project documentation (this file).
- `SECURITY.md`: Security guidelines file.
- `vite.config.js`: Vite configuration file.

### App structure