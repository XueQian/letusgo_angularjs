'use strict';

angular.module('letusgoApp')
  .controller('modifyGoodsItemsCtrl', function ($scope, GoodsItemService, Operatecategorieservice, Operategoodsitemservice, $routeParams) {

    $scope.$emit('parent_manageGoodsActive');

    $scope.itemList = Operategoodsitemservice.getGoodsItemsByBarcode($routeParams.barcode);

    $scope.categories = Operatecategorieservice.loadcategories();

    $scope.category = _.find($scope.categories, function (category) {

      return category.id == $scope.itemList.category;
    });

    $scope.modifyGoods = function () {

      $scope.itemList.category = $scope.category.id;
      Operategoodsitemservice.modifyGoods($scope.itemList);
    };

  });

