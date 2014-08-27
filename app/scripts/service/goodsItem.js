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

