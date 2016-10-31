var app=angular.module("myApp",[]);
app.controller('calcController',function($scope,mathService){
	$scope.square=function(){
		$scope.result=mathService.multiply($scope.number,$scope.number);
	}		
});