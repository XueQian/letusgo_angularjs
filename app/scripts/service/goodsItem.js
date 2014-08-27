'use strict';

angular.module('angularLeteusgoApp')
    .service('goodsItemService', function () {
        this.getTotalCount = function(cartList) {
            var totalCount=0;
            if(cartList===null){
                totalCount=0;
            }else{
                for(var i=0;i<cartList.length;i++){
                    totalCount+=cartList[i].count;
                }
            }
            return totalCount;
        };

        this.addToCartList = function(product,cartList){
            for (var i = 0; i < cartList.length; i++) {
                if (product.name === cartList[i].item.name) {
                    cartList[i].count++;
                    return cartList;
                }
            }
            var cartItem = {item:product, count:1};
            cartList.push(cartItem);
            return cartList;
        }
    });

