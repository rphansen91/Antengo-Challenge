'use strict';

angular.module('myApp')
	.factory('Categories', [function () {
		return {
			get: function (posts) {
				var cats = [];
				posts.forEach(function (post) {
					if (cats.indexOf(post.categoryName) == -1) {
						cats.push(post.categoryName);
					}
				});
				return cats;
			}	
		}	
	}]);