'use strict';

angular.module('letusgoApp')
  .controller('modifyGoodsItemsCtrl', function ($scope, goodsItemService, operateCategoryService, operateGoodsItems, $routeParams) {

    $scope.$emit('parent_manageGoodsActive');

    $scope.itemList = operateGoodsItems.getGoodsItemsByBarcode($routeParams.barcode);

    $scope.categorys = operateCategoryService.loadCategorys();
    $scope.category = operateCategoryService.getCategorysById($scope.itemList.category, $scope.categorys);

//    $scope.category = _.find($scope.categorys, function (category){
//
//      return category.id === $scope.itemList.category;
//    });
    console.log($scope.category);

    $scope.modifyGoods = function () {

      $scope.itemList.category = $scope.category.id;
      operateGoodsItems.modifyGoods($scope.itemList);
    };

  });

