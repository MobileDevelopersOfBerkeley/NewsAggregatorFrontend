angular.module('myApp.controllers.articleController', []).
controller('articleController', function($scope, $rootScope) {
  $rootScope.updateArticles = function(source_ids) {
    post(apiServerUrl + "getArticlesBySources", {"sources" : JSON.stringify(source_ids), "sanitize": true}, function(articles) {
      $scope.$apply(function() {
        $scope.articles = articles;
      });
    });
  };

  var sourceIdsStr = getCookie("sourceIds");
  if(sourceIdsStr) {
    // Source set
    var sourceIds = JSON.parse(sourceIdsStr);
    $rootScope.updateArticles(sourceIds);
  } else {
    // No srouce set, get all the articles
    post(apiServerUrl + "queryArticles", {"sanitize": true},
        function(articles) {
          $scope.$apply(function() {
              $scope.articles = articles;
          });
    });
  }
});
