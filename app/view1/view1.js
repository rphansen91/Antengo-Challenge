'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', 'Posts', 'Modal', function($scope, Posts, Modal) {
	function successHandler (data) {
		$scope.posts = data.rs;
	}
	function errorHandler (err) {
		alert(err);
	}
	$scope.open = function (post) {
		Modal(post);
	}

	Posts.get().then(successHandler, errorHandler);
}]);