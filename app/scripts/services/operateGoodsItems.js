'use strict';

angular.module('letusgoApp')
  .service('Operategoodsitemservice', function (localStorageService) {
    this.loadGoodsItems = function () {

      var itemList = [
        {barcode: 'ITEM00000', category: '0', name: '服装1', price: 11, unit: '件'},
        {barcode: 'ITEM00001', category: '0', name: '服装2', price: 11, unit: '件'},
        {barcode: 'ITEM00002', category: '1', name: '手机１', price: 1111, unit: '件'},
        {barcode: 'ITEM00003', category: '2', name: '美食１', price: 1100, unit: '件'},
        {barcode: 'ITEM00004', category: '3', name: '护肤１', price: 101, unit: '件'},
        {barcode: 'ITEM00005', category: '4', name: '用品１', price: 11, unit: '件'}
      ];

      var temp = localStorageService.get('itemList');

      if (temp) {

        return temp;
      }

      localStorageService.set('itemList', itemList);

      return itemList;

    };
    this.getItemById = function (id) {

      var result = _.find(this.loadGoodsItems(), function (ItemList) {

        return ItemList.category == id;
      });

      return result ? false : true;
    };

    this.addGoodsItems = function (item, itemList) {

      item.category = item.category.id;

      var hasExistGoodsItems = _.any(itemList, function (newItemList) {

        return item.name === newItemList.name;

      });

      if (!hasExistGoodsItems) {

        var barcode = itemList[itemList.length - 1].barcode.substring(8);

        item.barcode = itemList[itemList.length - 1].barcode.substring(0, 8) + (++barcode);

        itemList.push(item);

      }
      localStorageService.set('itemList', itemList);
    };

    this.getGoodsItemsByBarcode = function (barcode) {
      var itemList = localStorageService.get('itemList');

      return _.find(itemList, {barcode: barcode}) || {};
    };

    this.modifyGoods = function (newItemList) {
      var itemList = localStorageService.get('itemList');

      _.forEach(itemList, function (item, index) {

        if (item.barcode === newItemList.barcode) {
          itemList[index] = itemList;
        }
      });

      localStorageService.set('itemList', itemList);

      return itemList;
    }
  });

