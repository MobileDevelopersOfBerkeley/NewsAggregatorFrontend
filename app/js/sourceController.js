angular.module('myApp.controllers.sourceController', []).
controller('sourceController', function($scope, $rootScope) {
  post(apiServerUrl + "getAllSources", {}, function(sources) {
    $scope.$apply(function() {
      $scope.sources = sources;
      $scope.allSources = sources.slice();
    });
  });

  $scope.toggleSource = function(source) {
  	if (!$scope.sources.includes(source)) {
  		$scope.sources.push(source);
  	} else {
  		var index = $scope.sources.indexOf(source);
  		if (index > -1) {
		    $scope.sources.splice(index, 1);
		   }
  	}
    $rootScope.updateArticles($scope.sources);
		}
});
