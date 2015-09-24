angular.module('drunkcraftApp').controller('HomeCtrl', ['$scope', '$http', 'NewsService', function($scope, $http, NewsService) {
    var getNews = NewsService.getNews()
    getNews.then(function(config_res) {
        var config_data = config_res.data
        var host = config_data['api.config'].host
        var port = config_data['api.config'].port
        $http.get(host + ':' + port + '/news').success(function(data) {
            $scope.news = data
        })
    })
}])

