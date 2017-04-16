angular.module('myApp.controllers.sourceController', []).
controller('sourceController', function($scope, $rootScope) {
  post(apiServerUrl + "getAllSources", {}, function(sources) {
    $scope.$apply(function() {
      $scope.sources = sources;
      $scope.allSources = sources;
    });
  });
});
