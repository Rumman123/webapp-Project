var sharesControllers=angular.module('sharesControllers',[]);



sharesControllers.controller('ShareListCtrl',['$scope','$http',function($scope,$http){
$http.get('js/req.json').success(function(data){
	$scope.shares=data;
});
}]);	
sharesControllers.controller('ShareDetailCtrl',['$scope','$routeParams','$http',function($scope,$routeParams,$http){
	 $http.get('js/' + $routeParams.shareId + '.json').success(function(data) {
	      $scope.share = data;
	});
}]);



























