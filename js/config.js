'use strict';
requirejs.config({
    baseUrl: './components',
    paths: {
        'main': '../js/main',
        'backbone': 'backbone/backbone',
        'underscore': 'underscore/underscore',
        'jquery': 'http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min'
    },
    shim: {
        'backbone': {
            'deps': ['underscore', 'jquery'],
            'exports': 'Backbone'
        },
        'underscore': {
            'exports': '_'
        }
    }
});
require(['backbone', 'main'], function(Backbone, main) {
    main();
})
