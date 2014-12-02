

function imagesController($scope,$http){
$http.get('js/req.json').success(function(data){
	$scope.images=data;
});	
}



























