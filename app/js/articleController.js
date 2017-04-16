angular.module('myApp.controllers.articleController', []).
controller('articleController', function($scope, $rootScope) {
  post(apiServerUrl + "queryArticles", {},
      function(articles) {
        $scope.$apply(function() {
            $scope.articles = articles.slice(0, 30);
        });
  });

  $rootScope.updateArticles = function(sources) {
    post(apiServerUrl + "getArticlesBySources", {"sources" : JSON.stringify(sources)}, function(articles) {
      $scope.$apply(function() {
        $scope.articles = articles.slice(0, 30);
      });
    });
  }
});
