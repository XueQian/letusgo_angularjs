'use strict';

angular.module('angularLeteusgoApp')
    .controller('cartCtrl', function ($scope,goodsItemService,localStorageService,cartItemService) {
        $scope.cartItem=localStorageService.get('cartProduct');
        $scope.cartList = localStorageService.get('cartProduct');
        $scope.cartItems = $scope.cartItem;
        $scope.$parent.totalCount=goodsItemService.getTotalCount($scope.cartList);
        $scope.totalMoney = cartItemService.getTotalMoney($scope.cartItem);
        $scope.changeCount = function(item_){
            for(var i=0;i<$scope.cartItem.length;i++){
                if($scope.cartItem[i].item.name===item_.item.name){
                    $scope.cartItem[i].count=item_.count;
                }
            }
            localStorageService.set('cartProduct',$scope.cartItem);
            localStorageService.set('totalCount',goodsItemService.getTotalCount($scope.cartList));
            $scope.totalMoney = cartItemService.getTotalMoney($scope.cartItem);
            $scope.$parent.totalCount=goodsItemService.getTotalCount($scope.cartList);
        };
    });
