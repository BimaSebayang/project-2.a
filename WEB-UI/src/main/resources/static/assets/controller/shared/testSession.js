var testSessionModule = angular
		.module('testSessionModule', ['ngSanitize'])
		.config(
				[
						'$httpProvider',
						function($httpProvider) {
							$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
						} ]);


testSessionModule.controller('testSessionController',function($scope, $http,
		$rootScope, $location, $window) {
	$scope.keyAccess = undefined;    
	//alert('ini : ' + getUrlParameter('KEY_ACCESS'));
	alert(getCookie('KEY_ACCESS'))
	$scope.getAccess = function(){
		
		var config = {
				headers : {
					'Accept' : 'application/json, */*',
					'KEY_ACCESS' : getCookie('KEY_ACCESS'),
				}
			};
		
		$http.get("/shared/test-get",config)
		.then(function (response){
			debugger;
			$scope.keyAccess = keyAccess(response);
		}, function error(response){
		})
	}
	
	$scope.getAccess();
	
	//location.search;
});

