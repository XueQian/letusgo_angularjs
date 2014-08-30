'use strict';

angular.module('angularLeteusgoApp')
  .controller('goodsListCtrl', function ($scope, goodsItemService) {

    var itemList = goodsItemService.loadItem();
    var cartList = goodsItemService.get('cartProduct');

    goodsItemService.set('itemList', itemList);
    goodsItemService.set('totalCount', goodsItemService.getTotalCount(cartList));

    $scope.products = goodsItemService.get('itemList');
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


