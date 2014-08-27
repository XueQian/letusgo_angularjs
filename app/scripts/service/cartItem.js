'use strict';

angular.module('angularLeteusgoApp')
    .service('cartItemService', function () {
        this.getTotalMoney=function(cartItem){
            var totalMoney=0;
            if(cartItem === null){
                totalMoney = 0;
            }else{
                for (var i = 0; i < cartItem.length; i++) {
                    totalMoney+=cartItem[i].item.price*cartItem[i].count;
                }
            }
            return totalMoney;
        };


    });

