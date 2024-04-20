(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchController', LunchController);

LunchController.$inject = ['$scope'];
function LunchController($scope) {
    $scope.instruction = "List comma separated dishes that you usually have for lunch";
    $scope.ingredients = "";
    $scope.message = "";

    $scope.getMessage = function () {
        if ($scope.ingredients.length == 0) {
            $scope.message = "Please enter data first";
        } else {
            if (countIngredients($scope.ingredients) > 3) {
                $scope.message = "Too much!";
            } else {
                $scope.message = "Enjoy!";
            }
        }
  }
  
    function countIngredients(string) {
        var ingredients = string.split(",");
        return ingredients.length;
    }
}

})();