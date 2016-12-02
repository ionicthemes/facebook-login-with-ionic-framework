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
.controller('AppCtrl', function($scope){

})

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

;
