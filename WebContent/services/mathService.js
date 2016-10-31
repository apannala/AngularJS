
app.factory('mathService',function(){
	var factory={};
	factory.multiply=function(a,b){
		return a*b
	}
	return factory;
});