'use strict';

angular.module('angularLeteusgoApp')
  .controller('modifyGoodsItemsCtrl', function ($scope, goodsItemService, operateCategoryService, operateGoodsItems, $routeParams) {

    $scope.$emit('_parent_manageGoodsActive');

    $scope.itemList = operateGoodsItems.getGoodsItemsByBarcode($routeParams.barcode);
    $scope.categorys = operateCategoryService.loadCategorys();

    $scope.getCategoryName = function (id) {
      return operateCategoryService.getCategoryById(id);
    };

    $scope.modifyGoods = function () {
      operateGoodsItems.modifyGoods($scope.itemList);
    };

  });

