# ionic-memory-test

> A simple ionic app to test memory on a simple navigation case

## Installation

If you do not have installed *ionic* yet,
follow [*Getting Started with Ionic*](http://onicframework.com/getting-started/) instructions.

Create a blank project : `ionic start ionic-memory-test blank`

Remove the generated `www` folder.  
Add the `www` folder of this repo to your ionic project.

## Description

The app contains two pages, each of them has a list of 1000 items.  
Navigation between these two pages leads to memory growth.
Memory never seems to be garbage collected.  
Application crash on IOS devices. No crash currently observed on Android devices.

## Possible related issues

Feel free to update this list !

- [Memory leak in state change ionic#1096](https://github.com/driftyco/ionic/issues/1096)
- [Memory is leaking between page transitions ionic#1993](https://github.com/driftyco/ionic/issues/1993)
- [Memory Leak on iOS using very basic ionic application ionic#2367](https://github.com/driftyco/ionic/issues/2367)
- [AngularJS: Memory Leak with ng-repeat using custom objects (w/simple PLUNKR) angularjs#11169](https://github.com/angular/angular.js/issues/11169)
- [DOM nodes leaking ui-router#545](https://github.com/angular-ui/ui-router/issues/545)
