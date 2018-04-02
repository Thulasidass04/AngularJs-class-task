'use strict';

myCtrl.$inject = ['$scope'];
angular.module('myApp')

	.controller('myCtrl', myCtrl )
		function myCtrl(vm){
		console.log('myCtrl')
	}
