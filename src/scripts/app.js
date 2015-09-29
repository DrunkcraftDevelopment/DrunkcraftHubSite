define([
    'angular',
    'angular-route',
    './controllers/index',
    './services/index'
], function(angular) {
    'use strict'
    console.log('test')
    console.log(angular)
    angular.module('drunkcraftApp', [
        'controllers',
        'services',
        'ngRoute'
    ])
})

//drunkcraftApp.controller('aboutController', function($scope) {
//    $scope.message = 'Coming Soon!'
//})
