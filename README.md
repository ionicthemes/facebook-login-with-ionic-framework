# Facebook Native login with Ionic Framework

This repository is an example app of how to add Facebook Native authentication into an Ionic Framework app.

## Follow the step-by-step instructions available here: https://ionicthemes.com/learn/about/native-facebook-login-with-ionic-framework

**Why adding Facebook Authentication into your app will benefit you and your users?**

  - **Improve conversions:** Help people log into your app quickly without having to register a new user and remember another username and password.
  - **One login across every device:** Make it easy for people to log in and access their info across multiple platforms and devices.
  - **Build a trusted relationship:** Give people control over the info they share with your app.
  - **Access profile info:** like picture, gender, age, name, without having to ask for it.

## Authentication options

Authentication is a key component for your app, and there are some different approaches that you can take.

### The handcrafted way (using your own API/Backend)

If you already have an API or backend that handles user authentication, or if you are one of those who like to have strict control over the backend implementation, then this may be your option.

Mobile apps require a different authentication strategy than web apps or websites. You don’t have sessions so you have to go with the token based authentication. For my clients production apps I use [Strongloop](http://bit.ly/1d0A2Y0). Basically is a platform that enables you to easily build custom API’s for your backend needs. It comes with token based authentication and an AngularJS SDK that works smoothly in your Ionic app. (You can read more about how easy is to manage users in this post [“Managing users with StrongLoop”](https://docs.strongloop.com/display/public/LB/Managing+users))


### The BaaS way

If you don’t want to take care of your own infrastructure and backend implementation, then there are a few BaaS (Backend as aService) options.

[Firebase](http://bit.ly/1yQrm02) is a great service that will help you build your app’s backend with ease. (owned by Google). You can read more about this on this post [“Logging Users In with Firebase”](https://www.firebase.com/docs/web/guide/user-auth.html#section-login).



[Parse](http://bit.ly/1QjZyGS) is also another option which offers some of the same features as Firebase. (owned by Facebook).



### The Social way

You can chose to provide authentication using well known social networks such as Facebook, Instagram, Twitter, Google, etc. In this post we will explore how to add Facebook’s native authentication to your Ionic app.


**Each option has it’s benefits, and of course you can mix them together and have an even more complete solution and experience for your users. It’s very common to see different ways of authenticating users within an app.**

## Facebook Authentication

There are different ways to integrate Facebook authentication into your Ionic app. However, only the way covered in this post uses the native approach which uses Facebook app to perform the login instead of opening a popup requesting users to enter their credentials to login to Facebook before granting access to your app.

What does this mean? That if you chose to integrate other libraries (some of them mentioned below), your users will end up having an awful user experience as they will be prompted to enter their Facebook username and password each time your app requests authorization from Facebook.
Using the native approach we cover in this post, if users have the Facebook app installed on their devices, the authorization flow will be unobtrusive without requiring users to perform unnecessary extra steps.

This comparison illustrates the difference mentioned above:

![](https://dl.dropboxusercontent.com/u/30675090/ionic_themes/facebook-login/facebook-js-login.png)
![](https://dl.dropboxusercontent.com/u/30675090/ionic_themes/facebook-login/facebook-login.png)


### Facebook authentication using Javascript approach

**There are some different ways you can implement the Facebook javascript login.**

- **CordovaOauth** is an AngularJS Apache Cordova Oauth library. The purpose of this library is to quickly and easily obtain an access token from various web services to use their APIs. Read more on the official [Cordova Oauth documentation](https://github.com/nraboy/ng-cordova-oauth/blob/master/README.md).

- **OpenFB** is a micro-library that lets you integrate your JavaScript applications with Facebook. It works for both browser-based and Cordova/PhoneGap apps. Read more on the official [OpenFB documentation](https://github.com/ccoenraets/OpenFB).

- **Facebook SDK for JavaScript with AngularJS.** You can interact with the facebook javascript sdk using angular. This is useful both for websites and Ionic apps as Ionic is built with AngularJS. Check [“Facebook Javascript SDK integration with AngularJS”](https://developers.facebook.com/docs/javascript/howto/angularjs) to get more information.


### How it will look like:

**iOS:**

![](https://dl.dropboxusercontent.com/u/30675090/ionic_themes/facebook-login/ios-welcome.jpg)
![](https://dl.dropboxusercontent.com/u/30675090/ionic_themes/facebook-login/ios-facebook1.jpg)
![](https://dl.dropboxusercontent.com/u/30675090/ionic_themes/facebook-login/ios-facebook2.jpg)

**Android:**

![](https://dl.dropboxusercontent.com/u/30675090/ionic_themes/facebook-login/android-welcome.png)
![](https://dl.dropboxusercontent.com/u/30675090/ionic_themes/facebook-login/android-facebook1.png)
![](https://dl.dropboxusercontent.com/u/30675090/ionic_themes/facebook-login/android-facebook2.png)


## To get this done, follow the step-by-step instructions available here: https://ionicthemes.com/learn/about/native-facebook-login-with-ionic-framework
