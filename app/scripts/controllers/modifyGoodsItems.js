'use strict';

angular.module('letusgoApp')
  .controller('modifyGoodsItemsCtrl', function ($scope, goodsItemService, operatecategorieservice, operateGoodsItems, $routeParams) {

    $scope.$emit('parent_manageGoodsActive');

    $scope.itemList = operateGoodsItems.getGoodsItemsByBarcode($routeParams.barcode);

    $scope.categories = operatecategorieservice.loadcategories();
    $scope.category = operatecategorieservice.getcategoriesById($scope.itemList.category, $scope.categories);

//    $scope.category = _.find($scope.categories, function (category){
//
//      return category.id === $scope.itemList.category;
//    });
  //  console.log($scope.category);

    $scope.modifyGoods = function () {

      $scope.itemList.category = $scope.category.id;
      operateGoodsItems.modifyGoods($scope.itemList);
    };

  });

