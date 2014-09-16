'use strict';

angular.module('letusgoApp')
  .controller('modifyCategoryCtrl', function ($scope, GoodsItemService, operatecategorieservice, operateGoodsItems, $routeParams) {

    $scope.$emit('parent_manageGoodsActive');

    $scope.category = operatecategorieservice.getcategoryById($routeParams.id, null);
    $scope.categories = operatecategorieservice.loadcategories();

    $scope.modifyCategory = function () {

      return operatecategorieservice.modifyCategory($scope.category);
    };

  });



