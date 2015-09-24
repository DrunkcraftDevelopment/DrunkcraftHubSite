var drunkcraftApp = angular.module('drunkcraftApp', ['ngRoute']);

drunkcraftApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'views/home.html',
            controller : 'HomeCtrl'
        })

        .when('/about', {
            templateUrl : 'views/about.html',
            controller : 'aboutController'
        });
});

drunkcraftApp.controller('aboutController', function($scope) {
    $scope.message = 'Coming Soon!'
})
