define(['./module'], function(controllers) {
    'use strict'
    return controllers.controller('LoginCtrl', ['$scope', '$http', 'User', 'ConfigService', function($scope, $http, User, ConfigService) {
        $scope.user = new User()

        $scope.login = function(user) {
            var getApiUrl = ConfigService.getApiUrl()
            getApiUrl.then(function(apiUrl) {
                $http({
                    method  : 'POST',
                    url     : apiUrl + '/user/login',
                    data    : encodeUserData(user),
                    headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
                }).success(function(res) {
                })
            })
        }

        function encodeUserData(user) {
            var str = []
            for(var data in user) {
               str.push(encodeURIComponent(data) + '=' + encodeURIComponent(user[data]))
            }
            return str.join('&')
        }
    }])
})

