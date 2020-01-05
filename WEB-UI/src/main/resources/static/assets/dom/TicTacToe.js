var ticTacToeCtl = angular
		.module('ticTacToeCtl', [])
		.config(
				[
						'$httpProvider',
						function($httpProvider) {
							$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
						} ]);

ticTacToeCtl.controller('ticTacToe', function($scope, $http,
		$rootScope, $location, $window) {
	$scope.polosan = 'test bima'; 
	$scope.column = 3;
	$scope.row = 3;
	
	
	$scope.initGame = function(){
		$http.get("/shared/initial/"+$scope.row+"/"+$scope.column).then(function(response) {
			debugger;
			$scope.currentBoard = response.data.content;
			$scope.tboard = response.data.content.listListTicTacToeBoard;
			},
			function error(response) {
				
				$scope.postResultMessage = "Error with status: "
						+ response.statusText;
			});
	}
	
	$scope.getWhichBoard = function(board){
		$http.post("/shared/selectBox/v1/"+board.column+"/"+board.row,$scope.currentBoard).then(function(response) {
			debugger;
			$scope.currentBoard = response.data.content;
			$scope.tboard = response.data.content.listListTicTacToeBoard;
			$scope.robotTurn($scope.currentBoard);
			},
			function error(response) {
				
				$scope.postResultMessage = "Error with status: "
						+ response.statusText;
			});
		debugger;
	}
	
	$scope.robotTurn = function(data){
		$http.post("/shared/robotTurn"+"/"+$scope.row+"/"+$scope.column,data).then(function(response) {
			debugger;
			$scope.currentBoard = response.data.content;
			$scope.tboard = response.data.content.listListTicTacToeBoard;
			},
			function error(response) {
				
				$scope.postResultMessage = "Error with status: "
						+ response.statusText;
			});
		debugger;
	}
	
	$scope.initGame();
	
// alert('welcome');
	
});