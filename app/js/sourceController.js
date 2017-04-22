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
      delete $rootScope[source_id];
  	} else {
  		$rootScope[source_id] = $scope.allSources;
  	}
    $rootScope.updateArticles(Object.keys($rootScope.sources));
  }
});
