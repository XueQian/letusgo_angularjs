'use strict';

describe("goodsItemService", function () {

    var goodsItemService, localStorageService;

    beforeEach(function () {
        module('angularLeteusgoApp');

        inject(function ($injector) {

            goodsItemService = $injector.get('goodsItemService');
            localStorageService = $injector.get('localStorageService');
        });
    });

    describe("loadItem", function () {

        it('should use loadItem function', function () {

            expect(angular.isFunction(goodsItemService.loadItem)).toBe(true);
        });

        it('loadItem() is OK', function () {

            var result = goodsItemService.loadItem();

            expect(result.length).toBe(6);
            expect(result[1].barcode).toBe('ITEM00001');
            expect(result[3].name).toBe('美食１');
            expect(result[5].price).toBe(11);
        });
    });

    describe("getTotalCount", function () {

        it('should use getTotalCount function', function () {

            expect(angular.isFunction(goodsItemService.getTotalCount)).toBe(true);
        });

        it('getTotalCount return totalCount===0', function () {

            var cartLists = null;

            spyOn(localStorageService, 'get').andReturn(cartLists);

            expect(goodsItemService.getTotalCount(cartLists)).toBe(0);
        });

        it('getTotalCount return totalCount===4 ', function () {

            var cartLists = [
                {item: 'item1', count: 2},
                {item: 'item2', count: 1},
                {iten: 'item3', count: 1}
            ];

            spyOn(localStorageService, 'get').andReturn(cartLists);

            expect(goodsItemService.getTotalCount(cartLists)).toBe(4);

        });

    });

    describe("addToCartList", function () {

        it('should use addToCartList function', function () {

            expect(angular.isFunction(goodsItemService.addToCartList)).toBe(true);
        });

        it('same product count++', function () {

            var cartLists = [
                {item: {barcode: 'ITEM00000', category: '服装鞋包', name: '服装1', price: 11, unit: '件'}, count: 1}
            ];
            var product = {barcode: 'ITEM00000', category: '服装鞋包', name: '服装1', price: 11, unit: '件'};

            var result = goodsItemService.addToCartList(product, cartLists);

            expect(result[0].count).toEqual(2);
        });

        it('different product add cartList', function () {

            var cartLists = [
                {item: {barcode: 'ITEM00000', category: '服装鞋包', name: '服装1', price: 11, unit: '件'}, count: 1}
            ];
            var product = {barcode: 'ITEM00002', category: '手机数码', name: '手机１', price: 1111, unit: '件'};

            var result = goodsItemService.addToCartList(product, cartLists);

            expect(result.length).toEqual(2);
        });

    });


    describe("get", function () {

        var cartLists = [
            {item: {barcode: 'ITEM00000', category: '服装鞋包', name: '服装1', price: 11, unit: '件'}, count: 1},
        ];

        it('should use get function', function () {

            expect(angular.isFunction(goodsItemService.get)).toBe(true);
        });

        it('localStorageService get is OK', function () {

            spyOn(localStorageService, 'get').andReturn(cartLists);

            var result = goodsItemService.get();

            expect(result).toEqual(cartLists);
        });

    });

    describe("set", function () {

        it('should use set function', function () {

            expect(angular.isFunction(goodsItemService.set)).toBe(true);
        });

    });

});













