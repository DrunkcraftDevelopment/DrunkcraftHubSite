angular.module('drunkcraftApp').factory('NewsService', function($http) {
    var getNews = function() {
        return $http.get('config/config.json')
                 .success(function(res) {
                     return res.data
                 })
                 .error(function() {
                    console.log('error getting the config.json')
                 })
    }

    return {
        getNews : getNews
    }
})
