(function(angular) {
  'use strict';

  angular.module('communityMessagesApp', ['firebase', 'ngAnimate', 'ngRoute'])
    .config(['$routeProvider', '$locationProvider',
      function($routeProvider) {
        $routeProvider
          .when('/', {
            templateUrl: 'locations.html'
          })
          .when('/location/:location', {
            templateUrl: 'main.html',
            controller: 'MainCtrl',
            controllerAs: 'main'
          })
          .otherwise({
            redirectTo: '/'
          });
      }
    ])
    .controller('MainCtrl', ['$scope', '$firebaseObject', '$routeParams',
      function($scope, $firebaseObject, $routeParams) {

        var location = $routeParams.location;
        var ref = new Firebase('https://techhub-community.firebaseio.com/messages');
        var syncObject = $firebaseObject(ref);
        syncObject.$bindTo($scope, 'data');

        // if title is not set, don't show the item in ng-repeat
        $scope.messageFilter = function(data) {
          if (data.title !== '' || data.title === null) {
            if (data[location] === true) {
              return true;
            }
          }
        };

      }
    ]);
}(angular));
