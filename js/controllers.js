angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $state, $ionicSideMenuDelegate) {
    $scope.chooseType = function(type)
    {
        console.log("oooooooooooooooooo: " + type);
        if (type=='driver') $state.go('tab.driver');
        if (type=='passenger') $state.go('tab.passenger');
    }
    $scope.toggleLeft = function() 
    {  
         $ionicSideMenuDelegate.toggleLeft();
    }
    

})
.controller('PassengerFormCtrl', function($scope, $ionicHistory, $http, $state) {
   $scope.chooseType  = function()
   {
        
   }
   $scope.addPassenger = function(passengerDetails)
   {
       alert('adading passenger');
       $state.go('tab.driverslist');
       var $register = "http://app.bibicom.net/topi/topi/trip/register";
       var datax = '';
       datax = JSON.stringify(passengerDetails.destination);
       $http({
            url: $register,
            method: "POST",
            data: datax,
        headers: { },
        dataType: "application/json",
    
        }).success(function(data, status, headers){ 
            alert(JSON.stringify(data) + " <------------------- with angular now");
        }).error(function(data, status, headers, config) {
            alert(status + " Error " + data);
         });
   }
   $scope.sendData = function()
   {
       /* var $register = "http://app.bibicom.net/topi/topi/trip/search";
        var datax = {};
        datax.location = "41.290823, 69.255530";
        datax.radius = "5";
        datax = JSON.stringify(datax);
       jQuery.ajax({ type: 'POST', url: $register, data: datax, contentType: "application/json", 
           success: function(data) 
           {
               alert("success: " + JSON.stringify(data));
               console.log('success');
           },
           error: function(data) { 
               alert("error: " + data);
               console.log('failure');
           }
       });*/
       $register = "http://app.bibicom.net/topi/topi/trip/search";
       var datax = {};
       datax.location = "41.290823, 69.255530";
       datax.radius = "5";
       datax = JSON.stringify(datax);
       $http({
            url: $register,
            method: "POST",
            data: datax,
        headers: { },
        dataType: "application/json",
    
        }).success(function(data, status, headers){ 
            alert(JSON.stringify(data) + " <------------------- with angular now");
        }).error(function(data, status, headers, config) {
            alert(status + " Error " + data);
         });
     
   }
   $scope.goBack = function() { 
       window.history.back();
    //$ionicHistory.goBack();
    /*var backView = $ionicHistory.backView();
     backView && backView.go();*/
  };
})
.controller('DriverFormCtrl', function($scope, $ionicHistory, $http) {
   $scope.addDriver = function(driverDetails)
   {
       alert('submitting driver form ' + driverDetails.name);
       alert('submitting driver form ' + driverDetails.model);
       alert('submitting driver form ' + driverDetails.plate);
   }
   $scope.chooseType  = function()
   {
       
   }
   $scope.sendData = function()
   {
       /* var $register = "http://app.bibicom.net/topi/topi/trip/search";
        var datax = {};
        datax.location = "41.290823, 69.255530";
        datax.radius = "5";
        datax = JSON.stringify(datax);
       jQuery.ajax({ type: 'POST', url: $register, data: datax, contentType: "application/json", 
           success: function(data) 
           {
               alert("success: " + JSON.stringify(data));
               console.log('success');
           },
           error: function(data) { 
               alert("error: " + data);
               console.log('failure');
           }
       });*/
       $register = "http://app.bibicom.net/topi/topi/trip/search";
       var datax = {};
       datax.location = "41.290823, 69.255530";
       datax.radius = "5";
       datax = JSON.stringify(datax);
       $http({
            url: $register,
            method: "POST",
            data: datax,
        headers: { },
        dataType: "application/json",
    
        }).success(function(data, status, headers){ 
            alert(JSON.stringify(data) + " <------------------- with angular now");
        }).error(function(data, status, headers, config) {
            alert(status + " Error " + data);
         });
     
   }
   $scope.goBack = function() {  
       window.history.back();
    //$ionicHistory.goBack();
    /*var backView = $ionicHistory.backView();
     backView && backView.go();*/
  };
})
.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})
.controller('DriversList',  function($scope, Drivers) {
  $scope.drivers = Drivers.all();
})
.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
