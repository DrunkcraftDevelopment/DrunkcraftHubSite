define([
    'angular',
    'angular-route',
    './routes',
    './controllers/index',
    './services/index'
], function(angular, ngRoute, routeConfig) {
    'use strict'
    var drunkcraftApp =  angular.module('drunkcraftApp', [
        'drunkcraftApp.controllers',
        'drunkcraftApp.services',
        'ngRoute'
    ])
    .config(routeConfig)

    return drunkcraftApp
})

//drunkcraftApp.controller('aboutController', function($scope) {
//    $scope.message = 'Coming Soon!'
//})
