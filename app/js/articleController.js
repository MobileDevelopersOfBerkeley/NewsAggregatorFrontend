angular.module('myApp.controllers.articleController', []).
controller('articleController', function($scope) {
  post(apiServerUrl + "getArticlesGreaterThanPopularity", {"popularity" : 1},
      function(articles) {
        $scope.$apply(function() {
            $scope.articles = articles.slice(0, 30);
        });
  });
});
