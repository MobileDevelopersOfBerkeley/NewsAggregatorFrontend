angular.module('myApp.controllers.articleController', []).
controller('articleController', function($scope, $rootScope) {
  post(apiServerUrl + "queryArticles", {},
      function(articles) {
        $scope.$apply(function() {
            $scope.articles = articles.slice(0, 30);
        });
  });

  $rootScope.updateArticles = function(source_ids) {
    post(apiServerUrl + "getArticlesBySources", {"sources" : JSON.stringify(source_ids)}, function(articles) {
      $scope.$apply(function() {
        $scope.articles = articles.slice(0, 30);
      });
    });
  }
});
