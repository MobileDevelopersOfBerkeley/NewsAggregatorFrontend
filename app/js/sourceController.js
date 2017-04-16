angular.module('myApp.controllers.sourceController', []).
controller('sourceController', function($scope) {
  post(apiServerUrl + "getAllSources", {}, function(sources) {
    $scope.$apply(function() {
      $scope.sources = sources;
      $scope.allSources = sources;
    });
  });
});
