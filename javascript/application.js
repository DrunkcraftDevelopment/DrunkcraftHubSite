var drunkcraftApp = angular.module('drunkcraftApp', ['ngRoute']);

drunkcraftApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'pages/home.html',
            controller : 'mainController'
        })

        .when('/about', {
            templateUrl : 'pages/about.html',
            controller : 'aboutController'
        });
});

drunkcraftApp.controller('mainController', function($scope) {
});

drunkcraftApp.controller('aboutController', function($scope) {
    $scope.message = 'Coming Soon!';
});
