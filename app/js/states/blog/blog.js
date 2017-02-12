angular.module('app')
.controller('blogController', ['$scope', function($scope) {
   $scope.posts=["an", "array", "of", "posts"];
}]);