(function() {
    "use strict"
    describe('HomeCtrl', function() {
        beforeEach(module('app'))

        var $controller

        beforeEach(inject(function(_$controller_) {
            $controller = _$controller_
        })

        describe('$scope.news', function() {
            var $scope, controller

            beforeEach(function() {
                $scope = {}
                controller = $controller('HomeCtrl', { $scope : $scope })
            })

            it('sets news when called and value returned', function() {
                expect($scope.news).toEqual({})
            })
        })
    }))
})()
