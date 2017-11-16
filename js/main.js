require.config({
	baseUrl: '../bower_components/',
   	shim: {
        'backbone': {
            deps: ['underscore', 'jquery/src/jquery'],
            exports: 'Backbone'
        },
        "Vue": {
        	deps: ['vue'],
    		exports: "Vue"
        },
        'jquery': {
        	deps: ['jquery/src/jquery'],
        	exports: 'jquery'
        }
        
    },

    paths: {
    	Vue: "https://cdnjs.cloudflare.com/ajax/libs/vue/2.2.1/vue.min",
        vue: "https://rawgit.com/edgardleal/require-vuejs/master/dist/require-vuejs",
        jquery:'jquery/src/jquery',
        underscore: 'underscore/underscore',
        backbone: 'backbone/backbone'
    }
});

//the "main" function to bootstrap your code
require([ 'Vue', '/js/myComponent.js'], function (Vue, mm) {   // or, you could use these deps in a separate module using define
	 var app = new Vue({
        el: "#app"
    });
});