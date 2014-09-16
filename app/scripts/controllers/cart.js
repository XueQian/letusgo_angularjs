'use strict';

angular.module('letusgoApp')
  .controller('cartCtrl', function ($scope, goodsItemService, cartItemService) {

    $scope.$emit('parent_cartActive');

    $scope.cartItems = goodsItemService.get('cartProduct');

    $scope.$emit('parent_totalCount');

    $scope.totalMoney = cartItemService.getTotalMoney($scope.cartItems);

    $scope.changeCount = function (newCartItem) {
      _($scope.cartItems).forEach(function (cartItem) {

        if (cartItem.item.name === newCartItem.item.name) {

          cartItem.count = newCartItem.count;
        }
      });

      goodsItemService.set('cartProduct', $scope.cartItems);
      $scope.totalMoney = cartItemService.getTotalMoney($scope.cartItems);

      goodsItemService.set('totalCount', goodsItemService.getTotalCount($scope.cartItems));

      $scope.$emit('parent_totalCount');
    };
  });
