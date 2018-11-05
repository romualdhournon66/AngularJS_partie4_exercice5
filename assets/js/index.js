var myApp = angular.module("myApp", []);
myApp.controller("hideController", function($scope) {
    $scope.hideText = true;
    $scope.text = "Mon texte a afficher et/ou a cacher !";
    $scope.show = function(){
        $scope.hideText = false;
    };
    $scope.hide = function(){
        $scope.hideText = true;
    }
});
