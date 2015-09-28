require.config({
    baseUrl: './scripts',
    paths: {
        'angular': 'vendor/angular/angular',
        'angular-route': 'vendor/angular-route/angular-route'
    },

    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular']
        }
    },

    deps: ['./bootstrap',
           'angular',
           'angular-route']
})
