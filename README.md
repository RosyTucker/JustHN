# JustHN [![Build Status](https://travis-ci.org/RosyTucker/JustHN.svg?branch=master)](https://travis-ci.org/RosyTucker/JustHN)
Just HackerNews

## Setup OSX
Configure your machine to run the project

  - Ensure you have brew installed, using `which brew` in your terminal. If not install it using the instructions [here](http://brew.sh)
  - Run `brew update`
  - Install node 5.1+ either with `brew install node` or with nvm if using a node version manager
  - Install [watchman](https://facebook.github.io/watchman/docs/install.html) and [flow](http://flowtype.org) using `brew install watchman` and `brew install flow`
  - Install the [react-native-cli](https://facebook.github.io/react-native/docs/getting-started.html#content) using `npm install -g react-native-cli`
  - Install mocha globally, to run the tests using `npm install -g mocha`

## Run Dev

### iOS
Run `npm start` from the top level.
Open `ios/JustHackerNews.xcodeproj` and hit run in Xcode.


### Android
Run `react-native run-android` from the top level of the repository
