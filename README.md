### You can check it out here!

Website: https://hybridx.github.io/angular7/

### Development
Here is the folder structure

```html
.
├── angular.json
├── browserslist
├── e2e
│   ├── protractor.conf.js
│   ├── src
│   │   ├── app.e2e-spec.ts
│   │   └── app.po.ts
│   └── tsconfig.json
├── karma.conf.js
├── package.json
├── README.md
├── src
│   ├── app
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── github-details
│   │   │   ├── github-details.component.css
│   │   │   ├── github-details.component.html
│   │   │   ├── github-details.component.spec.ts
│   │   │   └── github-details.component.ts
│   │   ├── header
│   │   │   ├── header.component.html
│   │   │   └── header.component.ts
│   │   ├── recipes
│   │   │   ├── recipe.model.ts
│   │   │   ├── recipes.component.css
│   │   │   ├── recipes.component.html
│   │   │   ├── recipes.component.ts
│   │   │   ├── recipes-detail
│   │   │   │   ├── recipes-detail.component.css
│   │   │   │   ├── recipes-detail.component.html
│   │   │   │   └── recipes-detail.component.ts
│   │   │   └── recipes-list
│   │   │       ├── recipes-item
│   │   │       │   ├── recipes-item.component.css
│   │   │       │   ├── recipes-item.component.html
│   │   │       │   └── recipes-item.component.ts
│   │   │       ├── recipes-list.component.css
│   │   │       ├── recipes-list.component.html
│   │   │       └── recipes-list.component.ts
│   │   ├── shared
│   │   │   └── ingredient.model.ts
│   │   └── shopping-list
│   │       ├── shopping-edit
│   │       │   ├── shopping-edit.component.css
│   │       │   ├── shopping-edit.component.html
│   │       │   └── shopping-edit.component.ts
│   │       ├── shopping-list.component.css
│   │       ├── shopping-list.component.html
│   │       └── shopping-list.component.ts
│   ├── assets
│   ├── environments
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.css
│   └── test.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.spec.json
└── tslint.json
```



## Development server

- Clone repository.

- Run `npm i` and then `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
