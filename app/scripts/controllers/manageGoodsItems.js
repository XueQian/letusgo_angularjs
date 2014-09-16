'use strict';

angular.module('letusgoApp')
  .controller('manageGoodsItemsCtrl', function ($scope, GoodsItemService, operatecategorieservice, operateGoodsItems, localStorageService) {

    $scope.$emit('parent_manageActive');

    $scope.products = operateGoodsItems.loadGoodsItems();

    $scope.getCategoryName = function (id) {
      return operatecategorieservice.getcategoryById(id, null).name;
    };

    $scope.deleteCategory = function (index) {

      $scope.products.splice(index, 1);

      GoodsItemService.set('itemList', $scope.products);
    };

    $scope.categories = operatecategorieservice.loadcategories();

    $scope.itemList = localStorageService.get('itemList');

    $scope.addGoodsItems = function () {

      operateGoodsItems.addGoodsItems($scope.item, $scope.itemList);
    };

  });
