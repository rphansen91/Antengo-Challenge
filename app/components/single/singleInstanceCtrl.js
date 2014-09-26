'use strict';

angular.module('myApp')
	.controller('singleInstanceCtrl', ['$scope', 'Post', function($scope, Post){
		$scope.post = Post;
	}]);