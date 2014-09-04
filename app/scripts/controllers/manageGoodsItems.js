'use strict';

angular.module('angularLeteusgoApp')
  .controller('manageGoodsItemsCtrl', function ($scope, goodsItemService, operateCategoryService,operateGoodsItems) {

//    var itemList = operateCategoryService.loadItem();
//    goodsItemService.set('itemList', itemList);
    $scope.products = operateGoodsItems.loadGoodsItems();
    //console.log( itemList);

    $scope.getCategoryName = function (id) {
      return operateCategoryService.getCategoryById(id);
    };

    $scope.deleteCategory = function(index) {
      $scope.products.splice(index,1);
      console.log("1111111111");
      goodsItemService.set('itemList',$scope.products);
    }

  });
