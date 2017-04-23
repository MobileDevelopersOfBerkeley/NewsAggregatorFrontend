angular.module('myApp.controllers.articleController', []).
controller('articleController', function($scope, $rootScope) {
  post(apiServerUrl + "queryArticles", {"sanitize": true},
      function(articles) {
        $scope.$apply(function() {
            $scope.articles = articles;
        });
  });

  $rootScope.updateArticles = function(source_ids) {
    post(apiServerUrl + "getArticlesBySources", {"sources" : JSON.stringify(source_ids), "sanitize": true}, function(articles) {
      $scope.$apply(function() {
        $scope.articles = articles;
      });
    });
  }
});
