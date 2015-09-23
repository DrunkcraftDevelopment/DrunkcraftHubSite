var drunkcraftApp = angular.module('drunkcraftApp', ['ngRoute']);

drunkcraftApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'pages/home.html',
            controller : 'mainController'
        })

        .when('/about', {
            templateUrl : 'pages/about.html',
            controller : 'aboutController'
        });
});

drunkcraftApp.controller('mainController', function($scope, $http) {
    var host = config_data['api.host']
    var port = config_data['api.host.port']
    $http.get(host + ':' + port + '/news').success(function(data) {
        console.log(data)
        $scope.news = data
    })
})

drunkcraftApp.controller('aboutController', function($scope) {
    $scope.message = 'Coming Soon!'
})
