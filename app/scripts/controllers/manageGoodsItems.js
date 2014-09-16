'use strict';

angular.module('letusgoApp')
  .controller('manageGoodsItemsCtrl', function ($scope, GoodsItemService, Operatecategorieservice, Operategoodsitemservice, localStorageService) {

    $scope.$emit('parent_manageActive');

    $scope.products = Operategoodsitemservice.loadGoodsItems();

    $scope.getCategoryName = function (id) {
      return Operatecategorieservice.getcategoryById(id, null).name;
    };

    $scope.deleteCategory = function (index) {

      $scope.products.splice(index, 1);

      GoodsItemService.set('itemList', $scope.products);
    };

    $scope.categories = Operatecategorieservice.loadcategories();

    $scope.itemList = localStorageService.get('itemList');

    $scope.addGoodsItems = function () {

      Operategoodsitemservice.addGoodsItems($scope.item, $scope.itemList);
    };

  });
