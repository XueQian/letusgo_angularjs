'use strict';

angular.module('angularLeteusgoApp')
    .service('goodsItemService', function () {
//        this.getTotalCount = function() {
//
//
//
//        };
//        this.addToCart = function() {
//
//
//
//        };
        this.isExistItem = function(product,cartList){
            var item_;
            for (var i = 0; i < cartList.length; i++) {
                if (product.name === cartList[i].item.name) {
                    item_ = cartList[i];
                    break;
                } else {
                    item_=false;
                }
            }
            return item_;
        }
    });

