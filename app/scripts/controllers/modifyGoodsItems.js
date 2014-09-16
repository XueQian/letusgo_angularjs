'use strict';

angular.module('letusgoApp')
  .controller('modifyGoodsItemsCtrl', function ($scope, GoodsItemService, operatecategorieservice, operateGoodsItems, $routeParams) {

    $scope.$emit('parent_manageGoodsActive');

    $scope.itemList = operateGoodsItems.getGoodsItemsByBarcode($routeParams.barcode);

    $scope.categories = operatecategorieservice.loadcategories();

    $scope.category = _.find($scope.categories, function (category){

      return category.id == $scope.itemList.category;
    });

    $scope.modifyGoods = function () {

      $scope.itemList.category = $scope.category.id;
      operateGoodsItems.modifyGoods($scope.itemList);
    };

  });

