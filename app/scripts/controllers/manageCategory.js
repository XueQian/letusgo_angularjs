'use strict';

angular.module('angularLeteusgoApp')
  .controller('manageCategoryCtrl', function ($scope, operateCategoryService, goodsItemService) {

    $scope.categorys = operateCategoryService.loadCategorys();

    var getItemsById = function (id) {
      return operateCategoryService.getItemsById(id);
    }

    $scope.deleteCategory = function (index) {

      if (getItemsById(id)) {
        $scope.categorys.splice(index, 1);
        goodsItemService.set('categoryLists', $scope.categorys);
        return;
      }
    };

    $scope.addCategory = function () {

      operateCategoryService.addCategory($scope.category, $scope.categorys);
    };

    $scope.myCategory = operateCategoryService.getCategoryName();


  });
