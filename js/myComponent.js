define([ 'Vue', 'underscore', 'jquery/src/jquery'], function (Vue, _, $) { 
	var MyComponent = Vue.extend({
	  template: _.template($('#login-template').html()),
	});
	Vue.component('my-component', MyComponent)
	return MyComponent
});
