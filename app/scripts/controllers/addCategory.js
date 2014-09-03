'use strict';

angular.module('angularLeteusgoApp')
  .controller('addCategoryCtrl', function ($scope,goodsItemService) {

    var itemList = goodsItemService.loadItem();
    $scope.products = goodsItemService.get('itemList');
//        $scope.addCategory = function() {
//        $scope.addCategoryModel
//
//    }



  });
