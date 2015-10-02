define(['./module'], function(services) {

    return services.factory('User', [function() {
        var User = function() {
            return {
                username: '',
                password: ''
            }
        }
        
        return User
    }])
})
