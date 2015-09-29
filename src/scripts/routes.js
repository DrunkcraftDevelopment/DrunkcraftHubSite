define(['angular', './app'], function(angular) {
    console.log('start')
    var drunkcraftApp = angular.module('drunkcraftApp')
    console.log(drunkcraftApp)

    return drunkcraftApp.config(['$routeProvider', function($routeProvider) {
            console.log('routes!')
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
