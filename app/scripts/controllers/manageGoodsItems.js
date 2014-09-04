'use strict';

angular.module('angularLeteusgoApp')
  .controller('manageGoodsItemsCtrl', function ($scope, goodsItemService, operateCategoryService, operateGoodsItems) {

    $scope.products = operateGoodsItems.loadGoodsItems();

    $scope.getCategoryName = function (id) {
      return operateCategoryService.getCategoryById(id);
    };

    $scope.deleteCategory = function (index) {
      $scope.products.splice(index, 1);
      console.log("1111111111");
      goodsItemService.set('itemList', $scope.products);
    }

  });
