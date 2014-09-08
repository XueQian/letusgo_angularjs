'use strict';

angular.module('angularLeteusgoApp')
  .controller('manageCategoryCtrl', function ($scope, operateCategoryService, goodsItemService,operateGoodsItems) {

    $scope.categorys = operateCategoryService.loadCategorys();

    $scope.getItemsById = function (id) {
      console.log(id);

      //console.log(operateCategoryService.getItemsById(id)+'1111111111111111');
      return operateGoodsItems.getItemsById(id);
    };

    $scope.deleteCategory = function (index,id) {

      if ($scope.getItemsById(id)) {
        $scope.categorys.splice(index, 1);
        goodsItemService.set('categoryLists', $scope.categorys);
        return;
      }
    };

    $scope.addCategory = function () {

      operateCategoryService.addCategory($scope.category, $scope.categorys);
    };

    //$scope.category = operateCategoryService.getCategoryById(id);

    $scope.modifyCategory = function () {

      return operateCategoryService.modifyCategory($scope.categorys);
    };

  });
