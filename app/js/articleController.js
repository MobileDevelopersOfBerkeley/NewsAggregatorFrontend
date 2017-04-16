angular.module('myApp.controllers.articleController', []).
controller('articleController', function($scope, $rootScope) {
  post(apiServerUrl + "queryArticles", {},
      function(articles) {
        $scope.$apply(function() {
            $scope.articles = articles.slice(0, 30);
            console.log(articles);
        });
  });

  $rootScope.updateArticles = function(sources) {
    return 0;
  }
});
