'use strict';

angular.module('letusgoApp')
  .controller('shoppingListCtrl', function ($scope, goodsItemService, CartItemService) {

    $scope.$emit('parent_cartActive');

    $scope.orderItems = goodsItemService.get('cartItems');

    $scope.$emit('parent_totalCount');

    $scope.totalMoney = CartItemService.getTotalMoney($scope.orderItems);

    $scope.remove = function () {

      CartItemService.remove('cartItems');

      goodsItemService.set('totalCount', 0);

      $scope.$emit('parent_totalCount===0');
    };
  });

