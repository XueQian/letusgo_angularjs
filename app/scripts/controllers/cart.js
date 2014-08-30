'use strict';

angular.module('angularLeteusgoApp')
  .controller('cartCtrl', function ($scope, goodsItemService, cartItemService) {

    $scope.cartItems = goodsItemService.get('cartProduct');

    $scope.$emit('_parent_totalCount');

    $scope.totalMoney = cartItemService.getTotalMoney($scope.cartItems);

    $scope.changeCount = function (item_) {
      console.log('1');
      _($scope.cartItems).forEach(function (cartItem) {
        console.log('2');

        if (cartItem.item.name === item_.item.name) {
          console.log(cartItem+"______cartItem");
          console.log(item_);
          cartItem.count = item_.count;
        }
      });

      goodsItemService.set('cartProduct', $scope.cartItems);
      $scope.totalMoney = cartItemService.getTotalMoney($scope.cartItems);

      goodsItemService.set('totalCount', goodsItemService.getTotalCount($scope.cartItems));

      $scope.$emit('_parent_totalCount');
    };
  });
