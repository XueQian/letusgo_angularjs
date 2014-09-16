'use strict';

describe("operateCategoryService", function () {

  var operateGoodsItems, localStorageService;

  beforeEach(function () {
    module('angularLeteusgoApp');

    inject(function ($injector) {

      operateGoodsItems = $injector.get('operateGoodsItems');
      localStorageService = $injector.get('localStorageService');
    });

  });

  it('if itemLists is null', function () {
    var itemLists = '';

    spyOn(localStorageService, 'get').andReturn(itemLists);
    spyOn(localStorageService, 'set');
    operateGoodsItems.loadGoodsItems();

    expect(localStorageService.set).toHaveBeenCalled();

  });

  describe('if itemLists is not null', function () {
    var itemLists;
    beforeEach(function () {
      itemLists = [
        {barcode: 'ITEM00000', category: '0', name: '服装1', price: 11, unit: '件'},
        {barcode: 'ITEM00001', category: '0', name: '服装2', price: 11, unit: '件'}
      ];

    });

    it('loadGoodsItems', function () {

      spyOn(localStorageService, 'get').andReturn(itemLists);
      var result = operateGoodsItems.loadGoodsItems();
      expect(result.length).toBe(2);
    });

    it('getItemsById true', function () {
      var id = 1;
      spyOn(operateGoodsItems, 'loadGoodsItems').andReturn(itemLists);

      operateGoodsItems.getItemsById(id);
      expect(operateGoodsItems.getItemsById(id)).toBe(true);

    });

    it('getItemsById false', function () {
      var id = 0;
      spyOn(operateGoodsItems, 'loadGoodsItems').andReturn(itemLists);

      operateGoodsItems.getItemsById(id);
      expect(operateGoodsItems.getItemsById(id)).toBe(false);

    });

    it('addGoodsItems when hasExistGoodsItems', function () {

      var item = {barcode: 'ITEM00000', category: '0', name: '服装1', price: 11, unit: '件'};
      spyOn(localStorageService, 'set');

      operateGoodsItems.addGoodsItems(item, itemLists);

      expect(localStorageService.set).toHaveBeenCalledWith('itemLists', itemLists);

    });


    it('addGoodsItems when do not hasExistGoodsItems', function () {

      var item = {barcode: 'ITEM00009', category: '0', name: '测试1', price: 11, unit: '件'};
      spyOn(localStorageService, 'set');

      operateGoodsItems.addGoodsItems(item, itemLists);

      expect(localStorageService.set).toHaveBeenCalledWith('itemLists', itemLists);

    });

    it('getGoodsItemsByBarcode', function () {
      var barcode = 'ITEM00000';
      spyOn(localStorageService, 'get').andReturn(itemLists);
      operateGoodsItems.getGoodsItemsByBarcode(barcode);

      expect(localStorageService.get).toHaveBeenCalledWith('itemLists');
      var result = operateGoodsItems.getGoodsItemsByBarcode(barcode);

      expect(result.name).toBe('服装1');
    });

    it('modifyGoods', function () {
      var itemList = {barcode: 'ITEM00000', category: '0', name: '服装1', price: 11, unit: '件'};
      spyOn(localStorageService, 'get').andReturn(itemLists);
      spyOn(localStorageService, 'set');

      operateGoodsItems.modifyGoods(itemList);

      expect(localStorageService.set).toHaveBeenCalledWith('itemLists', itemLists);

    });

  });

});
