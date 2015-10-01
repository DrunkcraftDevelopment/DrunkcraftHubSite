define([
    'angular',
    'angular-mocks',
    'src/scripts/app'
], function(angular, mocks) {
    "use strict"
    describe('HomeCtrl', function() {
        beforeEach(module('drunkcraftApp'))
        beforeEach(module('drunkcraftApp.controllers'))
        
        var mockNewsService, deferred, q, promise
        var testApiConfig = {
            'data': {
                'api.config': {
                    'host': 'host',
                    'port': 'port'
                }
            }
        }
        
        beforeEach(function() {
           module(function($provide) {
                $provide.factory('ConfigService', function($q) {
                    function getConfig() { 
                        deferred = $q.defer()
                        return deferred.promise
                    }

                    return {
                        getConfig : getConfig
                    }
                })
           })
        })
        
        var $controller, $http, $httpBackend, $scope, createHomeController, configService 

        beforeEach(inject(function($injector, _$httpBackend_, _$http_, _$controller_, $rootScope, _$q_, _ConfigService_) {
            $scope = $rootScope.$new()
            $httpBackend = _$httpBackend_
            $http = _$http_
            $controller = _$controller_
            configService = _ConfigService_
            createHomeController = createController($controller, $scope, $http, configService)
        }))
    

        describe('$scope.news', function() {
            var scope, controller

            beforeEach(function() {
                $httpBackend.whenGET('host:port/news').respond([{'test':'test'}]) 
                $httpBackend.expectGET('host:port/news')
                scope = $scope
            })

            afterEach(function() {
                verifyHttpCalls($httpBackend)
            })

            it('sets news when called and value returned', function() {
                createHomeController()
                deferred.resolve(testApiConfig)
                $httpBackend.flush()
                scope.$digest()
                expect($scope.news).toEqual([{'test': 'test'}])
            })
        })
    })

    function createController($controller, $scope, $http, configService) {
        return function() {
            $controller('HomeCtrl', { 
                '$scope' : $scope,
                '$http' : $http,
                'NewsService' : configService
            })
        }
    }

    function verifyHttpCalls($httpBackend) {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    }
})
