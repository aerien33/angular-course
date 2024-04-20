(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchController', function ($scope) {
  $scope.instruction = "List comma separated items you usually have for lunch";
});

})();