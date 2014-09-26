'use strict';

angular.module('myApp')
	.controller('categoriesCtrl', ['Categories', 'Posts', '$rootScope', '$scope', function (Categories, Posts, $rootScope, $scope) {
		function successHandler (data) {
			$scope.cats = Categories.get(data.rs);
		}
		function errorHandler (err) {
			alert(err);
		}
		Posts.get().then(successHandler, errorHandler);

		$scope.type = function (selected) {
			$rootScope.categoryFilter = selected;
		}
	}]);