'use strict';

angular.module('angularLeteusgoApp')
  .controller('shoppingListCtrl', function ($scope, goodsItemService, cartItemService) {

    $scope.$emit('_parent_cartActive');

    $scope.orderItems = goodsItemService.get('cartProduct');

    $scope.$emit('_parent_totalCount');

    $scope.totalMoney = cartItemService.getTotalMoney($scope.orderItems);

    $scope.remove = function () {

      cartItemService.remove('cartProduct');

      goodsItemService.set('totalCount', 0);

      $scope.$emit('_parent_totalCount===0');
    };
  });

