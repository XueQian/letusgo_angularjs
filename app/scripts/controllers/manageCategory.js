'use strict';

angular.module('angularLeteusgoApp')
  .controller('manageCategoryCtrl', function ($scope, operateCategoryService, goodsItemService) {

    $scope.categorys = operateCategoryService.loadCategorys();

    $scope.deleteCategory = function (index) {

      $scope.categorys.splice(index, 1);
      goodsItemService.set('categoryLists', $scope.categorys);
    };

    $scope.addCategory = function () {

      operateCategoryService.addCategory($scope.category, $scope.categorys);
    }


  });
