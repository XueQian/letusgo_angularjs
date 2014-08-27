'use strict';

angular.module('angularLeteusgoApp')
    .controller('shoppingListCtrl', function ($scope,goodsItemService) {
        var cartList = JSON.parse(localStorage.getItem('cartProduct'));
        $scope.orderItems = JSON.parse(localStorage.getItem('cartProduct'));
        $scope.$parent.totalCount=goodsItemService.getTotalCount(cartList);
        $scope.totalMoney = getTotalMoney();
        $scope.remove = function(){
            localStorage.removeItem('cartProduct');
            localStorage.setItem('totalCount',0);
            $scope.$parent.totalCount=goodsItemService.getTotalCount(cartList);
        };
    });

