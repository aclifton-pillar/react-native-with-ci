# react-native-with-ci

## What

A repository in which we are hashing out a number of CI things for react native apps. Its history
is pretty gross and work is ongoing but there is already some useful stuff in here.

## Why

Teams on short timelines, such as those developing prototypes or demos, have found themselves
disincentivized to invest effort into CI/CD setup. There have been a lot of choices to make and a
lot of setup, and few established conventions or tooling preferences to draw from. We wanted
these teams to be able to benefit from the feedback cycle of CI and sought to reduce the friction
in setting it up.

## How

The repository contains a very basic React Native app with some testing setup, including a detox
e2e/UI test, a Gradle build for running tests, and workflows for running them in Github Actions.
Plunder this repository and adapt to your project as needed.

## Installation

Start with `npm install`, obviously. Consider using the gradle build files to install other dev
tools, or at least to see what else you might need. 

## Try it out

Treat it like any other react-native app.  Then, run Metro Bundler and the application: npm run
ios or npm run android. Click buttons and stuff.

## Run tests

`npm test` or course but check out those Gradle tasks! Try `./gradlew iosTest` and 
`./gradlew androidTest`. 

## CI with Github Actions

Working sample workflows are in `.github`.

## However

Running an android emulator for detox tests on Github Actions is still being worked on, what you
see here probably doesn't work yet.

## Also

There are some other repositories forked from this one that may be of interest:

* [aclifton-pillar/react-native-websocket-middleware-third-party](https://github.com/aclifton-pillar/react-native-websocket-middleware-third-party)
* [aclifton-pillar/react-native-websocket-middleware-scaffold](https://github.com/aclifton-pillar/react-native-websocket-middleware-scaffold)
* [hoff2-ACN/jest-vs-rtl](https://github.com/hoff2-ACN/jest-vs-rtl)
