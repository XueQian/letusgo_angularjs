'use strict';

angular.module('angularLeteusgoApp')
    .controller('cartCtrl', function ($scope,goodsItemService) {
        var cartItem=JSON.parse(localStorage.getItem('cartProduct'));
        var cartList = JSON.parse(localStorage.getItem('cartProduct'));
        $scope.cartItems = cartItem;
        $scope.$parent.totalCount=goodsItemService.getTotalCount(cartList);
        $scope.totalMoney = getTotalMoney();
        $scope.changeCount = function(item_){
            for(var i=0;i<cartItem.length;i++){
                if(cartItem[i].item.name===item_.item.name){
                    cartItem[i].count=item_.count;
                }
            }
            localStorage.setItem('cartProduct',JSON.stringify(cartItem));
            localStorage.setItem('totalCount',JSON.stringify(goodsItemService.getTotalCount(cartList)));
            $scope.totalMoney = getTotalMoney();
            $scope.$parent.totalCount=goodsItemService.getTotalCount(cartList);
        };
    });
function getTotalMoney(){
    var cartItem=JSON.parse(localStorage.getItem('cartProduct'));
    var totalMoney=0;
    if(cartItem === null){
        totalMoney = 0;
    }else{
       for (var i = 0; i < cartItem.length; i++) {
        totalMoney+=cartItem[i].item.price*cartItem[i].count;
        }
    }
    return totalMoney;
}
