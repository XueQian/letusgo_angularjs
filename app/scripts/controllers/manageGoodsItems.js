'use strict';

angular.module('angularLeteusgoApp')
  .controller('manageGoodsItemsCtrl', function ($scope, goodsItemService, operateCategoryService, operateGoodsItems, localStorageService) {

    $scope.products = operateGoodsItems.loadGoodsItems();

    $scope.getCategoryName = function (id) {
      return operateCategoryService.getCategoryById(id);
    };


    $scope.deleteCategory = function (index) {

      $scope.products.splice(index, 1);

      goodsItemService.set('itemLists', $scope.products);
    };

    $scope.categorys = operateCategoryService.loadCategorys();

    $scope.itemLists = localStorageService.get('itemLists');

    $scope.addGoodsItems = function () {

      operateGoodsItems.addGoodsItems($scope.item, $scope.itemLists);
    };


  });
