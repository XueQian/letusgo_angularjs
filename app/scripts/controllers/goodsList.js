'use strict';

angular.module('angularLeteusgoApp')
  .controller('goodsListCtrl', function ($scope, goodsItemService, operateCategoryService) {

    $scope.$emit('_parent_goodsListActive');

    var itemLists = goodsItemService.loadItem();
    var cartList = goodsItemService.get('cartProduct');

    $scope.getCategoryName = function (id) {
      return operateCategoryService.getCategorysById(id,null).name;
    };
    goodsItemService.set('itemLists', itemLists);
    goodsItemService.set('totalCount', goodsItemService.getTotalCount(cartList));

    $scope.products = goodsItemService.get('itemLists');
    $scope.$emit('_parent_totalCount');

    $scope.addToCart = function (productItem) {

      if (cartList === null) {
        cartList = [];
      }

      cartList = goodsItemService.addToCartList(productItem, cartList);

      goodsItemService.set('cartProduct', cartList);
      goodsItemService.set('totalCount', goodsItemService.getTotalCount(cartList));

      $scope.$emit('_parent_totalCount');
    };
  });


