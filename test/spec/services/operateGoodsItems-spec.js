'use strict';

describe("Operatecategorieservice", function () {

  var Operategoodsitemservice, localStorageService;

  beforeEach(function () {
    module('letusgoApp');

    inject(function ($injector) {

      Operategoodsitemservice = $injector.get('Operategoodsitemservice');
      localStorageService = $injector.get('localStorageService');
    });

  });

  it('if itemList is null', function () {
    var itemList = '';

    spyOn(localStorageService, 'get').andReturn(itemList);
    spyOn(localStorageService, 'set');
    Operategoodsitemservice.loadGoodsItems();

    expect(localStorageService.set).toHaveBeenCalled();

  });

  describe('if itemList is not null', function () {
    var itemList;
    beforeEach(function () {
      itemList = [
        {barcode: 'ITEM00000', category: '0', name: '服装1', price: 11, unit: '件'},
        {barcode: 'ITEM00001', category: '0', name: '服装2', price: 11, unit: '件'}
      ];

    });

    it('loadGoodsItems', function () {

      spyOn(localStorageService, 'get').andReturn(itemList);
      var result = Operategoodsitemservice.loadGoodsItems();
      expect(result.length).toBe(2);
    });

    it('getItemById true', function () {
      var id = 1;
      spyOn(Operategoodsitemservice, 'loadGoodsItems').andReturn(itemList);

      Operategoodsitemservice.getItemById(id);
      expect(Operategoodsitemservice.getItemById(id)).toBe(true);

    });

    it('getItemById false', function () {
      var id = 0;
      spyOn(Operategoodsitemservice, 'loadGoodsItems').andReturn(itemList);

      Operategoodsitemservice.getItemById(id);
      expect(Operategoodsitemservice.getItemById(id)).toBe(false);

    });

    it('addGoodsItems when hasExistGoodsItems', function () {

      var item = {barcode: 'ITEM00000', category: '0', name: '服装1', price: 11, unit: '件'};
      spyOn(localStorageService, 'set');

      Operategoodsitemservice.addGoodsItems(item, itemList);

      expect(localStorageService.set).toHaveBeenCalledWith('itemList', itemList);

    });


    it('addGoodsItems when do not hasExistGoodsItems', function () {

      var item = {barcode: 'ITEM00009', category: '0', name: '测试1', price: 11, unit: '件'};
      spyOn(localStorageService, 'set');

      Operategoodsitemservice.addGoodsItems(item, itemList);

      expect(localStorageService.set).toHaveBeenCalledWith('itemList', itemList);

    });

    it('getGoodsItemsByBarcode', function () {
      var barcode = 'ITEM00000';
      spyOn(localStorageService, 'get').andReturn(itemList);
      Operategoodsitemservice.getGoodsItemsByBarcode(barcode);

      expect(localStorageService.get).toHaveBeenCalledWith('itemList');
      var result = Operategoodsitemservice.getGoodsItemsByBarcode(barcode);

      expect(result.name).toBe('服装1');
    });

    it('modifyGoods', function () {
      var itemList = {barcode: 'ITEM00000', category: '0', name: '服装1', price: 11, unit: '件'};
      spyOn(localStorageService, 'get').andReturn(itemList);
      spyOn(localStorageService, 'set');

      Operategoodsitemservice.modifyGoods(itemList);

      expect(localStorageService.set).toHaveBeenCalledWith('itemList', itemList);

    });

  });

});
