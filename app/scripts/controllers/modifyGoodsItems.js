'use strict';

angular.module('angularLeteusgoApp')
  .controller('modifyGoodsItemsCtrl', function ($scope, goodsItemService, operateCategoryService, operateGoodsItems, $routeParams) {

    $scope.$emit('_parent_manageGoodsActive');

    $scope.itemList = operateGoodsItems.getGoodsItemsByBarcode($routeParams.barcode);

    $scope.categorys = operateCategoryService.loadCategorys();
    var id = operateCategoryService.getCategoryIdById($scope.itemList.category);
    $scope.category = $scope.categorys[id-1];

    $scope.modifyGoods = function () {

      $scope.itemList.category = $scope.category.id;
      operateGoodsItems.modifyGoods($scope.itemList);
    };

  });

