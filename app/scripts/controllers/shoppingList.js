'use strict';

angular.module('letusgoApp')
  .controller('shoppingListCtrl', function ($scope, goodsItemService, cartItemService) {

    $scope.$emit('parent_cartActive');

    $scope.orderItems = goodsItemService.get('cartProduct');

    $scope.$emit('parent_totalCount');

    $scope.totalMoney = cartItemService.getTotalMoney($scope.orderItems);

    $scope.remove = function () {

      cartItemService.remove('cartProduct');

      goodsItemService.set('totalCount', 0);

      $scope.$emit('parent_totalCount===0');
    };
  });

