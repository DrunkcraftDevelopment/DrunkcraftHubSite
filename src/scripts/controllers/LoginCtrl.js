define(['./module'], function(controllers) {
    'use strict'
    return controllers.controller('LoginCtrl', ['$scope', '$http', 'User', 'ConfigService', function($scope, $http, User, ConfigService) {
        $scope.user = new User()

        $scope.login = function(user) {
            var getApiUrl = ConfigService.getApiUrl()
            getApiUrl.then(function(apiUrl) {
                $http({
                    method  : 'POST',
                    url     : apiUrl + '/login',
                    data    : encodeURIComponent(JSON.stringify(user)),
                    headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
                }).success(function(res)) {
                }
            })
        }
    }])
})

