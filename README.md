# Websearch

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
# Web-Search-Project-Angular


Method One

User types stuff into the text input
User hits the 'enter' key to meager a search
We look at the text input and pull the current value out
We send that current value back to the App component

Method Two

User types stuff into the text input
‘With each keypress, we run an event handler and store the updated text.
User hits the 'enter' key to trigger asearch
We take our stored property send it back to the App component

API

https://en.wikipedia.org/w/api.php?
action=query&
format=json&
list=search&
utf8=1&
srsearch=space

About Services

Used to fetch/store/update any kind of data in our app
Almost always where we are going to put network requests
Data flows from a service to a component
Services are implemented as classes
Angular will automatically create a single instance of each service for us


 

Dependency Injection

Components, services, and other things in Angular 'ask' for dependencies, rather than creating them directly
Components need others things to woin cuirectly. Our components could create an
instance of those things themselves. Instead, we create them separately and pass them in to the constructor

The 'automatic' nature of DI is not strictly required - we could do this all manually by hand
The goal is to make testing easier
Theoretically makes code reuse and code changes easier, but / personally have not seen that happen a lot


Setting Up Input Binding

(Communicating from a parent to child component)

1 In the parent component template, find where we create the child component
Decide on the property name that we want to use to communicate from the
parent to the child
3 Add a new binding to the child component, specifying the data we want to pass down
4 In the child component's class file, add an input property. This tells the
component to expect the parent to provide the value for this property
5 In the child component's template file, reference that input property




Cross-Site Scripting (XSS) Attacks
Allows malicious users to run JS code on other users' browsers
This bad JS code can be used to steal credentials, make requests, etc
Angular has you covered - it will automatically escape HTML