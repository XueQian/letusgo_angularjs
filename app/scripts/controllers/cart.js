'use strict';

angular.module('angularLeteusgoApp')
  .controller('cartCtrl', function ($scope, goodsItemService, cartItemService) {

    $scope.$emit('_parent_cartActive');

    $scope.cartItems = goodsItemService.get('cartProduct');

    $scope.$emit('_parent_totalCount');

    $scope.totalMoney = cartItemService.getTotalMoney($scope.cartItems);

    $scope.changeCount = function (item_) {
      _($scope.cartItems).forEach(function (cartItem) {

        if (cartItem.item.name === item_.item.name) {

          cartItem.count = item_.count;
        }
      });

      goodsItemService.set('cartProduct', $scope.cartItems);
      $scope.totalMoney = cartItemService.getTotalMoney($scope.cartItems);

      goodsItemService.set('totalCount', goodsItemService.getTotalCount($scope.cartItems));

      $scope.$emit('_parent_totalCount');
    };
  });
