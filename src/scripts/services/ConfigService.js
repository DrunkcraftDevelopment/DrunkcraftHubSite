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

        var getApiUrl = function() {
            return getConfig().then(function(config_res) {
                var configData = config_res.data
                var host = configData['api.config'].host
                var port = configData['api.config'].port
                return host + ':' + port
            })
        }

        return {
            getConfig : getConfig,
            getApiUrl : getApiUrl
        }
    }])
})
