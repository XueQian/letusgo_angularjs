'use strict';

describe("GoodsItemService", function () {

  var GoodsItemService, localStorageService;

  beforeEach(function () {
    module('letusgoApp');

    inject(function ($injector) {

      GoodsItemService = $injector.get('GoodsItemService');
      localStorageService = $injector.get('localStorageService');
    });
  });

  describe("loadItem", function () {

    it('should use loadItem function', function () {

      expect(angular.isFunction(GoodsItemService.loadItems)).toBe(true);
    });
  });

  describe("getTotalCount", function () {

    it('should use getTotalCount function', function () {

      expect(angular.isFunction(GoodsItemService.getTotalCount)).toBe(true);
    });

    it('getTotalCount return totalCount===0', function () {

      var cartLists = null;

      spyOn(localStorageService, 'get').andReturn(cartLists);

      expect(GoodsItemService.getTotalCount(cartLists)).toBe(0);
    });

    it('getTotalCount return totalCount===4 ', function () {

      var cartLists = [
        {item: 'item1', count: 2},
        {item: 'item2', count: 1},
        {iten: 'item3', count: 1}
      ];

      spyOn(localStorageService, 'get').andReturn(cartLists);

      expect(GoodsItemService.getTotalCount(cartLists)).toBe(4);

    });

  });

  describe("addToCartList", function () {

    it('should use addToCartList function', function () {

      expect(angular.isFunction(GoodsItemService.addToCartList)).toBe(true);
    });

    it('same product count++', function () {

      var cartLists = [
        {item: {barcode: 'ITEM00000', category: '服装鞋包', name: '服装1', price: 11, unit: '件'}, count: 1}
      ];
      var product = {barcode: 'ITEM00000', category: '服装鞋包', name: '服装1', price: 11, unit: '件'};

      var result = GoodsItemService.addToCartList(product, cartLists);

      expect(result[0].count).toEqual(2);
    });

    it('different product add cartList', function () {

      var cartLists = [
        {item: {barcode: 'ITEM00000', category: '服装鞋包', name: '服装1', price: 11, unit: '件'}, count: 1}
      ];
      var product = {barcode: 'ITEM00002', category: '手机数码', name: '手机１', price: 1111, unit: '件'};

      var result = GoodsItemService.addToCartList(product, cartLists);

      expect(result.length).toEqual(2);
    });

  });


  describe("get", function () {

    var cartLists = [
      {item: {barcode: 'ITEM00000', category: '服装鞋包', name: '服装1', price: 11, unit: '件'}, count: 1},
    ];

    it('should use get function', function () {

      expect(angular.isFunction(GoodsItemService.get)).toBe(true);
    });

    it('localStorageService get is OK', function () {

      spyOn(localStorageService, 'get').andReturn(cartLists);

      var result = GoodsItemService.get();

      expect(result).toEqual(cartLists);
    });

  });

  describe("set", function () {

    it('should use set function', function () {

      expect(angular.isFunction(GoodsItemService.set)).toBe(true);
    });

  });

});













