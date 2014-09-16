'use strict';

angular.module('letusgoApp')
  .service('CartItemService', function (localStorageService) {
    this.getTotalMoney = function (cartItems) {

      var totalMoney = 0;

      _(cartItems).forEach(function (cartItem) {

        totalMoney += cartItem.item.price * cartItem.count;
      });

      return totalMoney;
    };

    this.remove = function (key) {

      return  localStorageService.remove(key);
    };

  });

