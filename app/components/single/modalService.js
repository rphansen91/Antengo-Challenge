'use strict';

angular.module('myApp')
	.factory('Modal', ['$modal', function ($modal) {
		return function (data) {
			$modal.open({
		      templateUrl: './components/single/singleContent.html',
		      controller: singleInstanceCtrl,
		      size: 'lg',
		      resolve: {
		        Post: function () {
		          return data;
		        }
		      }
			})

		}
	}]);

var singleInstanceCtrl = function($scope, $modalInstance, Post){
	var thumb;
	$scope.post = Post;
	$scope.thumbs = [];
	$scope.shown = $scope.post.photo;

	$scope.thumbs.push($scope.post['photoThumb']);
	for (var i=1;i<6;i++) {
		thumb = $scope.post['photoThumb' + i];
		if (thumb) {
			$scope.thumbs.push(thumb);
		}
	}

	$scope.select = function (i) {
		if (i) {$scope.shown = $scope.post['photo' + i];}
		else {$scope.shown = $scope.post['photo'];}
	}

	$scope.close = function () {
	    $modalInstance.dismiss();
	};
};

	