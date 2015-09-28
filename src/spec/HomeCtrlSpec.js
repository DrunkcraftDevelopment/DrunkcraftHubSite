(function() {
    "use strict"
    describe('HomeCtrl', function() {
        var testApiConfig = {
            'data': {
                'api.config': {
                    'host': 'host',
                    'port': 'port'
                }
            }
        }
        
        var mockNewsService, deferred, q, promise
        beforeEach(module('drunkcraftApp'))
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
        
        var $controller, $http, $httpBackend, $scope, createController, configService 

        beforeEach(inject(function($injector, _$httpBackend_, _$http_, _$controller_, $rootScope, _$q_, _ConfigService_) {
            $httpBackend = _$httpBackend_
            $http = _$http_
            $scope = $rootScope.$new()
            $controller = _$controller_
            configService = _ConfigService_
            createController = function() {
                                               $controller('HomeCtrl', { 
                                                   '$scope' : $scope,
                                                   '$http' : $http,
                                                   'NewsService' : configService
                                               })
                               }

        }))

        describe('$scope.news', function() {
            var scope, controller

            beforeEach(function() {
                $httpBackend.whenGET('host:port/news').respond([{'test':'test'}]) 
                $httpBackend.expectGET('host:port/news')
                scope = $scope
            })

            afterEach(function() {
                $httpBackend.verifyNoOutstandingExpectation();
                $httpBackend.verifyNoOutstandingRequest();
            })

            it('sets news when called and value returned', function() {
                createController()
                deferred.resolve(testApiConfig)
                $httpBackend.flush()
                scope.$digest()
                expect($scope.news).toEqual([{'test': 'test'}])
            })
        })
    })
})()
