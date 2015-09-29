define(['angular', 'angular-route'], function() {
    var routeProv = function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl : 'views/home.html',
                controller : 'HomeCtrl'
            })
            .when('/about', {
                templateUrl : 'views/about.html',
                controller : 'AboutCtrl'
            })
            .otherwise({
                redirectTo : '/'
            })
    }

    return ['$routeProvider', routeProv]
})
