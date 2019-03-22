# RegistrationStepper - few words about the project
The task is hosted on StackBlitz from my public GitHub Repository: https://github.com/nanazia/registration-stepper 
I was coding this task using Visual Studio Code for convinience aspects, then uploading my changes to GitHub Repository, as Plnkr does not allow importing GitHub Repos, I decided to use Stack https://stackblitz.com/ which is really awesome, and can display any public GitHub Repository. I hope it won't be an issue for you.  

## what has been done
* Form is done using Reactive Forms in Angular.
* There is a sample validation for form fields and one custom Validator to check if the confirmed password is the same.
* For mock.json file I created a service - as I guessed that normally this data would come from some kind of API.  
* I added a small preview of uploaded image.
* Steps are driven by "current" variable

## what could be impoved: 
* Prefilling of fields with values from localstorage if an attempt to sign in already existed.  
* Cropping feature for images bigger then 512x512 pixels.  
* More complex validation of email field and password fields.  
* More responsive styling with convinient mobile view.  
* Adding some smooth animation to make it more attractive.  
* If the application had more states that would need to be passed from component to component if would be profitable to add a Store for easy access.  
* Font Proxima-Nova uploaded to the repository ( I did not get it, and it is a premium font, so I just took an url to font-face from jamf website, as per what you may see some CORS errors in the console :) )
* I could spend more time on styling


# Angular CLI Default Information:

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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
