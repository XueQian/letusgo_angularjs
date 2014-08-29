'use strict';

describe("cartItemService", function () {

    var cartItemService, localStorageService;

    beforeEach(function () {
        module('angularLeteusgoApp');

        inject(function ($injector) {

            cartItemService = $injector.get('cartItemService');
            localStorageService = $injector.get('localStorageService');
        });
    });

    describe("getTotalMoney", function () {

        it('should use getTotalMoney function', function () {

            expect(angular.isFunction(cartItemService.getTotalMoney)).toBe(true);
        });

        it('getTotalMoney return totalMoney===0', function () {

            var cartItems = null;

            spyOn(localStorageService, 'get').andReturn(cartItems);

            expect(cartItemService.getTotalMoney(cartItems)).toBe(0);
        });

        it('getTotalMoney return totalMoney ', function () {

            var cartItems = [
                {item: {barcode: 'ITEM00000', category: '服装鞋包', name: '服装1', price: 11, unit: '件'}, count: 2},
                {item: {barcode: 'ITEM00002', category: '手机数码', name: '手机１', price: 1111, unit: '件'}, count: 1},
            ];

            spyOn(localStorageService, 'get').andReturn(cartItems);

            expect(cartItemService.getTotalMoney(cartItems)).toBe(1133);

        });

    });

    describe("remove", function () {

        it('should use remove function', function () {

            spyOn(localStorageService,'remove');

            cartItemService.remove('cartProduct');

            expect(localStorageService.remove).toHaveBeenCalledWith('cartProduct');
            expect(angular.isFunction(cartItemService.remove)).toBe(true);
        });

    });
});
