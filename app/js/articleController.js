angular.module('myApp.controllers.articleController', []).
controller('articleController', function($scope) {
  post(apiServerUrl + "getArticlesGreaterThanPopularity", {"popularity" : 1},
      function(articles) {
        $scope.$apply(function() {
            $scope.articles = articles;
        });
  });

    $scope.articles = [
      {
          title: "North Korea Provokes Trump With Missile Test",
          popularity: 1,
          source: "bloomberg",
          description: "The incident occurred a day after North Korean leader Kim Jong Un oversaw an elaborate military parade in the center of Pyongyang.",
          urlToImage: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i2OS2pr8tNsM/v0/1200x675.jpg",
          url: "https://www.bloomberg.com/politics/articles/2017-04-15/north-korea-likely-conducted-failed-missile-test-south-korea"
      },
      {
          title: "Judge's Anti-death Penalty Protest Riles Conservatives",
          popularity: 10,
          source: "bloomberg",
          description: "After barring Arkansas from executing eight inmates in rapid succession because of a dispute over how it obtained one of its execution drugs, Judge Wendell Griffen went to an anti-death penalty rally, where he made a stir by lying down on a cot and binding himself as though he were a condemned man on a gurney.",
          urlToImage: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ivBCCdMKVdMk/v0/1200x800.jpg",
          url: "https://www.bloomberg.com/news/articles/2017-04-15/judge-s-anti-death-penalty-protest-riles-conservatives"
      }
    ];
});
