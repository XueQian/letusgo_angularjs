'use strict';

describe("CartItemService", function () {

  var CartItemService, localStorageService;

  beforeEach(function () {
    module('letusgoApp');

    inject(function ($injector) {

      CartItemService = $injector.get('CartItemService');
      localStorageService = $injector.get('localStorageService');
    });
  });

  describe("getTotalMoney", function () {

    it('should use getTotalMoney function', function () {

      expect(angular.isFunction(CartItemService.getTotalMoney)).toBe(true);
    });

    it('getTotalMoney return totalMoney===0', function () {

      var cartItems = null;

      spyOn(localStorageService, 'get').andReturn(cartItems);

      expect(CartItemService.getTotalMoney(cartItems)).toBe(0);
    });

    it('getTotalMoney return totalMoney ', function () {

      var cartItems = [
        {item: {barcode: 'ITEM00000', category: '服装鞋包', name: '服装1', price: 11, unit: '件'}, count: 2},
        {item: {barcode: 'ITEM00002', category: '手机数码', name: '手机１', price: 1111, unit: '件'}, count: 1},
      ];

      spyOn(localStorageService, 'get').andReturn(cartItems);

      expect(CartItemService.getTotalMoney(cartItems)).toBe(1133);

    });

  });

  describe("remove", function () {

    it('should use remove function', function () {

      spyOn(localStorageService, 'remove');

      CartItemService.remove('cartProduct');

      expect(localStorageService.remove).toHaveBeenCalledWith('cartProduct');
      expect(angular.isFunction(CartItemService.remove)).toBe(true);
    });

  });

});
