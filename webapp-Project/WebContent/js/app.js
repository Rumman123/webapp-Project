var shareApp=angular.module('shareApp',[
    'ngRoute',
    'sharesControllers'
    ]);

shareApp.config(['$routeProvider',function($routeProvider){
	$routeProvider.
	when('/shares',
			{
		templateUrl:'partials/share-list.html',
		controller:'ShareListCtrl'
			}).
			when('/shares/:shareId',
					{
				templateUrl:'partials/share-detail.html',
				controller:'ShareDetailCtrl'
					}).
	   otherwise({
		   redirectTo:'/shares'
	   });
	
}]);