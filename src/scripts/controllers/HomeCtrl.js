define(['./module'], function(controllers) {
    'use strict'
    return controllers.controller('HomeCtrl', ['$scope', '$http', 'ConfigService', function($scope, $http, ConfigService) {
        var getApiUrl = ConfigService.getApiUrl()
        getApiUrl.then(function(apiUrl) {
            $http.get(apiUrl + '/news').success(function(data) {
                $scope.news = data
            })
        })
    }])
})

