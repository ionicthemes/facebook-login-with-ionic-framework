angular.module('controllers', [])
.controller('WelcomeCtrl', function($scope, $state, $q, UserService, $ionicLoading) {

  //This is the success callback from the login method
  var fbLoginSuccess = function(response) {
    var authResponse = response.authResponse;
    console.log(authResponse);
    $state.go('app.home');
  };


  //This is the fail callback from the login method
  var fbLoginError = function(error){
    console.log('fbLoginError', error);
    $ionicLoading.hide();
  };

  //This method is executed when the user press the "Login with facebook" button
  $scope.facebookSignIn = function() {

    console.log("login called")
    facebookConnectPlugin.getLoginStatus(function(success){
      console.log(success)
     if(success.status === 'connected'){
       console.log('getLoginStatus', success.status);
       $state.go('app.home');
     } else {
       console.log('getLoginStatus', success.status);
       facebookConnectPlugin.login([], fbLoginSuccess, fbLoginError);
      }
    });
  };

  //auto login
  /*facebookConnectPlugin.getLoginStatus(function(success){
    console.log(success)
    if(success.status === 'connected'){
      console.log('getLoginStatus', success.status);
      $state.go('app.home');
    } else {
      console.log('getLoginStatus', success.status);
      facebookConnectPlugin.login([], fbLoginSuccess, fbLoginError);
    }
  });*/

})

.controller('HomeCtrl', function($scope, UserService, $ionicActionSheet, $state, $ionicLoading, $cordovaGeolocation){

  var options = {timeout: 10000, enableHighAccuracy: true};

  $cordovaGeolocation.getCurrentPosition(options).then(function(position){

    var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    var mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

  }, function(error){
    console.log("Could not get location");
  });

})

;
