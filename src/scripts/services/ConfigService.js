define(['./module'], function(services) {

    return services.factory('ConfigService', ['$http', function($http) {
        var getConfig = function() {
            return $http.get('config/config.json')
                     .success(function(res) {
                         return res.data
                     })
                     .error(function() {
                        console.log('error getting the config.json')
                        return null
                     })
        }

        return {
            getConfig : getConfig
        }
    }])
})
