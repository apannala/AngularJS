var app=angular.module('myApp',['ngRoute','ngResource']);

app.config(['$routeProvider',function($routeProvider){
	$routeProvider
	.when('/addOrders',{
		templateUrl:'templates/addOrders.html',
		controller:'addOrdersController'
	})
	.when('/showOrders',{
		templateUrl:'templates/showOrders.html',
		controller:'showOrdersController'
	})
	.otherwise({
		redirectTo:'/addOrders'
	});
}]);

app.controller('addOrdersController',function($scope){
		$scope.message='From Add Orders';
})

app.controller('showOrdersController',function($scope){
	$scope.message='From show Orders';
});
