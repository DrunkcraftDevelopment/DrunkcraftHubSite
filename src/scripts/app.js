define([
    'angular',
    'angular-route',
    './controllers/index',
    './services/index'
], function(angular) {
    'use strict'

    return angular.module('drunkcraftApp', [
        'drunkcraftApp.controllers',
        'drunkcraftApp.services',
        'ngRoute'
    ])
})

//drunkcraftApp.controller('aboutController', function($scope) {
//    $scope.message = 'Coming Soon!'
//})
