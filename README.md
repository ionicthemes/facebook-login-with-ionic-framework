# Facebook Native login with Ionic Framework

This repository is an example app of how to add Facebook Native authentication into an Ionic Framework app.

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

### Using Facebook Native integration with Ionic

We have already covered all the alternatives, now let’s focus on the one I believe is the best for your projects.

The way it works for hybrid apps to use native api’s and sdk’s is simple, you need a piece (typically a PhoneGap/Cordova plugin) that connects native api’s and sdk’s with the javascript environment where the hybrid apps run. In this case we are going to use a great cordova plugin to interact with the native facebook sdk.


**Apache Cordova Facebook Plugin**

The Facebook plugin for Apache Cordova allows you to use the same JavaScript code in your Cordova application as you would use in your web application. However, unlike in the browser, the Cordova application will use the native Facebook app to perform Single Sign On for the user. If this is not possible (the user doesn’t have Facebook app installed), then the sign on will degrade gracefully using the standard dialog based authentication.
You can find more information in the official [Apache Cordova Facebook Plugin documentation](https://github.com/Wizcorp/phonegap-facebook-plugin).

Having said that, let’s take a look at the basic requirements for this tutorial.

**Requirements:**
- You need an Ionic app where you will integrate this login. You can either use a blank app, or an existing one. **Ad time!**: If you are looking for a beautiful starter app with login UI/UX you must have a look at our beautiful mobile themes, templates & components.
- Facebook api 2.4
    - This tutorial was made using FB API v2.4 but you may be able to make it work with 2.3 and 2.2.
- Register your Facebook app with Facebook and have an APP_ID.
Don't panic, we will help you with this.


### How it will look like:

**iOS:**

![](https://dl.dropboxusercontent.com/u/30675090/ionic_themes/facebook-login/ios-welcome.jpg)
![](https://dl.dropboxusercontent.com/u/30675090/ionic_themes/facebook-login/ios-facebook1.jpg)
![](https://dl.dropboxusercontent.com/u/30675090/ionic_themes/facebook-login/ios-facebook2.jpg)

**Android:**

![](https://dl.dropboxusercontent.com/u/30675090/ionic_themes/facebook-login/android-welcome.png)
![](https://dl.dropboxusercontent.com/u/30675090/ionic_themes/facebook-login/android-facebook1.png)
![](https://dl.dropboxusercontent.com/u/30675090/ionic_themes/facebook-login/android-facebook2.png)


## Step 1: Register your Facebook app

In this section I will help you configuring your Facebook app.

1. Go to your facebook app dashboard [https://developers.facebook.com/apps](https://developers.facebook.com/apps)
2. Click the “settings” option on the left menu

### For Browser

1. Add platform Website
2. Set your site and mobile site URLS
![](https://dl.dropboxusercontent.com/u/30675090/ionic_themes/facebook-login/app-step1.png)

### For iOS

1. Add platform iOS
2. Set your bundle id. You can find your id in your config.xml file on the root of your project under the tag “widget”.
3. Check Single sign on
![](https://dl.dropboxusercontent.com/u/30675090/ionic_themes/facebook-login/app-step2.png)

### For Android

1. Add platform android
2. Set your package name. You can find your name in your ```AndroidManifest.xml``` file.
3. Check Single sign on
4. Set the class name
5. Generate your own key hash. You can see this web to learn how to do it: [https://developers.facebook.com/docs/android/getting-started](https://developers.facebook.com/docs/android/getting-started)
![](https://dl.dropboxusercontent.com/u/30675090/ionic_themes/facebook-login/app-step3.png)


## Step 2: Install required cordova plugins to interact with Facebook native SDK

After you have created you Facebook app and have an ```APP_ID``` it’s time to install the plugin into your app. Follow these steps to get this DONE:

1. Open a terminal window and clone this repository on your computer:  
```
$ git clone https://github.com/Wizcorp/phonegap-facebook-plugin.git
```
2. Using your terminal window, go to your Ionic app folder
3. If you want to build your app for iOS execute: ```ionic platform add ios```
4. If you want to build your app for android execute: ```ionic platform add android```
5. Execute the following command on the terminal changing the variables with your own values:
    1. The path you cloned the plugin to earlier
    2. Replace ```APP_ID``` and ```APP_NAME``` variables with your Facebook app values
```
$ cordova -d plugin add /path_to_cloned/phonegap-facebook-plugin --variable APP_ID="123456789"--variable APP_NAME="myApplication"
```

**What we have done so far:**
- An Ionic app (existing or new one)
- A facebook app with the proper configurations
- Facebook Plugin installed into your Ionic app

## Step 3: Adding Login/Logout functionality

Now we will go straight to the code so open your Ionic app with your preferred code editor.Personally I use and recommend [atom](https://atom.io/).

### Login

The best way to show you how to add Login functionality is with a real example of the code, here you can see an AngularJS controller that handles the facebook login for your app.

```javascript
.controller('WelcomeCtrl', function($scope, $state, $q, UserService, $ionicLoading) {

  //This is the success callback from the login method
  var fbLoginSuccess = function(response) {
    if (!response.authResponse){
      fbLoginError("Cannot find the authResponse");
      return;
    }

    var authResponse = response.authResponse;

    getFacebookProfileInfo(authResponse)
    .then(function(profileInfo) {
      //for the purpose of this example I will store user data on local storage
      UserService.setUser({
        authResponse: authResponse,
				userID: profileInfo.id,
				name: profileInfo.name,
				email: profileInfo.email,
        picture : "http://graph.facebook.com/" + authResponse.userID + "/picture?type=large"
      });
      $ionicLoading.hide();
      $state.go('app.home');
    }, function(fail){
      //fail get profile info
      console.log('profile info fail', fail);
    });
  };

  //This is the fail callback from the login method
  var fbLoginError = function(error){
    console.log('fbLoginError', error);
    $ionicLoading.hide();
  };

  //this method is to get the user profile info from the facebook api
  var getFacebookProfileInfo = function (authResponse) {
    var info = $q.defer();

    facebookConnectPlugin.api('/me?fields=email,name&access_token=' + authResponse.accessToken, null,
      function (response) {
				console.log(response);
        info.resolve(response);
      },
      function (response) {
				console.log(response);
        info.reject(response);
      }
    );
    return info.promise;
  };

  //This method is executed when the user press the "Login with facebook" button
  $scope.facebookSignIn = function() {

    facebookConnectPlugin.getLoginStatus(function(success){
        if(success.status === 'connected'){
            // the user is logged in and has authenticated your app, and response.authResponse supplies
            // the user's ID, a valid access token, a signed request, and the time the access token
            // and signed request each expire
            console.log('getLoginStatus', success.status);

    		//check if we have our user saved
    		var user = UserService.getUser('facebook');

    		if(!user.userID)
    		{
				getFacebookProfileInfo(success.authResponse)
				.then(function(profileInfo) {
					//for the purpose of this example I will store user data on local storage
					UserService.setUser({
						authResponse: success.authResponse,
						userID: profileInfo.id,
						name: profileInfo.name,
						email: profileInfo.email,
						picture : "http://graph.facebook.com/" + success.authResponse.userID + "/picture?type=large"
					});

					$state.go('app.home');
				}, function(fail){
					//fail get profile info
					console.log('profile info fail', fail);
				});
			}else{
				$state.go('app.home');
			}
        } else {
            //if (success.status === 'not_authorized') the user is logged in to Facebook, but has not authenticated your app
            //else The person is not logged into Facebook, so we're not sure if they are logged into this app or not.
            console.log('getLoginStatus', success.status);
		    $ionicLoading.show({
                template: 'Logging in...'
            });
            //ask the permissions you need. You can learn more about FB permissions here: https://developers.facebook.com/docs/facebook-login/permissions/v2.4
            facebookConnectPlugin.login(['email', 'public_profile'], fbLoginSuccess, fbLoginError);
        }
    });
  };
})
```

Then in your html you should add a “Login with Facebook” button
```javascript
   <a ng-controller="FacebookLoginCtrl" class="facebook-sign-in button button-block" ng-click="facebookSignIn()">Login with Facebook
   </a>
```

### Logout

The following controller contains all the necessary code for the facebook sign out:


```javascript
.controller('HomeCtrl', function($scope, UserService, $ionicActionSheet, $state, $ionicLoading){

	$scope.user = UserService.getUser();

	$scope.showLogOutMenu = function() {
		var hideSheet = $ionicActionSheet.show({
			destructiveText: 'Logout',
			titleText: 'Are you sure you want to logout? This app is awsome so I recommend you to stay.',
			cancelText: 'Cancel',
			cancel: function() {},
			buttonClicked: function(index) {
				return true;
			},
			destructiveButtonClicked: function(){
				$ionicLoading.show({
				    template: 'Logging out...'
				});

                //facebook logout
                facebookConnectPlugin.logout(function(){
                    $ionicLoading.hide();
                    $state.go('welcome');
                },
                function(fail){
                    $ionicLoading.hide();
                });
			}
		});
	};
})
```

Then in your html you should add a “Log out” button
```javascript
  <a class="button button-assertive button-block button-outline" ng-click="showLogOutMenu()">
     Log Out
  </a>
```

**Services**

You also will need some services to store and get your user’s data. For the purpose of this example I will store user data on the device local storage but you should save it on a database.

```javascript
angular.module('services', [])
.service('UserService', function() {
    //for the purpose of this example I will store user data on ionic local storage but you should save it on a database
    var setUser = function(user_data) {
        window.localStorage.starter_facebook_user = JSON.stringify(user_data);
    };

    var getUser = function(){
        return JSON.parse(window.localStorage.starter_facebook_user || '{}');
    };

    return {
        getUser: getUser,
        setUser: setUser
    };
});
```

**What we have done so far:**
- At this point you should have an Ionic app with Facebook login and logout functionalities working.

**iOS9 Note:**

For XCode issues with iOS9 [read this thread](https://github.com/jeduan/cordova-plugin-facebook4/issues/3).

If you want to build the project for iOS9 and you are getting some errors on xcode, try adding the following code to your  ```platforms/ios/facebook-login/facebook-login-Info.plist``` file.

```
  <key>LSApplicationQueriesSchemes</key>
  <array>
    <string>fbauth</string>
  </array>
  <key>NSAppTransportSecurity</key>
  <dict>
    <key>NSAllowsArbitraryLoads</key>
    <true/>
  </dict>
```

## Next steps:
After having the authentication working you can focus on:
- The routing and adding access control to certain pages within your app
- Store users and tokens in your own database
- Using analytics tools to track users and what they do in your app
- Integrate other authentication methods so your users have more options to choose from
- Prettifying your app using a theme or your design skills, taking advantage of the many possibilities that Ionic and Sass provide
- [Integrate and make use of other Facebook API endpoints to give more powers to your app.](https://github.com/Wizcorp/phonegap-facebook-plugin#api)


As you may know we also sell beautiful mobile themes, templates and components that you may find super useful as they save you hours of development, time and effort, while giving your projects a great design from scratch. Having said that we have a line of [Login / Authentication components](https://www.ionicthemes.com/logins) that would be the perfect match for your Facebook Login integration.
