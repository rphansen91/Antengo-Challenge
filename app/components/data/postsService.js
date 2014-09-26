'use strict';

angular.module('myApp')
	.factory('Posts', ['$http', '$q', function ($http, $q) {
		return {
			get: function () {
				var deferred = $q.defer();
				$http.get('./components/data/listingsDataBlob.json')
				.success(function (data) {
					deferred.resolve(data);
				})
				.error(function (err) {
					deferred.reject(data);
				});
				return deferred.promise;
			}
		}
	}]);