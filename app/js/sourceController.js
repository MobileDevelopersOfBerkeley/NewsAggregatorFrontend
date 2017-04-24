angular.module('myApp.controllers.sourceController', []).
controller('sourceController', function($scope, $rootScope) {
  post(apiServerUrl + "getSources", {}, function(sources) {
    var sourceIds = [];
    var idStr = getCookie("sourceIds");
    if (idStr) {
      sourceIds = JSON.parse(getCookie("sourceIds"));
    }
    $scope.$apply(function() {
      $scope.allSources = sources;
      if (sourceIds.length < 1) {
        // No sources set
        $rootScope.sources = JSON.parse(JSON.stringify(sources));
        sourceIds = Object.keys(sources);
        setCookie("sourceIds", JSON.stringify(sourceIds), 3650);
      } else {
        // Sources already set
        $rootScope.sources = {};
        for (var i = 0; i < sourceIds.length; i++) {
          var key = sourceIds[i];
          $rootScope.sources[key] = sources[key];
        }
      }
    });
  });

  $scope.toggleSource = function(source_id) {
  	if (source_id in $rootScope.sources) {
      delete $rootScope.sources[source_id];
  	} else {
  		$rootScope.sources[source_id] = $scope.allSources[source_id];
  	}
    var sourceIds = Object.keys($rootScope.sources);
    $rootScope.updateArticles(sourceIds);
    setCookie("sourceIds", JSON.stringify(sourceIds), 3650);
  }
});
