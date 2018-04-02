'use strict';
uiRoutr.$inject = [ '$stateProvider', '$urlRouterProvider' ]
angular.module('myApp', ['ui.router'])
	.config( ['$stateProvider', '$urlRouterProvider', uiRoutr] )

	function uiRoutr(stateProvider, urlRouterProvider){
		urlRouterProvider.otherwise('home')
		stateProvider
				.state('home', {
					url: '/home',
					template: '<h2>Home</h2>'
				})
				.state('about', {
					url: '/about',
					template: '<h2>about</h2>'
				})
	}
