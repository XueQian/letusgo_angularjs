'use strict';

angular.module('angularLeteusgoApp')
    .controller('cartCtrl', function ($scope,goodsItemService,localStorageService,cartItemService) {
        $scope.cartItems=localStorageService.get('cartProduct');
        $scope.$parent.totalCount=goodsItemService.getTotalCount($scope.cartItems);
        $scope.totalMoney = cartItemService.getTotalMoney($scope.cartItems);
        $scope.changeCount = function(item_){
            for(var i=0;i<$scope.cartItems.length;i++){
                if($scope.cartItems[i].item.name===item_.item.name){
                    $scope.cartItems[i].count=item_.count;
                }
            }
            localStorageService.set('cartProduct',$scope.cartItems);
            $scope.totalMoney = cartItemService.getTotalMoney($scope.cartItems);
            localStorageService.set('totalCount',goodsItemService.getTotalCount($scope.cartItems));
            $scope.$parent.totalCount=goodsItemService.getTotalCount($scope.cartItems);
        };


    });
