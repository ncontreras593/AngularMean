var app = angular.module('flapperNews', []);

app.controller('MainCtrl', [
	'$scope',
	/*scope var serves as bridge b/w angular templates and controllers.
	If you want something to be accessible in the template such as a 
	function or variable, bind it to $scope*/
	function($scope){
		//test is now a scope variable
		$scope.test = 'Hello World!';
		//posts is a scope variable, an array of strings
		$scope.posts = [
			'post 1',
			'post 2',
			'post 3',
			'post 4',
			'post 5'
		];
	}]);