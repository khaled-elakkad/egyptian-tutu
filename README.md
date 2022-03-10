# MyReads Project

This is a mobile AR game that gets target images and their AR override from a remote server and when the camera detects the target image, the AR override is displayed over it.

## Prerequesites

Set up the development environment for [react native](https://reactnative.dev/docs/environment-setup).

> ⚠️ NOTE: The android emulators are not supported by Viro. See [this](https://viro-community.readme.io/docs/frequently-asked-questions#does-this-work-with-ios-simulators-or-android-emulators).

## Running the Mobile App

To run and use the app:

- clone the repo with `git clone git@github.com:khaled-elakkad/egyptian-tutu.git`
- navigate into the project directory with `cd egyptian-tutu`
- install all project dependencies with `npm install`
- run on android `npx react-native run-android`

## What You're Getting

```bash
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
└── src
    ├── App.js # The root of the app. Connects the ApolloClient to the GraphQL backend and encapsulates the main Scene Navigator.
    |
    ├── components # contains the child componets of the main Scene Navigator
    |   ├── MainScene
    |   ├── PointOfInterest
```

## Backend Server

The backend is hosted on a wordpress website that has a [`GraphQL API`](http://www.localtours.fun/ar-treasure-hunt/graphql) exposed. To add images from your reality and be able to really play with app contact the author by email [`k.elakkad@gmail.com`](mailto:k.elakkad@gmail.com)

## ViroReact Starter Kit

This project was built using the [ViroReact Starter Kit](https://github.com/ViroCommunity/starter-kit).
