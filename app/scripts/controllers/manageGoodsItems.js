'use strict';

angular.module('letusgoApp')
  .controller('manageGoodsItemsCtrl', function ($scope, goodsItemService, operatecategorieservice, operateGoodsItems, localStorageService) {

    $scope.$emit('parent_manageActive');

    $scope.products = operateGoodsItems.loadGoodsItems();

    $scope.getCategoryName = function (id) {
      return operatecategorieservice.getcategoriesById(id, null).name;
    };

    $scope.deleteCategory = function (index) {

      $scope.products.splice(index, 1);

      goodsItemService.set('itemList', $scope.products);
    };

    $scope.categories = operatecategorieservice.loadcategories();

    $scope.itemList = localStorageService.get('itemList');

    $scope.addGoodsItems = function () {

      operateGoodsItems.addGoodsItems($scope.item, $scope.itemList);
    };

  });
