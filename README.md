# React Native Continuous Integration Automation

Teams on short timelines, such as those developing prototypes or demos, 
have found themselves disincentivized to invest effort into CI/CD setup. 
There are too many choices and a lot of setup, and few 
established conventions or tooling preferences to draw from. We want
these teams to be able to benefit from continuous integration.  At the 
same time, we want to eliminate friction in setting it up.

In this repository, we provide build automation and configuration for
React Native CI using Git Actions/Workflows.

## Installation
(Note: If you only want the build automation and configuration for CI, you
can copy the `build.gradle` file and `.github` directory to the top of your
React Native project.)

Otherwise, if you want to use this project as a scaffold, follow the 
installation instructions.

* Install XCode and Android Studio
* Install homebrew (https://brew.sh/)
* Install nodejs and possibly nvm (https://nodejs.org/en/download/package-manager/#macos)
* `./gradlew npmInstall`
* `./gradlew installApplesimutils`

## Running the Application
* `react-native run-android` and `react-native run-ios`

## Running tests
* `./gradlew unitTest`
* `./gradlew iosTest` (run e2e tests iOS only)
* `./gradlew androidTest` (run e2e tests Android only)

## CI with Github Actions

GitHub Actions workflows (and possibly actions) are in `/.github`. They run
the `iosCI` and `androidCI` Gradle tasks.

At the present time, `android.yml` will fail due to difficulties running
Android emulator on Github's VMs. We're working on it.


