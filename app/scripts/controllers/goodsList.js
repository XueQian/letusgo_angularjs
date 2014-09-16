'use strict';

angular.module('letusgoApp')
  .controller('goodsListCtrl', function ($scope, goodsItemService, operatecategorieservice) {

    $scope.$emit('parent_goodsListActive');

    var itemList = goodsItemService.loadItems();
    var cartList = goodsItemService.get('cartItems');

    $scope.getCategoryName = function (id) {
      return operatecategorieservice.getcategoryById(id, null).name;
    };
    goodsItemService.set('itemList', itemList);
    goodsItemService.set('totalCount', goodsItemService.getTotalCount(cartList));

    $scope.products = goodsItemService.get('itemList');
    $scope.$emit('parent_totalCount');

    $scope.addToCart = function (productItem) {

      if (cartList === null) {
        cartList = [];
      }

      cartList = goodsItemService.addToCartList(productItem, cartList);

      goodsItemService.set('cartItems', cartList);
      goodsItemService.set('totalCount', goodsItemService.getTotalCount(cartList));

      $scope.$emit('parent_totalCount');
    };
  });


