'use strict';

angular.module('angularLeteusgoApp')
  .controller('modifyGoodsItemsCtrl', function ($scope, goodsItemService, operateCategoryService, operateGoodsItems, $routeParams) {

    $scope.$emit('_parent_manageGoodsActive');

    $scope.itemList = operateGoodsItems.getGoodsItemsByBarcode($routeParams.barcode);

    $scope.categorys = operateCategoryService.loadCategorys();
    $scope.category = operateCategoryService.getCategorysById($scope.itemList.category);

    $scope.modifyGoods = function () {

      $scope.itemList.category = $scope.category.id;
      operateGoodsItems.modifyGoods($scope.itemList);
    };

  });

