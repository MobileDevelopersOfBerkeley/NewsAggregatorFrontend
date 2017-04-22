angular.module('myApp.controllers.sourceController', []).
controller('sourceController', function($scope, $rootScope) {
  post(apiServerUrl + "getSources", {}, function(sources) {
    $scope.$apply(function() {
      $rootScope.sources = sources;
      $scope.allSources = JSON.parse(JSON.stringify(sources));
    });
  });

  $scope.toggleSource = function(source_id) {
  	if (source_id in $rootScope.sources) {
      delete $rootScope.sources[source_id];
  	} else {
  		$rootScope.sources[source_id] = $scope.allSources[source_id];
  	}
    $rootScope.updateArticles(Object.keys($rootScope.sources));
  }
});
