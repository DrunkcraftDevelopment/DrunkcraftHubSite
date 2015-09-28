define(['./app'], function(drunkcraftApp) {
    return drunkcraftApp.config(['$routeProvider', function($routeProvider) {
            console.log('provide')
            $routeProvider
                .when('/', {
                    templateUrl : 'views/home.html',
                    controller : 'HomeCtrl'
                })

               // .when('/about', {
               //     templateUrl : 'views/about.html',
               //     controller : 'aboutController'
               // })

               // .otherwise({
               //     redirectTo : '/'
               // })
        }])
})
