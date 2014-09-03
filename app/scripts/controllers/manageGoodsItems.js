'use strict';

angular.module('angularLeteusgoApp')
  .controller('manageGoodsItemsCtrl', function ($scope, goodsItemService, operateCategoryService) {

    var itemList = goodsItemService.loadItem();
    $scope.products = goodsItemService.get('itemList');

    $scope.getCategoryName = function (id) {
      return operateCategoryService.getCategoryById(id);
    };

    $scope.deleteCategory = function(index) {
      $scope.products.splice(index,1);
      console.log("1111111111");
    }


  });
