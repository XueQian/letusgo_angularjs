'use strict';

angular.module('angularLeteusgoApp')
    .service('goodsItemService', function () {
        this.getTotalCount = function (cartLists) {
            var totalCount = 0;
            if (cartLists === null) {
                totalCount = 0;
            }
            _(cartLists).forEach(function (cartList) {
                totalCount += cartList.count;
            });

            return totalCount;
        };
        this.addToCartList = function (product, cartLists) {
            _(cartLists).forEach(function (cartList) {
                if (product.name === cartList.item.name) {
                    cartList.count++;
                    return cartLists;
                }
            });
            var cartItem = {item: product, count: 1};
            cartLists.push(cartItem);
            return cartLists;
        };
    });

