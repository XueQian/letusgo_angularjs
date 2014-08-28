'use strict';

angular.module('angularLeteusgoApp')
    .service('cartItemService', function (localStorageService) {
        this.getTotalMoney=function(cartItems) {
            var totalMoney = 0;
            if (cartItems === null) {
                totalMoney = 0;
            } else {
                _(cartItems).forEach(function (cartItem) {
                    totalMoney += cartItem.item.price * cartItem.count;
                });
                return totalMoney;
            }
        };
    });

