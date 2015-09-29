define(['./module'], function(controllers) {
    'use strict'
    return controllers.controller('AboutCtrl', ['$scope', function($scope) {
        $scope.message = "Coming Soon!"
    }])
})

