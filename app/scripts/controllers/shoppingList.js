'use strict';

angular.module('angularLeteusgoApp')
    .controller('shoppingListCtrl', function ($scope,goodsItemService,cartItemService) {

        var cartList = goodsItemService.get('cartProduct');
        $scope.cartItem=goodsItemService.get('cartProduct');

        $scope.orderItems = goodsItemService.get('cartProduct');
        $scope.$parent.totalCount=goodsItemService.getTotalCount(cartList);

        $scope.totalMoney = cartItemService.getTotalMoney($scope.cartItem);

        $scope.remove = function(){

            cartItemService.remove('cartProduct');
            goodsItemService.set('totalCount',0);
            $scope.$parent.totalCount = 0;
        };
    });

