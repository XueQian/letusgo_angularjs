'use strict';

angular.module('letusgoApp')
  .controller('goodsListCtrl', function ($scope, GoodsItemService, Operatecategorieservice) {

    $scope.$emit('parent_goodsListActive');

    var itemList = GoodsItemService.loadItems();
    var cartList = GoodsItemService.get('cartItems');

    $scope.getCategoryName = function (id) {
      return Operatecategorieservice.getcategoryById(id, null).name;
    };
    GoodsItemService.set('itemList', itemList);
    GoodsItemService.set('totalCount', GoodsItemService.getTotalCount(cartList));

    $scope.products = GoodsItemService.get('itemList');
    $scope.$emit('parent_totalCount');

    $scope.addToCart = function (productItem) {

      if (cartList === null) {
        cartList = [];
      }

      cartList = GoodsItemService.addToCartList(productItem, cartList);

      GoodsItemService.set('cartItems', cartList);
      GoodsItemService.set('totalCount', GoodsItemService.getTotalCount(cartList));

      $scope.$emit('parent_totalCount');
    };
  });


