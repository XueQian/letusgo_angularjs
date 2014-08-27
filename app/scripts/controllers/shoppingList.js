'use strict';

angular.module('angularLeteusgoApp')
    .controller('shoppingListCtrl', function ($scope,goodsItemService,cartItemService,localStorageService) {
        $scope.cartList = localStorageService.get('cartProduct');
        $scope.cartItem=localStorageService.get('cartProduct');
        $scope.orderItems = localStorageService.get('cartProduct');
        $scope.$parent.totalCount=goodsItemService.getTotalCount($scope.cartList);
        $scope.totalMoney = cartItemService.getTotalMoney($scope.cartItem);
        $scope.remove = function(){
            localStorageService.remove('cartProduct');
            localStorageService.set('totalCount',0);
            $scope.$parent.totalCount=goodsItemService.getTotalCount($scope.cartList);
        };
    });

