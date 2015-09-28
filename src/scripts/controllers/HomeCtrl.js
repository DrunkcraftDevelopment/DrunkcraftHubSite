define(['./module'], function(controllers) {
    'use strict'
    controllers.controller('HomeCtrl', [function($scope) {
        var getConfig = ConfigService.getConfig()
        getConfig.then(function(config_res) {
            var config_data = config_res.data
            var host = config_data['api.config'].host
            var port = config_data['api.config'].port
            $http.get(host + ':' + port + '/news').success(function(data) {
                $scope.news = data
            })
        })
    }])
})

