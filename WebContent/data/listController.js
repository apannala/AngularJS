angular.module('myApp', []).controller('namesCtrl', function($scope) {
    $scope.names = [
        {name:'Aswini',state:'Andhrapradesh'},
        {name:'Suresh',state:'Andhrapradesh'},
        {name:'Harati',state:'Telangana'},
        {name:'Surender',state:'Telangana' }
    ];
});